// Redux Toolkit
import { configureStore, combineReducers } from '@reduxjs/toolkit';
// My Reducers
import counterReducer from './app/components/Counter/counterSlice';

const reducers = combineReducers({
  counter: counterReducer
})

export default configureStore({
  reducer: reducers,
});
