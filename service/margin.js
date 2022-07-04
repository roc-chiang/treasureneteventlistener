/**
 * Create with blockchainWatcher
 * Author: ChrisChiu
 * Date: 2022/4/14
 * Desc
 */

const marginModel = require('../model/margin');

const newMargin = async ({account, type, amount, blockNum, blockHash, transactionHash}) => {
    let newMarginEntity = new marginModel({
        account, type, amount, blockNum, blockHash, transactionHash
    });
    return newMarginEntity.save();
}

module.exports = {newMargin}
