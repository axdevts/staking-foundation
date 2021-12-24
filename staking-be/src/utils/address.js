import { configNetwork } from './constants';

export const Address = {
  ropsten: {
    mStaking: '',
    mUsdc: '',
    mUsdt: ''
  },
  mainnet: {
    mStaking: '',
    mUsdc: '',
    mUsdt: ''
  }
};

export const getContractAddress = () => {
  return Address[configNetwork];
};

export const ContractAddress = {
  ropsten: {
    mStaking: '',
    mUsdc: '',
    mUsdt: ''
  },
  mainnet: {
    mmc: '0xB2E4e69527D57FA108c535721C057075a7a82E86',
    mStaking: '',
    mUsdc: '',
    mUsdt: ''
  },
  bscTestnet: {
    mStaking: '',
    mUsdc: '',
    mUsdt: '',
    busd: ''
  },
  bscMainnet: {
    mStaking: '',
    mUsdc: '',
    mUsdt: '',
    busd: ''
  },
  maticTestnet: {
    mStaking: '',
    mUsdc: '',
    mUsdt: '',
    busd: ''
  },
  maticMainnet: {
    mStaking: '',
    mUsdc: '',
    mUsdt: '',
    busd: ''
  },
  polygonTestnet: {
    mmcCrossETH: '0xf82d839a01F5Ab312172c3be2cF5b41a5f906E25',
    rewardERC20: '0xc3c12cf5424fce9ced9983cac0f3d0ba3fabb3b5',
    mmcCrossMatic: '0x0e72fd132cf3338d94ed265a88c18b170df828e9',
    staking: '0xab5384465ec09e66d704027e0b62bbb27d707691',
  },

  polygonMainnet: {
    staking: '',
    mmcCrossETH: '',
    mmcCrossMatic: '',
    rewardERC20: ''
  }
};
