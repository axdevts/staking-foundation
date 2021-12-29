import axios from 'axios';
import { getFetchBalancesRequest, baseURL } from '../../utils';
import {
  WITHDRAW_TOKEN_START,
  WITHDRAW_TOKEN_SUCCESS,
  WITHDRAW_TOKEN_FAILURE
} from './constant';

interface WithdrawProps {
  useraddress: string;
  tokenList: [];
}

export const withdrawTokenStart = (token: string, equivalent: string) => {
  return {
    type: WITHDRAW_TOKEN_START,
    token,
    equivalent
  };
};

export const withdrawTokenSuccess = (withdrawTxId: string) => {
  return {
    type: WITHDRAW_TOKEN_SUCCESS,
    withdrawTxId
  };
};

export const withdrawTokenFailure = () => {
  return {
    type: WITHDRAW_TOKEN_FAILURE
  };
};

export const withdrawToken =
  (userAddress: string, tokenList: []) => async (dispatch: any) => {
    dispatch(withdrawTokenStart);

    try {
      const response = await axios.post(`${baseURL}/withdrawBatch`, {
        userAddress: userAddress,
        tokenList: tokenList
      });

      console.log('withdraw -----', response);
      // @ts-ignore
      let withdrawTxId = response?.data?.transactionHash;
      dispatch(withdrawTokenSuccess(withdrawTxId));
    } catch (error) {
      console.log('error in withdraw', error);
      dispatch(withdrawTokenFailure);
    }
  };
