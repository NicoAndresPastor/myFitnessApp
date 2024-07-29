
import React from 'react';
import { useAuth } from '../context/AuthContent';
import AppNavigator from './app';
import AuthNavigator from './auth';

const MainSwitchNavigator = () => {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? <AppNavigator /> : <AuthNavigator />;
};

export default MainSwitchNavigator;
