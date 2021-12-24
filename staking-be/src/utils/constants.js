require('dotenv').config()

export const configNetwork = 'mainnet'

export const ethApiKey = process.env.ETH_API_KEY

export const infuraKey = process.env.INFURA_KEY

export const polyApiKey = process.env.POLY_API_KEY

export const mumbaiNet = "https://matic-mumbai.chainstacklabs.com"

export const maticNet = "https://rpc-mumbai.maticvigil.com"

export const ethTestNet = `https://rinkeby.infura.io/v3/${infuraKey}`

export const ethMainNet = `https://mainnet.infura.io/v3/${infuraKey}`

export const bscTestNet = "https://data-seed-prebsc-1-s1.binance.org:8545/"

export const ownerAddr = "0xC28c0f2f479622c536341fa5CCa6b27978359f63"

export const ownerPK = process.env.PRIVATE_KEY

export const RELAYER_GAS = 8000000

export const RELAYER_GAS_PRICE = 5000000000
