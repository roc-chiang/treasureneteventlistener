/**
 * Create with blockchainWatcher
 * Author: ChrisChiu
 * Date: 2022/4/14
 * Desc
 */

const Events = require("../../utils/events");
const TATService = require("../../service/tat");

const tat = async (web3) => {

    try {
        const arr = await Events.getPastEvents(web3, "TAT");

        if (arr.length > 0) {
            for (let i = 0; i < arr.length; i++) {
                switch (arr[i].event) {
                    case "TATHistory":
                        const data = arr[i];
                        const obj = {
                            account:data.returnValues.producer.toLowerCase(),
                            type:data.returnValues._type,
                            from:data.returnValues.content,
                            amount:data.returnValues.amount,
                            blockNum:data.blockNumber,
                            blockHash:data.blockHash,
                            transactionHash:data.transactionHash
                        };
                        await TATService.newTAT(obj);
                        break;
                }
            }
        }
    }
    catch(e){
        console.error(e.toString());
    }
}

module.exports = tat
