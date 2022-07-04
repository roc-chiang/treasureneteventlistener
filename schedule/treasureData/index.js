/**
 * Create with blockchainWatcher
 * Author: ChrisChiu
 * Date: 2022/4/14
 * Desc
 */

const Events = require("../../utils/events");
const ProduceService = require("../../service/produce");

const produce = async (web3) => {

    try {
        const arr = await Events.getPastEvents(web3, "treasureData");

        if (arr.length > 0) {
            for (let i = 0; i < arr.length; i++) {
                switch (arr[i].event) {
                    case "comptroller":
                        const data = arr[i];
                        const obj = {
                            number: data.returnValues.id,
                            account: data.returnValues.operator.toLowerCase(),
                            UWI:data.returnValues.UWI,
                            type: data.returnValues._type,
                            status: data.returnValues.status,
                            month: data.returnValues.contentTime,
                            deviation: data.returnValues.deviation,
                            produce: data.returnValues.yield,
                            value: data.returnValues.value,
                            blockNum: data.blockNumber,
                            blockHash: data.blockHash,
                            transactionHash: data.transactionHash
                        };
                        await ProduceService.newProduce(obj);
                        break;
                }
            }
        }
    } catch (e) {
        console.error(e.toString());
    }
}

module.exports = produce
