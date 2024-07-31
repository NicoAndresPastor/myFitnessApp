import {combineReducers, configureStore} from '@reduxjs/toolkit';
import foodReducer from './food/reducer';
import mealsReducer from './meals/reducer';
import loginReducer from './login/reducer';

const appReducer = combineReducers({
  food: foodReducer,
  meals: mealsReducer,
  login: loginReducer,
});

const store = configureStore({
  reducer: appReducer,
});

export default store;
