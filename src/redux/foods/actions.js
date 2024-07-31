import {MODIFY_FOOD} from './types';

export const getFoods = payload => async dispatch => {
  dispatch({type: MODIFY_FOOD, payload: {modifiedFood}});
};
