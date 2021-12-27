import axios from 'axios';
import {
  setTokenIndex,
  fromRtp,
  setStakeAmount,
  setStakeContract,
  setTokenAmount,
  WithdrawSteps,
  fromUsdt,
  fromUsdc,
  fromDai,
  getApiEndpoint,
  getFetchBalancesRequest,
  fromBusd,
  getStakingContract,
  getCrossETHContract,
  getCrossMaticContract,
  getRewardERC20Contract
} from '../../utils';
import {
  STAKE_START,
  STAKE_SUCCESS,
  STAKE_SEND_START,
  STAKE_SEND_SUCCESS,
  STAKE_SEND_FAILURE,
  STAKE_APPROVE_START,
  STAKE_APPROVE_SUCCESS,
  STAKE_APPROVE_FAILURE,
  WITHDRAW_TOKEN_START,
  WITHDRAW_TOKEN_SUCCESS,
  WITHDRAW_TOKEN_FAILURE,
  UPDATE_USDC_BALANCE,
  UPDATE_USDT_BALANCE,
  SWITCH_WITHDRAW_STEP,
  CLAIM_TOKENS_START,
  CLAIM_TOKENS_FAILURE,
  CLAIM_TOKENS_SUCCESS,
  GET_ISCLAIMABLE_SUCCESS,
  GET_CLAIMABLE_BALANCE_SUCCESS,
  UPDATE_BUSD_BALANCE
} from './constant';

interface StakeProps {
  tokenAmount: string;
  token: string;
  rptAmount: string;
}

export const stakeStart = (payload: StakeProps) => {
  return {
    type: STAKE_START,
    payload
  };
};

export const stakeSuccess = () => {
  return {
    type: STAKE_SUCCESS
  };
};

export const stakeApproveStart = () => {
  return {
    type: STAKE_APPROVE_START
  };
};

export const stakeApproveSuccess = () => {
  return {
    type: STAKE_APPROVE_SUCCESS
  };
};

export const stakeApproveFailure = () => {
  return {
    type: STAKE_APPROVE_FAILURE
  };
};

export const stakeSendStart = (transactionId: string) => {
  return {
    type: STAKE_SEND_START,
    transactionId
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

interface LiquidityProvider {
  userLiquidity?: string;
  lockedValue?: string;
  mRoyaPerDay?: string;
  optimiserLiquidity?: string;
  liquidityInIgaming?: string;
  totalLiquidityToIgaming?: string;
  providersLiquidity?: string;
}

export const stakeToken =
  (token: string, amount: string, userAddress: string) =>
  async (dispatch: any) => {
    dispatch(stakeApproveStart());
  };

export const withdrawTokenStart = (token: string, equivalent: string) => {
  return {
    type: WITHDRAW_TOKEN_START,
    token,
    equivalent
  };
};

export const withdrawTokenSuccess = (
  rptAmount: string,
  withdrawTxId: string
) => {
  return {
    type: WITHDRAW_TOKEN_SUCCESS,
    rptAmount,
    withdrawTxId
  };
};

export const withdrawTokenFailure = () => {
  return {
    type: WITHDRAW_TOKEN_FAILURE
  };
};

export const switchWithdrawStep = (step: number) => {
  return {
    type: SWITCH_WITHDRAW_STEP,
    step
  };
};

export const withdrawToken =
  (token: string, rptAmount: string, userAddress: string, equivalent: string) =>
  (dispatch: any) => {
    dispatch(withdrawTokenStart(token, equivalent));
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

const claimTokensStart = () => ({
  type: CLAIM_TOKENS_START
});

const claimTokensSuccess = () => ({
  type: CLAIM_TOKENS_SUCCESS
});

const claimTokensFailure = () => ({
  type: CLAIM_TOKENS_FAILURE
});

export const claimTokens = (userAddress: string) => (dispatch: any) => {
  dispatch(claimTokensStart());

  getStakingContract()
    .methods.claimTokens()
    .send({
      from: userAddress
    })
    .on('transactionHash', (hash: string) => {
      console.log('transactionHash claim tokens ', hash);
    })
    .on('receipt', (receipt: any) => {
      console.log('receipt claim tokens ', receipt);
      dispatch(fetchBalances(userAddress));
      dispatch(claimTokensSuccess());
    })
    .on('error', (error: any) => {
      console.log('error claim tokens ', error);
      dispatch(claimTokensFailure());
    });
};

const getIsClaimableSuccess = (isClaimable: boolean) => ({
  type: GET_ISCLAIMABLE_SUCCESS,
  isClaimable
});
