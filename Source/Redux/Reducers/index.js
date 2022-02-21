import {combineReducers} from 'redux';
import todoApi from './CallApiReducer';

export const AppReducers = combineReducers({
  todoApi,
});
