import {SET_LOGIN} from './types';

export const loginRequest = payload => async dispatch => {
  dispatch({type: SET_LOGIN, payload: {isLoged}});
};
