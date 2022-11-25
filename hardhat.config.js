require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-etherscan");
require("dotenv").config();

const TESTNET_URL = process.env.TESTNET_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const POLYGONSCAN_PVT_KEY = process.env.POLYGONSCAN_PVT_KEY;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    mumbai: {
      url: TESTNET_URL,
      accounts: [PRIVATE_KEY],
    },
  },
  etherscan: {
    apiKey: POLYGONSCAN_PVT_KEY,
  },
};
