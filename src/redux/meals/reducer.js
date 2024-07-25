import {ADD_BREAKFAST_FOOD, DELETE_BREAKFAST_FOOD} from './types';

const initialState = {
  breakfast: {
    foods: [],
    calories: 0,
  },
  lunch: {
    foods: [],
    calories: 0,
  },
  collation: {
    foods: [],
    calories: 0,
  },
  dinner: {
    foods: [],
    calories: 0,
  },
};

export default function mealsReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_BREAKFAST_FOOD: {
      return {
        ...state,
        breakfast: {
          ...state.breakfast,
          foods: [...state.breakfast.foods, action.payload],
          calories: state.breakfast.calories + action.payload.calories,
        },
      };
    }
    case DELETE_BREAKFAST_FOOD: {
      return {
        ...state,
        breakfast: {
          ...state.breakfast,
          foods: state.breakfast.foods.filter(
            food => food.id === action.payload.id,
          ),
          calories: state.breakfast.calories - action.payload.calories,
        },
      };
    }
    default:
      return state;
  }
}
