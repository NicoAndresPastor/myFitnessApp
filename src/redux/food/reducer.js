import {ADD_FOOD, DELETE_FOOD} from './types';

const initialState = {
  foods: [],
};

export default function foodReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_FOOD: {
      return {...state, foods: [...state.foods, action.payload]};
    }
    case DELETE_FOOD: {
      return {
        ...state,
        foods: state.foods.filter(food => food.id === action.payload),
      };
    }
    default:
      return state;
  }
}
