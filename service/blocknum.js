/**
 * Create with blockchainWatcher
 * Author: ChrisChiu
 * Date: 2022/3/25
 * Desc
 */

const blocknumModel = require('../model/blocknum');

const newBlockNum = async ({contract, blocknum}) => {
    let newBlocknumEntity = new blocknumModel({
        contract, blocknum
    });
    return newBlocknumEntity.save();
}


const getBlockNum = async (contract) => {
    const data = await blocknumModel.findOne({contract}, {blocknum: 1}).lean().exec()
    if (data) return data.blocknum;
    return 0;

}

const updateBlockNum = async (contract, blocknum) => {
    const oldBlockNum = await getBlockNum(contract);
    if (+oldBlockNum > +blocknum) {
        return false;
    }
    if (await getBlockNum(contract)) {
        await blocknumModel.update({contract}, {blocknum}).exec();
    } else {
        await newBlockNum({contract, blocknum})
    }
    return true;
}


module.exports = {
    getBlockNum, updateBlockNum
}
