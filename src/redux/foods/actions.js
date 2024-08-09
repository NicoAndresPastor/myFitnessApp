import {GET_FOODS} from './types';

export const getFoods = payload => async dispatch => {
  dispatch({type: GET_FOODS, payload});
};
