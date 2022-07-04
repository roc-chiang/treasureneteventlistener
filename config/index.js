/**
 * Create with blockchainWatcher
 * Author: ChrisChiu
 * Date: 2022/3/25
 * Desc
 */
require('dotenv').config();

const config = [];

config.dev = {

    mongodb: {
        "host": "172.16.104.137:27017",
        "database": "treasureNet",
        "username": "treasureNet",
        "password": "trustslink666"
    },
    nodeHTTP: "http://172.16.104.227:8545",
    nodeWS: "ws://172.16.104.227:8546",
    contract: {
        USTN: {
            address: "",
            abiPath: "abi/USTN.json",
        },
        TAT: {
            address: "",
            abiPath: "abi/TAT.json",
        },
        expense: {
            address: "",
            abiPath: "abi/expense.json"
        },
        treasureData: {
            address: "",
            abiPath: "abi/treasureData.json"
        },
        bid:{
            address: "",
            abiPath: "abi/bid.json"
        }
    }
}

config.biglock = {
    mongodb: {
        "host": "172.16.104.48:27017",
        "database": "treasureNet",
        "username": "treasureNet",
        "password": "trustslink666"
    },
    nodeHTTP: "http://172.16.104.48:8545",
    nodeWS: "ws://172.16.104.48:8546",
    contract: {
        USTN: {
            address: "0xa8Fa27111c2FECd69774cd7736fF5136bd942549",
            abiPath: "abi/USTN.json",
        },
        USTNAuction: {
            address: "0x34D118AcC1e1dc0F492E49bf7C301fc51548E1BC",
            abiPath: "abi/USTNAuction.json",
        },
        USTNFinance: {
            address: "0x8d2647Ea65701470b738C0Afd941a9Af63c8bF5e",
            abiPath: "abi/USTNFinance.json",
        },
        TAT: {
            address: "0x33C8C15A1058d788a6Fe5Fbf77C92d303C213807",
            abiPath: "abi/TAT.json",
        },
        expense: {
            address: "0xc16e34dc5e8059f4756A3ada5a15809C2Fe89f03",
            abiPath: "abi/expense.json"
        },
        treasureData: {
            address: "0x7fAF4847ff0Cde693D624703085b556783fb3043",
            abiPath: "abi/treasureData.json"
        },
        bid:{
            address: "0xac64ebDE2d12D69d877380B29BBcc5f4c14F4377",
            abiPath: "abi/bid.json"
        },
        dao:{
            address: "",
            abiPath: "abi/DAO.json"
        },
    }
}

config.dev_huawei = {
    mongodb: {
        "host": "127.0.0.1:27017",
        "database": "treasureNet",
        "username": "treasureNet",
        "password": "trustslink666"
    },
    nodeHTTP: "http://127.0.0.1:8545",
    nodeWS: "ws://127.0.0.1:8546",
    contract: {
        USTN: {
            address: "0xc826901C35159d4DA30aD414eb3faE898816ABf2",
            abiPath: "abi/USTN.json",
        },
        USTNAuction: {
            address: "0x9166dD39d588Cd15C9F44647d60c4a870f914b42",
            abiPath: "abi/USTNAuction.json",
        },
        USTNFinance: {
            address: "0xBC0636585adE40F0E119aac7197051ECD0A5eBAa",
            abiPath: "abi/USTNFinance.json",
        },
        TAT: {
            address: "0x9B3135861ED59A6cB967329474a14AbAdf2E149b",
            abiPath: "abi/TAT.json",
        },
        expense: {
            address: "0x74a36bD0B194443330a695d5A92DcEA93Fa8a282",
            abiPath: "abi/expense.json"
        },
        treasureData: {
            address: "0x5F506E91B1E0A4e32847390124B42f08a3bB8ca1",
            abiPath: "abi/treasureData.json"
        },
        bid:{
            address: "0x251D943AA282152b221d102c419FcE48233ea14A",
            abiPath: "abi/bid.json"
        },
        DAO:{
            address: "0x165Ad42067C89a949217058dcEBA6E247A542618",
            abiPath: "abi/DAO.json"
        },
    }
}

config.prod = {
    mongodb: {
        "host1": "node9.treasurenet.io:27021",
        "host2": "node9.treasurenet.io:27022",
        "host3": "node9.treasurenet.io:27023",
        "database": "treasureNet",
        "username": "treasureNet",
        "password": "bRls3ebro74a6WadamoK",
        "replicaName":"dbrs"
    },
    nodeHTTP: "http://127.0.0.1:8545",
    nodeWS: "ws://127.0.0.1:8546",
    contract: {
        USTN: {
            address: "0xb9ED32036C47084CADcDC0ec49cF6C50E929176E",
            abiPath: "abi/USTN.json",
        },
        USTNAuction: {
            address: "0xB94c17A938e06801A9D2e8d917662A9721462337",
            abiPath: "abi/USTNAuction.json",
        },
        USTNFinance: {
            address: "0x3757350766D0D926056673834716cDFf9B89435B",
            abiPath: "abi/USTNFinance.json",
        },
        TAT: {
            address: "0xC88481Ba403363B5340C9d1301b8653720A00225",
            abiPath: "abi/TAT.json",
        },
        expense: {
            address: "0xEC543BF2c37EEcC6ee4C58164A7e4F4f5f04A43c",
            abiPath: "abi/expense.json"
        },
        treasureData: {
            address: "0x52f037378f027C82B2D62fF85ec82f747361B95c",
            abiPath: "abi/treasureData.json"
        },
        bid:{
            address: "0x251D943AA282152b221d102c419FcE48233ea14A",
            abiPath: "abi/bid.json"
        },
        DAO:{
            address: "0x29B9B665CC1647b5484fB2021A0784272786D2ca",
            abiPath: "abi/DAO.json"
        },
    }
}


module.exports = config[process.env.ENVIRONMENT];
