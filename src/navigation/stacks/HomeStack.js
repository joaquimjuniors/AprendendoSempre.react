import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import HomeScreen from '../../container/home/Screen';

const HomeStack = createStackNavigator();

function HomeStackNavigation() {
  return (
    <HomeStack.Navigator initialRouteName="Home">
      <HomeStack.Screen name="Home" options={{ headerShown: false }} component={HomeScreen} />
    </HomeStack.Navigator>
  );
}

export default HomeStackNavigation;
