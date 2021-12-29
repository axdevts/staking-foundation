import {
  CLAIM_TOKENS_START,
  CLAIM_TOKENS_FAILURE,
  CLAIM_TOKENS_SUCCESS
} from '../actions';

const initialState = {
  walletConnected: false,
  userAddress: '',
  usdcBalance: '0',
  usdtBalance: '0',
  busdBalance: '0',
  ethBalance: '0',
  network: '',
  errMessage: null
};

const claimReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case CLAIM_TOKENS_START:
      return {
        ...state
      };

    case CLAIM_TOKENS_SUCCESS:
      return {
        ...state
      };

    case CLAIM_TOKENS_FAILURE:
      return {
        ...state
      };

    default:
      return state;
  }
};

export default claimReducer;
