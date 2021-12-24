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
    staking: '0x1eddf31d392896f2e7175517edd8f96e405c27f0',
    mmcCrossETH: '0xf82d839a01F5Ab312172c3be2cF5b41a5f906E25',
    mmcCrossMatic: '0xe4046577e7cc88ba8806d6b62f5a7ba05fd2fe69',
    rewardERC20: '0x4CFBF140a872a86D81ed68E396c6C33CD5729078'
  },

  polygonMainnet: {
    staking: '',
    mmcCrossETH: '',
    mmcCrossMatic: '',
    rewardERC20: ''
  }
};
