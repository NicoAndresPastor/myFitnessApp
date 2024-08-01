import {createSelector} from '@reduxjs/toolkit';

const selectFoodsState = state => state.foods;

export const selectFoods = createSelector(
  [selectFoodsState],
  foods => foods.foods,
);
