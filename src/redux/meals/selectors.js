import {createSelector} from '@reduxjs/toolkit';

const selectMealsState = state => state.meals;

export const selectMeals = createSelector([selectMealsState], meals => ({
  breakfast: meals.breakfast,
  lunch: meals.lunch,
  collation: meals.collation,
  dinner: meals.dinner,
}));
