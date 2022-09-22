// This file is a sort of an entry point for any test that we run that starts with Hardhat

require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
require("@nomiclabs/hardhat-etherscan"); // <- verify the source code of your contracts
require("./tasks/block-number"); // <- a task made by us
require("hardhat-gas-reporter"); // <- an extention that gets attached to all of our test
require("solidity-coverage"); // indicates if lines of codes need to be tested

/** @type import('hardhat/config').HardhatUserConfig */

const GOERLI_RPC_URL = process.env.GOERLI_RPC_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY;
const COINMARKETCAP_API_KEY = process.env.COINMARKETCAP_API_KEY;

module.exports = {
    defaultNetwork: "hardhat",
    networks: {
        goerli: {
            url: GOERLI_RPC_URL,
            accounts: [PRIVATE_KEY],
            chainID: 5,
        },

        //this way you can run on the hardhat network without all data being deleted
        //after one usage
        localhost: {
            url: "http://127.0.0.1:8545/",
            //accounts:  from Hardhat
            chainID: 31337,
        },
    },
    solidity: "0.8.8",
    etherscan: {
        apiKey: {
            goerli: ETHERSCAN_API_KEY, // use this api key to verify contracts on etherscan
        },
    },
    gasReporter: {
        enabled: false,
        currency: "USD",
        outputFile: "gas-report.txt",
        noColors: true,
        coinmarketcap: COINMARKETCAP_API_KEY, // <- in order to get a currency
    },
};
