import {createSelector} from '@reduxjs/toolkit';

const selectLoginState = state => state.login;

export const selectLogin = createSelector([selectLoginState], loginState => ({
  isLoged: loginState.isLoged,
}));
