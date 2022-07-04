/**
 * Create with blockchainWatcher
 * Author: ChrisChiu
 * Date: 2022/3/28
 * Desc
 */

const BlockNumService = require("../service/blocknum");
const fs = require("fs");
const path = require("path");
const config = require("../config");
const LogsService = require("../service/logs");

const blocknum = async (web3, contract) => new Promise(async (resolve, reject) => {
    try {
        const fromBn = await BlockNumService.getBlockNum(contract);
        if (!Number.isInteger(fromBn)) return reject('get blocknum failed.');
        if (!web3 || !web3.eth) return reject('web3 paramter error.');
        let toBn = await web3.eth.getBlockNumber();
        /* 间隔过大 每次100个区块进行追逐 直到追上 */
        if ((toBn - fromBn) > 100) toBn = fromBn + 100;
        return resolve({
            fromBn: fromBn + 1,
            toBn
        });
    } catch (e) {
        return reject(e);
    }
})

const getPastEvents = async (web3, contract) => new Promise(async (resolve, reject) => {
    if (!config.contract[contract] || !config.contract[contract].abiPath || !config.contract[contract].address) {
        return reject(`contract parameter error.`);
    }
    if (!web3.eth) {
        return reject(`web3 paramter error.`)
    }

    let abi;
    try {
        abi = JSON.parse(fs.readFileSync(path.join(__dirname, "..", config.contract[contract].abiPath)));
    } catch (e) {
        console.error(e);
        return reject('get abi failed.');
    }

    const contractAddress = config.contract[contract].address;
    const testContract = new web3.eth.Contract(abi, contractAddress);

    try {
        const {fromBn, toBn} = await blocknum(web3, contract);
        const d = new Date();

        const arr = await testContract.getPastEvents('allEvents', {
            fromBlock: fromBn,
            toBlock: toBn
        });


        /* 打印时间间隔 */
        if (!process.env.ENVIRONMENT.includes('prod')) {
            console.log(`Complete this round of operations(Contract:${contract}  ${fromBn}-${toBn}) after ${new Date() - d}ms.`);
        }

        if (arr.length > 0) {
            await LogsService.newLogs({contract: contract, blocknum: toBn, count: arr.length});
        }

        /* 更新DB中的起始区块编号 */
        if (!await BlockNumService.updateBlockNum(contract, toBn)) {
            return reject('update block num failed.')
        }

        return resolve(arr);
    } catch (e) {
        return reject(e);
    }

})

module.exports = {
    getPastEvents
}
