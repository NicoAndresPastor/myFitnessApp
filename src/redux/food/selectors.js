import {createSelector} from '@reduxjs/toolkit';

const food = state => state.food;

export const selectFood = createSelector([food], food => ({
  foods: food.foods,
}));
