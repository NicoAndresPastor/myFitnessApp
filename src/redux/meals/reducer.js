import {ADD_FOOD} from './types';

const initialState = {
  breakfastfoods: [],
  lunchfoods: [],
  collationfoods: [],
  dinnerfoods: [],
};

export default function mealsReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_FOOD: {
      switch (action.payload.meal) {
        case 'breakfast': {
          return {
            ...state,
            breakfastfoods: [...state.breakfastfoods, action.payload.foods],
          };
        }
        case 'lunch': {
          return {
            ...state,
            lunchfoods: [...state.lunchfoods, action.payload.foods],
          };
        }
        case 'collation': {
          return {
            ...state,
            collationfoods: [...state.collationfoods, action.payload.foods],
          };
        }
        case 'dinner': {
          return {
            ...state,
            dinnerfoods: [...state.dinnerfoods, action.payload.foods],
          };
        }
        default:
          return state;
      }
    }
    default:
      return state;
  }
}
