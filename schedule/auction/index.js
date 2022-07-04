/**
 * Create with blockchainWatcher
 * Author: ChrisChiu
 * Date: 2022/4/21
 * Desc
 */

const Events = require("../../utils/events");
const auctionService = require('../../service/auction');

const auction = async (web3) => {
    try {
        const arr = await Events.getPastEvents(web3, "USTNAuction");

        if (arr.length > 0) {
            for (let i = 0; i < arr.length; i++) {
                const data = arr[i];
                let obj = {};
                switch (data.event) {
                    case "auctionStatus":
                        obj = {
                            number: data.returnValues.n,
                            amount: data.returnValues._auction,
                            startAmount: data.returnValues._startValue,
                            overtime: data.returnValues._overTime * 1000,
                            highValue: data.returnValues._highValue,
                            status: data.returnValues._status,
                            blockNum: data.blockNumber,
                            blockHash: data.blockHash,
                            transactionHash: data.transactionHash
                        }
                        await auctionService.newAuction(obj);
                        break;
                    case "auctionDetail":
                        obj = {
                            number: data.returnValues.n,
                            account: data.returnValues.bider.toLowerCase(),
                            amount: data.returnValues._highValue,
                            extractStatus: data.returnValues._extractStatus,
                            blockNum: data.blockNumber,
                            blockHash: data.blockHash,
                            transactionHash: data.transactionHash
                        }
                        await auctionService.newAuctionDetail(obj);
                        break;
                    case "personalAuction":
                        obj = {
                            number: data.returnValues.n,
                            account: data.returnValues._user.toLowerCase(),
                            amount: data.returnValues._sales,
                            blockNum: data.blockNumber,
                            blockHash: data.blockHash,
                            transactionHash: data.transactionHash
                        }
                        await auctionService.newAuctionResult(obj);
                        break;

                }
            }
        }
    } catch (e) {
        console.error(e.toString());
    }
}

module.exports = auction;
