/**
 * Create with blockchainWatcher
 * Author: ChrisChiu
 * Date: 2022/4/19
 * Desc
 */
const ustnConvertModel = require('../model/ustn').convert;
const ustnDepositModel = require('../model/ustn').deposit;
const ustnLoanModel = require('../model/ustn').loan;

const newUstnConvert = async ({account, unit, ustn, type, blockNum, blockHash, transactionHash}) => {
    let newUstnConvertEntity = new ustnConvertModel({
        account, unit, ustn, type, blockNum, blockHash, transactionHash
    })
    return newUstnConvertEntity.save();
}

const newUstnDeposit = async ({account, type, amount, blockNum, blockHash, transactionHash}) => {
    let newUstnDepositEntity = new ustnDepositModel({
        account, type, amount, blockNum, blockHash, transactionHash
    })
    return newUstnDepositEntity.save();
}

const newUstnLoan = async ({
                               account,
                               number,
                               unitAmount,
                               totalDebt,
                               pledgeRate,
                               status,
                               operationStatus,
                               ustn,
                               unit,
                               unitValue,
                               pledgeRateBefore,
                               blockNum,
                               blockHash,
                               transactionHash
                           }) => {
    let newUstnLoanEntity = new ustnLoanModel({
        account,
        number,
        unitAmount,
        totalDebt,
        pledgeRate,
        status,
        operationStatus,
        ustn,
        unit,
        unitValue,
        pledgeRateBefore,
        blockNum,
        blockHash,
        transactionHash
    })
    return newUstnLoanEntity.save();
}

module.exports = {newUstnConvert, newUstnDeposit, newUstnLoan}
