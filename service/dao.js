/**
 * Create with blockchainWatcher
 * Author: ChrisChiu
 * Date: 2022/4/14
 * Desc
 */

const daoModel = require('../model/dao');

const newDaoDetail = async ({
                                account,
                                number, title, desc,
                                vote,
                                over,
                                status,
                                executeStatus,
                                blockNum,
                                blockHash,
                                transactionHash
                            }) => {
    let newDaoEntity = new daoModel.detail({
        account,
        number, title, desc,
        vote,
        over,
        status,
        executeStatus,
        blockNum,
        blockHash,
        transactionHash
    })
    return newDaoEntity.save();
}

const newDaoVote = async ({
                              account,
                              number,
                              voteNow, voteTotal,
                              extractStatus,
                              blockNum,
                              blockHash,
                              transactionHash
                          }) => {
    let newDaoEntity = new daoModel.vote({
        account,
        number,
        voteNow, voteTotal,
        extractStatus,
        blockNum,
        blockHash,
        transactionHash
    })
    return newDaoEntity.save();
}

module.exports = {newDaoDetail, newDaoVote}
