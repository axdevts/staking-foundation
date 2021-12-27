import { Networks, Config, NetworkOptions } from './constants';
import { getBusdContract, getUsdcContract, getUsdtContract } from './contracts';
import { ContractAddress } from './address';
import web3 from 'web3';
import store from '../logic/reducers';

export const toUsdt = (amount: string): string => {
  const { network } = store.getState().user;

  if (network === Networks.bscMainnet || network === Networks.bscTestnet) {
    return web3.utils.toWei(amount, 'ether');
  }

  return web3.utils.toWei(amount, 'mwei');
};

export const toUsdc = (amount: string): string => {
  const { network } = store.getState().user;

  if (network === Networks.bscMainnet || network === Networks.bscTestnet) {
    return web3.utils.toWei(amount, 'ether');
  }

  return web3.utils.toWei(amount, 'mwei');
};

export const toDai = (amount: string): string => {
  return web3.utils.toWei(amount, 'ether');
};

export const toGwei = (amount: string): string => {
  return web3.utils.toWei(amount, 'gwei');
};

export const toBusd = (amount: string): string => {
  return web3.utils.toWei(amount, 'ether');
};

export const setStakeContract = (token: string) => {
  if (token === 'USDT') {
    return getUsdtContract();
  } else if (token === 'USDC') {
    return getUsdcContract();
  } else if (token === 'BUSD') {
    return getBusdContract();
  }
};

export const setStakeAmount = (token: string, amount: string): string => {
  if (token === 'USDT') {
    return toUsdt(amount);
  } else if (token === 'USDC') {
    return toUsdc(amount);
  } else if (token === 'BUSD') {
    return toBusd(amount);
  } else {
    return toDai(amount);
  }
};

export const setSuppyAmount = (
  token: string,
  amount: string
): Array<string> => {
  if (token === 'USDT') {
    return ['0', '0', toUsdt(amount)];
  } else if (token === 'USDC') {
    return ['0', toUsdc(amount), '0'];
  } else {
    return [toDai(amount), '0', '0'];
  }
};

export const fromUsdt = (amount: string): string => {
  const { network } = store.getState().user;

  if (network === Networks.bscMainnet || network === Networks.bscTestnet) {
    return web3.utils.fromWei(amount, 'ether');
  }

  return web3.utils.fromWei(amount, 'mwei');
};

export const fromUsdc = (amount: string): string => {
  const { network } = store.getState().user;

  if (network === Networks.bscMainnet || network === Networks.bscTestnet) {
    return web3.utils.fromWei(amount, 'ether');
  }

  return web3.utils.fromWei(amount, 'mwei');
};

export const fromDai = (amount: string): string => {
  return web3.utils.fromWei(amount, 'ether');
};

export const fromRtp = (amount: string): string => {
  return web3.utils.fromWei(amount, 'ether');
};

export const fromEth = (amount: string): string => {
  return web3.utils.fromWei(amount, 'ether');
};

export const fromBusd = (amount: string): string => {
  return web3.utils.fromWei(amount, 'ether');
};

export const setGasLimit = (gasLimit: number): string => {
  return web3.utils.toHex(gasLimit);
};

export const setTokenIndex = (token: string): number => {
  const { network } = store.getState().user;

  if (network === Networks.bscMainnet || network === Networks.bscTestnet) {
    if (token === 'DAI') return 0;
    else if (token === 'BUSD') return 1;
    else if (token === 'USDC') return 2;
    else return 3;
  } else {
    if (token === 'DAI') return 0;
    else if (token === 'USDC') return 1;
    else return 2;
  }
};

export const setTokenAmount = (token: string, amount: string): string => {
  if (token === 'USDT') {
    return toUsdt(amount);
  } else if (token === 'USDC') {
    return toUsdc(amount);
  } else if (token === 'BUSD') {
    return toBusd(amount);
  } else {
    return toDai(amount);
  }
};

export const getTokenAmount = (token: string, amount: string): string => {
  if (token === 'USDT') {
    return fromUsdt(amount);
  } else if (token === 'USDC') {
    return fromUsdc(amount);
  } else if (token === 'BUSD') {
    return fromBusd(amount);
  } else {
    return fromDai(amount);
  }
};

export const thousandSeparator = (num: string): string => {
  var num_parts = num.toString().split('.');
  num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return num_parts.join('.');
};

export const renderTokenAmountText = (amount: string): string => {
  const token = amount.replace(/,/g, '');

  if (!isNaN(parseFloat(token))) {
    return parseFloat(token).toLocaleString('en-US', {
      maximumFractionDigits: 2,
      minimumFractionDigits: 0
    });
  }

  return '0';
};

