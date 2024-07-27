import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../../screens/auth/Login';
import SignUp from '../../screens/auth/SignUp';
import ForgotPassword from '../../screens/auth/ForgotPassword';
import Load from '../../screens/auth/Load';
const Stack = createNativeStackNavigator();
const AuthNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Load"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Load" component={Load} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;

