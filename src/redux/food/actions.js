import {ADD_FOOD, DELETE_FOOD} from './types';

export const addFood = payload => async dispatch => {
  dispatch({type: ADD_FOOD, payload});
};

export const deleteFood = payload => async dispatch => {
  dispatch({type: DELETE_FOOD, payload});
};
