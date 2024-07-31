import {ADD_FOOD} from './types';

const initialState = {
  breakfast: [],
  lunch: [],
  collation: [],
  dinner: [],
};

export default function mealsReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_FOOD: {
      return {
        ...state,
        [action.payload.meal]: [
          ...state[action.payload.meal],
          action.payload.foods,
        ],
      };
    }
    default:
      return state;
  }
}
