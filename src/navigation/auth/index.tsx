import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../../screens/auth/Login';
import SignUp from '../../screens/auth/SignUp';
import ForgotPassword from '../../screens/auth/ForgotPassword';
import Load from '../../screens/auth/Load';
import PersonalInformation from '../../screens/auth/Goals/PersonalInformation';
import PersonalGoals from '../../screens/app/Profile/Goals/PersonalGoals';
import PersonalGoalsWeightTime from '../../screens/auth/Goals/PersonalGoalsWeightTime';
import FinalGoal from '../../screens/auth/Goals/FinalGoal';
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
      <Stack.Screen name="PersonalInformation" component={PersonalInformation} />
      <Stack.Screen name="PersonalGoalsWeightTime" component={PersonalGoalsWeightTime} />
      <Stack.Screen name="FinalGoal" component={FinalGoal} />
      <Stack.Screen name="PersonalGoals" component={PersonalGoals} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;

