/**
 * Create with blockchainWatcher
 * Author: ChrisChiu
 * Date: 2022/4/14
 * Desc
 */

const Events = require("../../utils/events");
const MarginService = require("../../service/margin");

const expense = async (web3) => {

    try {
        const arr = await Events.getPastEvents(web3, "expense");

        if (arr.length > 0) {
            for (let i = 0; i < arr.length; i++) {
                switch (arr[i].event) {
                    case "expenseHistory":
                        const data = arr[i];
                        const obj = {
                            account: data.returnValues.operator.toLowerCase(),
                            type: data.returnValues._type,
                            amount: data.returnValues.tokens,
                            blockNum: data.blockNumber,
                            blockHash: data.blockHash,
                            transactionHash: data.transactionHash
                        }
                        await MarginService.newMargin(obj);
                        break;
                }
            }
        }
    } catch (e) {
        console.error(e.toString());
    }
}

module.exports = expense
