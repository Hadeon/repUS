import { combineReducers } from 'redux';
import * as locationReducer from './locationReducer.js';

export default combineReducers(Object.assign(
    locationReducer,
));