export const copyTextToClipboard = (value: string): void => {
  const el = document.createElement('textarea');
  el.value = value;
  el.setAttribute('readonly', '');
  el.style.position = 'absolute';
  el.style.left = '-9999px';
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
};

export const getNetworkArgs = (network: string): string => {
  switch (network) {
    case Networks.mainnet:
      return 'ethereum';

    case Networks.bscMainnet:
      return 'binance';

    case Networks.maticMainnet:
      return 'matic';

    default:
      return 'ethereum';
  }
};

export const addNetworkToEndpoint = (network: string): string => {
  switch (network) {
    case Networks.mainnet:
    case Networks.ropsten:
      return 'ethereum';

    case Networks.bscMainnet:
    case Networks.bscTestnet:
      return 'binance';

    case Networks.maticMainnet:
    case Networks.maticTestnet:
      return 'matic';

    default:
      return 'ethereum';
  }
};

export const getMainTokenSymbol = (network: string): string => {
  switch (network) {
    case Networks.mainnet:
    case Networks.ropsten:
      return 'ETH';

    case Networks.bscMainnet:
    case Networks.bscTestnet:
      return 'BNB';

    case Networks.maticMainnet:
    case Networks.maticTestnet:
      return 'MATIC';

    default:
      return 'ETH';
  }
};

const constuctEndpoint = (network: string) => {
  switch (network) {
    case Networks.ropsten:
    case Networks.bscTestnet:
    case Networks.maticTestnet:
    case Networks.mainnet:
    case Networks.bscMainnet:
    case Networks.maticMainnet:

    default:
  }
};

export const getApiEndpoint = (): string => {
  const { network } = store.getState().user;

  return `${constuctEndpoint(network)}/${addNetworkToEndpoint(network)}`;
};

export const getNetwork = (network: string): string => {
  switch (network) {
    case Networks.mainnet:
      return 'Ethereum Mainnet';

    case Networks.ropsten:
      return 'Ropsten';

    case Networks.rinkeby:
      return 'Rinkeby';

    case Networks.goerli:
      return 'Goerli';

    case Networks.kovan:
      return 'Kovan';

    case Networks.moonBaseAlpha:
      return 'Moonbase Alpha';

    case Networks.bscTestnet:
      return 'BSC Testnet';

    case Networks.bscMainnet:
      return 'BSC Mainnet';

    case Networks.maticTestnet:
      return 'Matic Testnet';

    case Networks.maticMainnet:
      return 'Matic Mainnet';

    default:
      return 'Unknown';
  }
};

export const getTokenOptionList = (): string[] => {
  const { network } = store.getState().user;

  if (network === Networks.bscMainnet || network === Networks.bscTestnet) {
    return ['USDT', 'USDC', 'DAI', 'BUSD'];
  }

  return ['USDT', 'USDC', 'DAI'];
};

export const getFetchBalancesRequest = (userAddress: string) => {
  const { network } = store.getState().user;

  if (network === Networks.bscMainnet || network === Networks.bscTestnet) {
    return [
      getUsdtContract().methods.balanceOf(userAddress).call(),
      getUsdcContract().methods.balanceOf(userAddress).call(),
      getBusdContract().methods.balanceOf(userAddress).call()
    ];
  }

  return [
    getUsdtContract().methods.balanceOf(userAddress).call(),
    getUsdcContract().methods.balanceOf(userAddress).call()
  ];
};

export const getEtherScanLink = (): string => {
  const { network } = store.getState().user;

  switch (network) {
    case Networks.ropsten:
      return 'https://ropsten.etherscan.io';

    case Networks.mainnet:
      return 'https://etherscan.io';

    case Networks.bscTestnet:
      return 'https://testnet.bscscan.com';

    case Networks.bscMainnet:
      return 'https://bscscan.com';

    case Networks.maticTestnet:
      return 'https://matic-mumbai.chainstacklabs.com';
    // return 'http://mumbai-explorer.matic.today';

    case Networks.maticMainnet:
      return 'https://rpc-mumbai.maticvigil.com';
    // return 'https://polygonscan.com';

    default:
      return 'https://etherscan.io';
  }
};

export const renderTokenText = (): string => {
  const { network } = store.getState().user;

  switch (network) {
    case Networks.ropsten:
    case Networks.mainnet:
    case Networks.bscTestnet:
    case Networks.bscMainnet:
    case Networks.maticTestnet:
    case Networks.maticMainnet:

    default:
      return '';
  }
};

