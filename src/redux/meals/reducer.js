import {ADD_FOOD} from './types';

const initialState = {
  breakfast: {foods: [], calories: 0},
  lunch: {foods: [], calories: 0},
  collation: {foods: [], calories: 0},
  dinner: {foods: [], calories: 0},
};

export default function mealsReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_FOOD: {
      return {
        ...state,
        [action.payload.meal]: {
          ...state[action.payload.meal],
          foods: [...state[action.payload.meal].foods, action.payload.food],
          calories:
            state[action.payload.meal].calories + action.payload.calories,
        },
      };
    }
    default:
      return state;
  }
}
