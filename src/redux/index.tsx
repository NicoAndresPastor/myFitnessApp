import {combineReducers, configureStore} from '@reduxjs/toolkit';
import foodsReducer from './foods/reducer';
import mealsReducer from './meals/reducer';
import loginReducer from './login/reducer';

const appReducer = combineReducers({
  foods: foodsReducer,
  meals: mealsReducer,
  login: loginReducer,
});

const store = configureStore({
  reducer: appReducer,
});

export default store;
