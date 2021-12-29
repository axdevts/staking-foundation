import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import claimReducer from './claim.reducer';
import stakeReducer from './stake.reducer';
import userReducer from './user.reducer';
import withdrawReducer from './withdraw.reducer';
const rootReducer = combineReducers({
  user: userReducer,
  stake: stakeReducer,
  withdraw: withdrawReducer,
  claim: claimReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
