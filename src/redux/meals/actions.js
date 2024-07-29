import {ADD_FOOD} from './types';

export const addFood = (meal, food) => async dispatch => {
  dispatch({
    type: ADD_FOOD,
    payload: {meal, food},
  });
};
