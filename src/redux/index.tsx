import {combineReducers, configureStore} from '@reduxjs/toolkit';
import foodsReducer from './foods/reducer';
import mealsReducer from './meals/reducer';

const appReducer = combineReducers({
  foods: foodsReducer,
  meals: mealsReducer,
});

const store = configureStore({
  reducer: appReducer,
});

export default store;
