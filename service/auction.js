/**
 * Create with blockchainWatcher
 * Author: ChrisChiu
 * Date: 2022/4/21
 * Desc
 */
const auctionModel = require('../model/auction');
const auctionDetailModel = require('../model/auctionDetail');
const auctionResultModel = require('../model/auctionResult');

const newAuction = async ({
                              number,
                              amount,
                              startAmount,
                              overtime,
                              highValue,
                              status,
                              blockNum,
                              blockHash,
                              transactionHash
                          }) => {
    let newAuctionEntity = new auctionModel({
        number, amount, startAmount, overtime, highValue, status, blockNum, blockHash, transactionHash
    })
    return newAuctionEntity.save();
}

const newAuctionDetail = async ({number, account, amount, extractStatus, blockNum, blockHash, transactionHash}) => {
    let newAuctionDetailEntity = new auctionDetailModel({
        number, account, amount, extractStatus, blockNum, blockHash, transactionHash
    })
    return newAuctionDetailEntity.save();
}

const newAuctionResult = async ({number, account, amount, blockNum, blockHash, transactionHash}) => {
    let newAuctionResultEntity = new auctionResultModel({
        number, account, amount, blockNum, blockHash, transactionHash
    })
    return newAuctionResultEntity.save();
}


module.exports = {newAuction, newAuctionResult, newAuctionDetail}
