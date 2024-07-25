import {ADD_BREAKFAST_FOOD, DELETE_BREAKFAST_FOOD} from './types';

export const addBreakfastFood = payload => async dispatch => {
  dispatch({type: ADD_BREAKFAST_FOOD, payload});
};

export const deleteBreakfastFood = payload => async dispatch => {
  dispatch({type: DELETE_BREAKFAST_FOOD, payload});
};
