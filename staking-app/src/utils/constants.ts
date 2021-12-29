require('dotenv').config();

export const configNetwork = 'mainnet';

export const baseURL =
  process.env.REACT_APP_SERVER_URL || 'http://127.0.0.1:8080/api';

export const Paths = {
  homepage: '/',
  buy: '/buy',
  aboutUs: '/about-us',
  roadmap: '/roadmap',
  collection: '/collection',
  faq: '/faq',
  joinDiscord: 'https://discord.gg/yWcDhqMx2A',
  twitter: 'https://twitter.com/MushroomClubNFT'
};

export const WalletTypes = {
  default: 0,
  metamask: 1,
  walletConnect: 2,
  authereum: 3,
  burnerConnect: 4,
  uniLogin: 5,
  mewWallet: 6
};

export const ConnectSteps = {
  select: 1,
  connect: 2,
  accept: 3
};

export const StakeSteps = {
  confirm: 0,
  processing: 1,
  success: 2
};

export const WithdrawSteps = {
  confirm: 0,
  success: 1
};

export const StoreageKey = {
  doNotShowAgain: 'doNotShowAgain',
  walletType: 'walletType'
};

export const LockRptSteps = {
  confirm: 1,
  success: 2
};

export const UnlockRptSteps = {
  confirm: 1,
  success: 2
};

export const GetMentionlyticsProcess = {
  idle: 0,
  klotReward: 1,
  alotReward: 2,
  molotReward: 3,
  mlotReward: 4,
  slotReward: 5
};

export const Config = {
  ropsten: {
    etherscanLink: 'https://ropsten.etherscan.io',
    defaultGasPrice: '15',
    transactionText: 'Transaction Pending',
    coinGeckoApi: 'https://api.coingecko.com/api/v3/coins',
    infuraId: '287b5d14c20f4b7d9411d165fac6a688'
  },
  mainnet: {
    etherscanLink: 'https://etherscan.io',
    defaultGasPrice: '15',
    transactionText: 'Transaction Pending',
    coinGeckoApi: 'https://api.coingecko.com/api/v3/coins',
    infuraId: 'c7a95b91ffae44e3b7fb80d9fbb98939'
  }
};

export const getConfig = () => {
  return Config[configNetwork];
};

export const SuccessMsgType = {
  hide: 0,
  showBuySuccess: 1,
  showSellSuccess: 2,
  showSuccess: 3
};

export const SocialLinks = {
  twitter: 'https://twitter.com/MushroomClubNFT',
  discord: 'https://discord.gg/yWcDhqMx2A'
};

export const Networks = {
  mainnet: '0x1',
  ropsten: '0x3',
  rinkeby: '0x4',
  goerli: '0x5',
  kovan: '0x2a',
  moonBaseAlpha: '0x507',
  bscTestnet: '0x61',
  bscMainnet: '0x38',
  maticTestnet: '0x13881',
  maticMainnet: '0x89'
};

export const EtherscanLinks = {
  ethereum: 'https://etherscan.io',
  binance: 'https://bscscan.com',
  matic: 'https://polygonscan.com'
};

export const NetworkOptions = {
  ethereum: 'ethereum',
  matic: 'matic',
  binance: 'binance'
};
