import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from '@screens/HomeScreen';
import FavoritesScreen from '@screens/FavoritesScreen';

const Tab = createBottomTabNavigator();

function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        headerTitleAlign: 'center',
        headerTintColor: 'pink',
        headerStyle: {
          backgroundColor: 'purple',
          borderBottomWidth: 1,
          borderBottomColor: 'blue',
        },
        tabBarStyle: {
          borderTopColor: 'blue',
          backgroundColor: 'orange',
        },
        tabBarActiveTintColor: 'blue',
        tabBarInactiveTintColor: 'pink',
      }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Favorites" component={FavoritesScreen} />
    </Tab.Navigator>
  );
}

export default BottomTabs;
