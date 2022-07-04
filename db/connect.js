/**
 * Create with blockchainWatcher
 * Author: ChrisChiu
 * Date: 2022/3/25
 * Desc
 */
const config = require("../config").mongodb;
const mongoose = require("mongoose");

require('dotenv').config();

let DB_URL;
if (process.env.ENVIRONMENT === 'prod') {
    DB_URL = `mongodb://${config.username}:${config.password}@${config.host1},${config.host2},${config.host3}/${config.database}?replicaSet=${config.replicaName}`;
}else{
    DB_URL = `mongodb://${config.username}:${config.password}@${config.host}/${config.database}`;
}

/**
 * 连接
 */
mongoose.connect(DB_URL, {keepAlive: true});

/**
 * 连接成功
 */
mongoose.connection.on("connected", function () {
    console.info("Mongoose connection open to " + DB_URL);
});

/**
 * 连接异常
 */
mongoose.connection.on("error", function (err) {
    console.error("Mongoose connection error: " + err);
});

/**
 * 连接断开
 */
mongoose.connection.on("disconnected", function () {
    console.info("Mongoose connection disconnected");
});

module.exports = mongoose;
