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
} from '../actions';

const initialState = {
  walletConnected: false,
  userAddress: '',
  usdcBalance: '0',
  usdtBalance: '0',
  busdBalance: '0',
  ethBalance: '0',
  network: '',
  userRegistered: false,
  data: '',
  errMessage: null
};

const stakeReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case STAKE_START:
      return {
        ...state
      };

    case STAKE_SUCCESS:
      return {
        ...state
      };

    default:
      return state;
  }
};

export default stakeReducer;
