import { createSelector } from "@reduxjs/toolkit";
//Aca hay un error en el selector 
const selectGoalsState = state => state.goals;

export const selectUserData = createSelector(
    [selectGoalsState],
  goals => ({
    userWeight: goals.userWeight,
    userHeight: goals.userHeight,
    userAge: goals.userAge ,
    userActivityDays: goals.userActivityDays,
    userGender: goals.userGender,
    userTarget: goals.userTarget,
    userTargetTime: goals.userTargetTime,
    userWeightIdeal: goals.userWeightIdeal
  })
);
