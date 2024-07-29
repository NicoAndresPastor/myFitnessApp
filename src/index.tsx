
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainSwitchNavigator from './navigation/index';
import { Provider } from 'react-redux';
import store from './redux';
import { AuthProvider } from './context/AuthContent';

const FitnessApp = () => {
  return (
    <Provider store={store}>
      <AuthProvider>
        <NavigationContainer>
          <MainSwitchNavigator />
        </NavigationContainer>
      </AuthProvider>
    </Provider>
  );
};

export default FitnessApp;
