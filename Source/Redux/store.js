import {createStore, applyMiddleware, compose} from 'redux';

import ReduxThunk from 'redux-thunk';
import {AppReducers} from './Reducers';

const rootReducer = (state, action) => {
  return AppReducers(state, action);
};

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default store;
