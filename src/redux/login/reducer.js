import {SET_LOGIN} from './types';

const initialState = {
  isLoged: false,
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOGIN: {
      return {
        ...state,
        isLoged: action.payload.isLoged,
      };
    }
    default:
      return state;
  }
};

export default loginReducer;
