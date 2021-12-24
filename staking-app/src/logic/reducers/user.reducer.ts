import {
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  UPDATE_USDC_BALANCE,
  UPDATE_USDT_BALANCE,
  GET_ETH_BALANCE_SUCCESS,
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

const userReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        walletConnected: true,
        userAddress: action.address,
        network: action.network
      };

    case LOGOUT_SUCCESS:
      return {
        ...state,
        walletConnected: false,
        userAddress: '',
        usdcBalance: '0',
        usdtBalance: '0',
        daiBalance: '0',
        ethBalance: '0',
        busdBalance: '0',
        network: ''
      };

    case UPDATE_USDC_BALANCE:
      return {
        ...state,
        usdcBalance: action.usdcBalance
      };

    case UPDATE_USDT_BALANCE:
      return {
        ...state,
        usdtBalance: action.usdtBalance
      };

    case UPDATE_BUSD_BALANCE:
      return {
        ...state,
        busdBalance: action.busdBalance
      };

    case GET_ETH_BALANCE_SUCCESS:
      return {
        ...state,
        ethBalance: action.ethBalance
      };

    default:
      return state;
  }
};

export default userReducer;
