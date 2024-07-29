import {GET_FOODS} from './types';

const initialState = {
  foods: [
    {
      id: 1,
      name: 'zanahoria',
      rationSize: 40,
      rationNumber: 1,
      carbohydrates: 20,
      fats: 10,
      proteins: 40,
      brand: 'zanahoria',
    },
    {
      id: 2,
      name: 'tomate',
      rationSize: 40,
      rationNumber: 1,
      carbohydrates: 20,
      fats: 10,
      proteins: 40,
      brand: 'tomate',
    },
    {
      id: 3,
      name: 'harina',
      rationSize: 40,
      rationNumber: 1,
      carbohydrates: 20,
      fats: 10,
      proteins: 40,
      brand: 'el molino',
    },
    {
      id: 4,
      name: 'mandarina',
      rationSize: 40,
      rationNumber: 1,
      carbohydrates: 20,
      fats: 10,
      proteins: 40,
      brand: 'mandarina',
    },
  ],
};

export default function foodsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_FOODS: {
      return {...state, foods: action.payload};
    }
    default:
      return state;
  }
}
