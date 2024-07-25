import {createSelector} from '@reduxjs/toolkit';

const meals = state => state.meals;

export const selectMeals = createSelector([meals], meals => ({
  breakfast: meals.breakfast,
}));
