require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
require("@nomiclabs/hardhat-ethers");
const { mnemonic, apiKey, infuraKey, polyApiKey } = require('./secrets.json');

module.exports = {
	solidity: {
		version: "0.8.0",
		settings: {
			optimizer: {
				enabled: true,
				runs: 200
			}
		}
	},
	networks: {
		mumbai: {
			url: "https://matic-mumbai.chainstacklabs.com",
			// url: `https://polygon-mumbai.infura.io/v3/${infuraKey}`,
			accounts: { mnemonic: mnemonic }
		},
		matic: {
			url: "https://rpc-mumbai.maticvigil.com",
			accounts: { mnemonic: mnemonic }
		},
		rinkeby: {
			url: `https://rinkeby.infura.io/v3/` + infuraKey,
			accounts: { mnemonic: mnemonic }
		},
		eth: {
			url: `https://mainnet.infura.io/v3/` + infuraKey,
			accounts: { mnemonic: mnemonic }
		},
	},
	etherscan: {
		apiKey: polyApiKey
		// apiKey: apiKey
	},

};