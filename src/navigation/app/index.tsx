import React from 'react';
import {Text, View} from 'react-native';
import Diario from '../../screens/app/Diario';
import SearchFood from '../../screens/app/SearchFood';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Diario"
      screenOptions={{headerShown: false}}>
      <Tab.Screen name="Diario" component={StackNavigator} />
    </Tab.Navigator>
  );
}

function StackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="DiarioStack"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="DiarioStack" component={Diario} />
      <Stack.Screen name="SearchFood" component={SearchFood} />
    </Stack.Navigator>
  );
}

const AppNavigator = () => {
  return <TabNavigator />;
};

export default AppNavigator;
