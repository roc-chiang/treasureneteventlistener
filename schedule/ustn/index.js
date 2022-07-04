/**
 * Create with blockchainWatcher
 * Author: ChrisChiu
 * Date: 2022/4/19
 * Desc
 */


const Events = require("../../utils/events");
const ustnService = require("../../service/ustn");

const _ustnConvert = async (web3) => {
    try {
        const arr = await Events.getPastEvents(web3, "USTN");

        if (arr.length > 0) {
            for (let i = 0; i < arr.length; i++) {
                const data = arr[i];
                let obj = {};
                switch (data.event) {
                    case "convert":
                        obj = {
                            account: data.returnValues._user.toLowerCase(),
                            unit: data.returnValues._unitValueTotal,
                            ustn: data.returnValues._USTNAmount,
                            type: data.returnValues._type,
                            blockNum: data.blockNumber,
                            blockHash: data.blockHash,
                            transactionHash: data.transactionHash
                        }
                        await ustnService.newUstnConvert(obj);
                        break;
                }
            }
        }
    } catch (e) {
        console.error(e.toString());
    }
}

const _ustnDeposit = async (web3) => {
    try {
        const arr = await Events.getPastEvents(web3, "USTNFinance");

        if (arr.length > 0) {
            for (let i = 0; i < arr.length; i++) {
                const data = arr[i];
                let obj = {};
                switch (data.event) {
                    case "dwDetail":
                        obj = {
                            account: data.returnValues._user.toLowerCase(),
                            type: data.returnValues._type,
                            amount: data.returnValues.amount,
                            blockNum: data.blockNumber,
                            blockHash: data.blockHash,
                            transactionHash: data.transactionHash
                        }
                        await ustnService.newUstnDeposit(obj);
                        break;
                    case "loanRecord":
                        obj = {
                            account: data.returnValues._user.toLowerCase(),
                            number: data.returnValues.n,
                            unitAmount:data.returnValues._unitAmount,
                            totalDebt:data.returnValues._totalDebt,
                            pledgeRate:data.returnValues._pledgeRate,
                            status:data.returnValues._status,
                            operationStatus:data.returnValues._operationStatus,
                            ustn: data.returnValues._ustn,
                            unit: data.returnValues._unit,
                            unitValue: data.returnValues._unitValue,
                            pledgeRateBefore: data.returnValues._pledgeRateBefore,
                            blockNum: data.blockNumber,
                            blockHash: data.blockHash,
                            transactionHash: data.transactionHash
                        }
                        await ustnService.newUstnLoan(obj);
                        break;
                }
            }
        }
    } catch (e) {
        console.error(e.toString());
    }
}

const ustn = async (web3) => {
    try {
        await _ustnConvert(web3);
        await _ustnDeposit(web3);
    } catch (e) {
        console.error(e.toString());
    }
}

module.exports = ustn;