export const renderStats = (
  network: string,
  ethereumOption: any,
  binanceOption: any,
  maticOption: any
): any => {
  switch (network) {
    case NetworkOptions.ethereum:
      return ethereumOption;

    case NetworkOptions.binance:
      return binanceOption;

    case NetworkOptions.matic:
      return maticOption;

    default:
      return ethereumOption;
  }
};

export const getTotalValueLocked = (
  lockedInContract: string,
  loanGiven: string
): string => {
  const result: number = parseFloat(lockedInContract) + parseFloat(loanGiven);

  if (isFinite(result)) return result.toFixed(2);

  return '0';
};

export const calculateStablecoinTvl = (
  ethereumStableCoin: string,
  binanceStableCoin: string,
  maticStableCoin: string,
  ethereumGaming: string,
  binanceGaming: string,
  maticGaming: string
): string => {
  const result: number =
    parseFloat(ethereumStableCoin) +
    parseFloat(binanceStableCoin) +
    parseFloat(maticStableCoin) +
    parseFloat(ethereumGaming) +
    parseFloat(binanceGaming) +
    parseFloat(maticGaming);

  if (isFinite(result)) return result.toFixed(2);

  return '0';
};

export const getTokenPrecision = (token: string): string => {
  const { network } = store.getState().user;

  switch (network) {
    case Networks.bscMainnet:
    case Networks.bscTestnet:
      return '18';

    case Networks.mainnet:
    case Networks.ropsten:
    case Networks.maticTestnet:
    case Networks.maticMainnet:
    default:
      if (token === 'DAI') {
        return '18';
      }
      return '6';
  }
};

export const getStakingContractAddress = (): string => {
  const { network } = store.getState().user;

  switch (network) {
    case Networks.mainnet:
      return ContractAddress.mainnet.staking;

    case Networks.ropsten:
      return ContractAddress.ropsten.staking;

    case Networks.bscMainnet:
      return ContractAddress.bscMainnet.staking;

    case Networks.bscTestnet:
      return ContractAddress.bscTestnet.staking;

    case Networks.maticMainnet:
      return ContractAddress.maticMainnet.staking;

    case Networks.maticTestnet:
      return ContractAddress.maticTestnet.staking;

    default:
      return ContractAddress.maticTestnet.staking;
  }
};

export const getCrossETHContractAddress = (): string => {
  const { network } = store.getState().user;

  switch (network) {
    case Networks.mainnet:
      return ContractAddress.mainnet.mmcCrossETH;

    case Networks.ropsten:
      return ContractAddress.ropsten.mmcCrossETH;

    case Networks.bscMainnet:
      return ContractAddress.bscMainnet.mmcCrossETH;

    case Networks.bscTestnet:
      return ContractAddress.bscTestnet.mmcCrossETH;

    case Networks.maticMainnet:
      return ContractAddress.maticMainnet.mmcCrossETH;

    case Networks.maticTestnet:
      return ContractAddress.maticTestnet.mmcCrossETH;

    default:
      return ContractAddress.maticTestnet.mmcCrossETH;
  }
};

export const getCrossMaticContractAddress = (): string => {
  const { network } = store.getState().user;

  switch (network) {
    case Networks.mainnet:
      return ContractAddress.mainnet.mmcCrossMatic;

    case Networks.ropsten:
      return ContractAddress.ropsten.mmcCrossMatic;

    case Networks.bscMainnet:
      return ContractAddress.bscMainnet.mmcCrossMatic;

    case Networks.bscTestnet:
      return ContractAddress.bscTestnet.mmcCrossMatic;

    case Networks.maticMainnet:
      return ContractAddress.maticMainnet.mmcCrossMatic;

    case Networks.maticTestnet:
      return ContractAddress.maticTestnet.mmcCrossMatic;

    default:
      return ContractAddress.maticTestnet.mmcCrossMatic;
  }
};

export const getRewardContractAddress = (): string => {
  const { network } = store.getState().user;

  switch (network) {
    case Networks.mainnet:
      return ContractAddress.mainnet.rewardERC20;

    case Networks.ropsten:
      return ContractAddress.ropsten.rewardERC20;

    case Networks.bscMainnet:
      return ContractAddress.bscMainnet.rewardERC20;

    case Networks.bscTestnet:
      return ContractAddress.bscTestnet.rewardERC20;

    case Networks.maticMainnet:
      return ContractAddress.maticMainnet.rewardERC20;

    case Networks.maticTestnet:
      return ContractAddress.maticTestnet.rewardERC20;

    default:
      return ContractAddress.maticTestnet.rewardERC20;
  }
};
