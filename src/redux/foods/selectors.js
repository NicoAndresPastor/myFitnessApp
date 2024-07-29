import {createSelector} from '@reduxjs/toolkit';

const foods = state => state.foods;

export const selectFoods = state => state.foods.foods;
