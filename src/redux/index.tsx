import {combineReducers, configureStore} from '@reduxjs/toolkit';
import foodReducer from './food/reducer';
import mealsReducer from './meals/reducer';

const appReducer = combineReducers({
  food: foodReducer,
  meals: mealsReducer,
});

const store = configureStore({
  reducer: appReducer,
});

export default store;
