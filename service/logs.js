/**
 * Create with blockchainWatcher
 * Author: ChrisChiu
 * Date: 2022/3/25
 * Desc
 */

const logsModel = require('../model/logs');

const newLogs = async ({contract, blocknum, count}) => {
    let newLogsEntity = new logsModel({
        contract, blocknum, count
    });
    return newLogsEntity.save();
}

module.exports = {newLogs}

