/**
 * Create with blockchainWatcher
 * Author: ChrisChiu
 * Date: 2022/4/15
 * Desc
 */

const Events = require("../../utils/events");
const bidService = require("../../service/bid");

const bid = async (web3) => {
    try {
        const arr = await Events.getPastEvents(web3, "bid");

        if (arr.length > 0) {
            for (let i = 0; i < arr.length; i++) {
                const data = arr[i];
                let obj = {};
                switch (data.event) {
                    case "bidResult":
                        obj = {
                            account: data.returnValues._bider.toLowerCase(),
                            type: data.returnValues._type,
                            result: data.returnValues._result,
                            status: data.returnValues._status,
                            amount: data.returnValues._amount,
                            blockNum: data.blockNumber,
                            blockHash: data.blockHash,
                            transactionHash: data.transactionHash
                        }
                        await bidService.newBid(obj);
                        break;
                }
            }
        }
    } catch (e) {
        console.error(e.toString());
    }
}

module.exports = bid;
