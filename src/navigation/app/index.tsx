import React from 'react';
import Diario from '../../screens/app/Diario';
import SearchFood from '../../screens/app/SearchFood';
import FoodDetails from '../../screens/app/FoodDetails';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/AntDesign';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Diario"
      screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="Diario"
        component={StackNavigator}
        options={{
          tabBarLabel: 'Diario',
          tabBarIcon: ({color, size}) => (
            <Icon name="book" color={color} size={size} />
          ),
        }}
      />
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
      <Stack.Screen name="FoodDetails" component={FoodDetails} />
    </Stack.Navigator>
  );
}

const AppNavigator = () => {
  return <TabNavigator />;
};

export default AppNavigator;
