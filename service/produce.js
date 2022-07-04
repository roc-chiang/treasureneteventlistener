/**
 * Create with blockchainWatcher
 * Author: ChrisChiu
 * Date: 2022/4/14
 * Desc
 */

const produceModel = require('../model/produce');

const newProduce = async ({
                              number, account, UWI,
                              type,
                              status,
                              month,
                              deviation,
                              produce,
                              value,
                              blockNum,
                              blockHash,
                              transactionHash
                          }) => {
    let newMarginEntity = new produceModel({
        number, account, UWI, type, status, month, deviation, produce, value, blockNum, blockHash, transactionHash
    });
    return newMarginEntity.save();
}

module.exports = {newProduce}
