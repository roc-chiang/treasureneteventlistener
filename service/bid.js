/**
 * Create with blockchainWatcher
 * Author: ChrisChiu
 * Date: 2022/4/14
 * Desc
 */

const bidModel = require('../model/bid');

const newBid = async ({account, type, result, status, amount, blockNum, blockHash, transactionHash}) => {
    let newBidEntity = new bidModel({
        account, type, result, status, amount, blockNum, blockHash, transactionHash
    })
    return newBidEntity.save();
}

module.exports = {newBid}
