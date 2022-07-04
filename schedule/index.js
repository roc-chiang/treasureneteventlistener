/**
 * Create with blockchainWatcher
 * Author: ChrisChiu
 * Date: 2022/3/25
 * Desc
 */

const schedule = require('node-schedule');
const expenseProcess = require('./expense');
const produceProcess = require('./treasureData');
const tatProcess = require('./tat');
const bidProcess = require('./bid');
const ustnProcess = require('./ustn');
const auctionProcess = require('./auction');
const daoProcess = require('./dao');
const Web3 = require("web3");
const config = require("../config");
const web3 = new Web3(new Web3.providers.WebsocketProvider(config.nodeWS));

const getEvents = async () => {
    const rule = new schedule.RecurrenceRule();
    rule.second = [0, 10, 20, 30, 40, 50];
    schedule.scheduleJob(rule, async () => {
        await expenseProcess(web3);
        await produceProcess(web3);
        await tatProcess(web3);
        await bidProcess(web3);
        await ustnProcess(web3);
        await auctionProcess(web3);
        await daoProcess(web3);
    });
}

module.exports = () => {
    getEvents();
}
