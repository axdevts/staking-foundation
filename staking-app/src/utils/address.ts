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
    mUsdc: '',
    mUsdt: '',
    mmcCrossETH: '0xf82d839a01F5Ab312172c3be2cF5b41a5f906E25',
    rewardERC20: '0xc3c12cf5424fce9ced9983cac0f3d0ba3fabb3b5',
    mmcCrossMatic: '0x0e72fd132cf3338d94ed265a88c18b170df828e9',
    staking: '0xab5384465ec09e66d704027e0b62bbb27d707691'
  },
  mainnet: {
    mUsdc: '',
    mUsdt: '',
    mmcCrossETH: '0xf82d839a01F5Ab312172c3be2cF5b41a5f906E25',
    rewardERC20: '0xc3c12cf5424fce9ced9983cac0f3d0ba3fabb3b5',
    mmcCrossMatic: '0x0e72fd132cf3338d94ed265a88c18b170df828e9',
    staking: '0xab5384465ec09e66d704027e0b62bbb27d707691'
  },
  bscTestnet: {
    mUsdc: '',
    mUsdt: '',
    busd: '',
    mmcCrossETH: '0xf82d839a01F5Ab312172c3be2cF5b41a5f906E25',
    rewardERC20: '0xc3c12cf5424fce9ced9983cac0f3d0ba3fabb3b5',
    mmcCrossMatic: '0x0e72fd132cf3338d94ed265a88c18b170df828e9',
    staking: '0xab5384465ec09e66d704027e0b62bbb27d707691'
  },
  bscMainnet: {
    mUsdc: '',
    mUsdt: '',
    busd: '',
    mmcCrossETH: '0xf82d839a01F5Ab312172c3be2cF5b41a5f906E25',
    rewardERC20: '0xc3c12cf5424fce9ced9983cac0f3d0ba3fabb3b5',
    mmcCrossMatic: '0x0e72fd132cf3338d94ed265a88c18b170df828e9',
    staking: '0xab5384465ec09e66d704027e0b62bbb27d707691'
  },
  maticTestnet: {
    mUsdc: '',
    mUsdt: '',
    mmcCrossETH: '0xf82d839a01F5Ab312172c3be2cF5b41a5f906E25',
    rewardERC20: '0xc3c12cf5424fce9ced9983cac0f3d0ba3fabb3b5',
    mmcCrossMatic: '0x0e72fd132cf3338d94ed265a88c18b170df828e9',
    staking: '0xab5384465ec09e66d704027e0b62bbb27d707691'
  },
  maticMainnet: {
    mUsdc: '',
    mUsdt: '',
    mmcCrossETH: '0xf82d839a01F5Ab312172c3be2cF5b41a5f906E25',
    rewardERC20: '0xc3c12cf5424fce9ced9983cac0f3d0ba3fabb3b5',
    mmcCrossMatic: '0x0e72fd132cf3338d94ed265a88c18b170df828e9',
    staking: '0xab5384465ec09e66d704027e0b62bbb27d707691'
  }
};
