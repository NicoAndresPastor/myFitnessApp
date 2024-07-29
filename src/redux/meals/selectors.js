import {createSelector} from '@reduxjs/toolkit';

const selectMealsState = state => state.meals;

export const selectMeals = createSelector([selectMealsState], meals => ({
  breakfastfoods: meals.breakfastfoods,
  lunchfoods: meals.lunchfoods,
  collationfoods: meals.collationfoods,
  dinnerfoods: meals.dinnerfoods,
}));
