/**
 * Create with blockchainWatcher
 * Author: ChrisChiu
 * Date: 2022/5/6
 * Desc
 */

const Events = require("../../utils/events");
const daoService = require("../../service/dao");

const dao = async (web3) => {
    try {
        const arr = await Events.getPastEvents(web3, "DAO");

        if (arr.length > 0) {
            for (let i = 0; i < arr.length; i++) {
                const data = arr[i];
                let obj = {};
                switch (data.event) {
                    case "proposalDetail":
                        obj = {
                            account: data.returnValues._proposer.toLowerCase(),
                            number: data.returnValues.n,
                            title: data.returnValues.content,
                            desc: data.returnValues.uuid,
                            vote: data.returnValues._vote,
                            over: data.returnValues._over,
                            status: data.returnValues._status,
                            executeStatus: data.returnValues._executeStatus,
                            blockNum: data.blockNumber,
                            blockHash: data.blockHash,
                            transactionHash: data.transactionHash
                        }
                        await daoService.newDaoDetail(obj);
                        break;
                    case "proposalPersonal":
                        obj = {
                            account: data.returnValues._voter.toLowerCase(),
                            number: data.returnValues.n,
                            voteNow: data.returnValues._voteNow,
                            voteTotal: data.returnValues._voteTotal,
                            extractStatus: data.returnValues._extractStatus,
                            blockNum: data.blockNumber,
                            blockHash: data.blockHash,
                            transactionHash: data.transactionHash
                        }
                        await daoService.newDaoVote(obj);
                        break;
                }
            }
        }
    } catch (e) {
        console.error(e.toString());
    }
}

module.exports = dao;
