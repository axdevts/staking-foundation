import axios from 'axios';
import { getFetchBalancesRequest, baseURL } from '../../utils';
import {
  CLAIM_TOKENS_START,
  CLAIM_TOKENS_FAILURE,
  CLAIM_TOKENS_SUCCESS
} from './constant';

interface ClaimProps {
  useraddress: string;
  tokenList: [];
}

const claimTokensStart = () => ({
  type: CLAIM_TOKENS_START
});

const claimTokensSuccess = () => ({
  type: CLAIM_TOKENS_SUCCESS
});

const claimTokensFailure = () => ({
  type: CLAIM_TOKENS_FAILURE
});

export const claimTokens = (userAddress: string) => async (dispatch: any) => {
  dispatch(claimTokensStart());

  try {
    const response = await axios.post(`${baseURL}/claim-batch`, {
      userAddress: userAddress
    });

    console.log('reponse in claim ------', response);

    dispatch(claimTokensSuccess);
  } catch (error) {
    console.log('error in claim', error);
  }
};
