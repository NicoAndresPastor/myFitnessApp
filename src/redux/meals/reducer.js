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
      switch (action.payload.meal) {
        case 'breakfast': {
          return {
            ...state,
            breakfast: [...state.breakfast, action.payload.foods],
          };
        }
        case 'lunch': {
          return {
            ...state,
            lunch: [...state.lunch, action.payload.foods],
          };
        }
        case 'collation': {
          return {
            ...state,
            collation: [...state.collation, action.payload.foods],
          };
        }
        case 'dinner': {
          return {
            ...state,
            dinner: [...state.dinner, action.payload.foods],
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
