import React from 'react';
import Diario from '../../screens/app/Diario';
import SearchFood from '../../screens/app/SearchFood';
import FoodDetails from '../../screens/app/FoodDetails';
import Profile from '../../screens/app/Profile/ProfileGeneral';
import Calendar from '../../screens/app/Calendar';
import TodayCaloriesSummary from '../../screens/app/TodayCaloriesSummary';
import Calories from '../../screens/app/TodayCaloriesSummary/screens/Calories';
import Macros from '../../screens/app/TodayCaloriesSummary/screens/Macros';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Icon from 'react-native-vector-icons/AntDesign';
import EditProfile from '../../screens/app/Profile/EditProfile';
import Help from '../../screens/app/Profile/Help';
import PersonalInformation from '../../screens/app/Profile/Goals/PersonalInformation';
import PersonalGoals from '../../screens/app/Profile/Goals/PersonalGoals';
import PersonalGoalsWeightTime from '../../screens/app/Profile/Goals/PersonalGoalsWeightTime';
import FinalGoal from '../../screens/app/Profile/Goals/FinalGoal';

const Tab = createBottomTabNavigator();
const TabTop = createMaterialTopTabNavigator();
const Stack = createNativeStackNavigator();

// Stack Navigator para la pestaña Diario
function StackNavigatorDiario() {
  return (
    <Stack.Navigator
      initialRouteName="Diario"
      screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Diario" component={Diario} />
      <Stack.Screen name="SearchFood" component={SearchFood} />
      <Stack.Screen name="FoodDetails" component={FoodDetails} />
    </Stack.Navigator>
  );
}

// Stack Navigator para la pestaña Perfil
function StackNavigatorProfile() {
  return (
    <Stack.Navigator
      initialRouteName="Profile"
      screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
      <Stack.Screen name="Help" component={Help} />
      <Stack.Screen name="PersonalInformation" component={PersonalInformation} />
      <Stack.Screen name="PersonalGoals" component={PersonalGoals} />
      <Stack.Screen name="PersonalGoalsWeightTime" component={PersonalGoalsWeightTime} />
      <Stack.Screen name="FinalGoal" component={FinalGoal} />
    </Stack.Navigator>
  );
}

function TabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Diario"
      screenOptions={{ headerShown: false }} >
      <Tab.Screen
        name="Diario"
        component={StackNavigatorDiario}
        options={{
          tabBarLabel: 'Diario',
          tabBarIcon: ({ color, size }) => (
            <Icon name="book" color={color} size={size} />
          ),
          
        }}
      />
      <Tab.Screen
        name="Profile"
        component={StackNavigatorProfile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <Icon name="user" color={color} size={size} />
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
