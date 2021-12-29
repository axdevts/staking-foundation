import axios from 'axios';
import { getFetchBalancesRequest, baseURL } from '../../utils';
import {
  STAKE_SEND_START,
  STAKE_SEND_SUCCESS,
  STAKE_SEND_FAILURE,
  UPDATE_USDC_BALANCE,
  UPDATE_USDT_BALANCE,
  UPDATE_BUSD_BALANCE
} from './constant';

interface StakeProps {
  useraddress: string;
  tokenList: [];
}

export const stakeSendStart = (payload: StakeProps) => {
  return {
    type: STAKE_SEND_START,
    payload
  };
};

export const stakeSendSuccess = () => {
  return {
    type: STAKE_SEND_SUCCESS
  };
};

export const stakeSendFailure = () => {
  return {
    type: STAKE_SEND_FAILURE
  };
};

export const stakeToken =
  (userAddress: string, tokenList: []) => async (dispatch: any) => {
    dispatch(stakeSendStart);

    try {
      const response = await axios.post(`${baseURL}/staking-batch`, {
        userAddress: userAddress,
        tokenList: tokenList
      });

      console.log('response from staking -----', response);
      dispatch(stakeSendSuccess);
    } catch (error) {
      console.log('error in staking', error);
      dispatch(stakeSendFailure);
    }
  };

export const updateUsdcBalance = (usdcBalance: string) => {
  return {
    type: UPDATE_USDC_BALANCE,
    usdcBalance
  };
};

export const updateUsdtBalance = (usdtBalance: string) => {
  return {
    type: UPDATE_USDT_BALANCE,
    usdtBalance
  };
};

const updateBusdBalance = (busdBalance: string) => ({
  type: UPDATE_BUSD_BALANCE,
  busdBalance
});

export const fetchBalances = (userAddress: string) => async (dispatch: any) => {
  try {
    const responses = await Promise.all(getFetchBalancesRequest(userAddress));

    const [usdtBalance, usdcBalance, daiBalance, busdBalance] = responses;

    dispatch(updateUsdtBalance(usdtBalance));
    dispatch(updateUsdcBalance(usdcBalance));
    dispatch(updateBusdBalance(!!busdBalance ? busdBalance : '0'));
  } catch (e) {
    console.log('something went wrong in fetching balances ', e);
  }
};
