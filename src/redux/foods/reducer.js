import {MODIFY_FOOD} from './types';

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
      calories: 10,
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
      calories: 20,
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
      calories: 30,
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
      calories: 60,
    },
  ],
};

export default function foodsReducer(state = initialState, action) {
  switch (action.type) {
    case MODIFY_FOOD: {
      return {
        ...state,
        foods: state.foods.map(food =>
          food.id === action.payload.modifiedFood.id
            ? action.payload.modifiedFood
            : food,
        ),
      };
    }
    default:
      return state;
  }
}
