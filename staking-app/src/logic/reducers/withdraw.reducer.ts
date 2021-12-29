import {
  WITHDRAW_TOKEN_START,
  WITHDRAW_TOKEN_SUCCESS,
  WITHDRAW_TOKEN_FAILURE
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

const withdrawReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case WITHDRAW_TOKEN_START:
      return {
        ...state
      };

    case WITHDRAW_TOKEN_SUCCESS:
      return {
        ...state
      };

    case WITHDRAW_TOKEN_FAILURE:
      return {
        ...state,
        errMessage: 'not available'
      };

    default:
      return state;
  }
};

export default withdrawReducer;
