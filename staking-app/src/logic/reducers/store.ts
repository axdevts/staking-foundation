import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import stakeReducer from './stake.reducer';
import userReducer from './user.reducer';
const rootReducer = combineReducers({
  user: userReducer,
  stake: stakeReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
