import React from 'react';
import Diario from '../../screens/app/Diario';
import SearchFood from '../../screens/app/SearchFood';
import FoodDetails from '../../screens/app/FoodDetails';
import Calendar from '../../screens/app/Calendar';
import TodayCaloriesSummary from '../../screens/app/TodayCaloriesSummary';
import Calories from '../../screens/app/TodayCaloriesSummary/screens/Calories';
import Macros from '../../screens/app/TodayCaloriesSummary/screens/Macros';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import Icon from 'react-native-vector-icons/AntDesign';

const Tab = createBottomTabNavigator();
const TabTop = createMaterialTopTabNavigator();
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
    <Stack.Navigator initialRouteName="DiarioStack">
      <Stack.Screen
        name="DiarioStack"
        component={Diario}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SearchFood"
        component={SearchFood}
        options={{title: 'Search Food'}}
      />
      <Stack.Screen
        name="FoodDetails"
        component={FoodDetails}
        options={{title: 'Food Details'}}
      />
      <Stack.Screen
        name="Calendar"
        component={Calendar}
        options={{title: 'Calendar'}}
      />
      <Stack.Screen
        name="TodayCaloriesSummary"
        component={TabNavigatorTodayCaloriesSummary}
        options={{title: 'Calories Summary'}}
      />
    </Stack.Navigator>
  );
}

function TabNavigatorTodayCaloriesSummary() {
  return (
    <TabTop.Navigator
      initialRouteName="Calories"
      screenOptions={{headerShown: false}}>
      <TabTop.Screen name="Calories" component={Calories} />
      <TabTop.Screen name="Macros" component={Macros} />
    </TabTop.Navigator>
  );
}

const AppNavigator = () => {
  return <TabNavigator />;
};

export default AppNavigator;
