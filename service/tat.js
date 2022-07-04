/**
 * Create with blockchainWatcher
 * Author: ChrisChiu
 * Date: 2022/4/14
 * Desc
 */

const tatModel = require('../model/tat');

const newTAT = async ({account, type, from, amount, blockNum, blockHash, transactionHash}) => {
    let newTATEntity = new tatModel({
        account, type, from, amount, blockNum, blockHash, transactionHash
    });
    return newTATEntity.save();
}

module.exports = {newTAT}
