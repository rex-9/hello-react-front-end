import { configureStore, combineReducers } from '@reduxjs/toolkit';
import greetingXer from './greeting/greetingXer';

const rootReducer = combineReducers({ greetings: greetingXer });
const store = configureStore({ reducer: rootReducer });
export default store;
