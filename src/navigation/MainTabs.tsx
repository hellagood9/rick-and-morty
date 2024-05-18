import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeScreen from '@screens/HomeScreen';
import FavoritesScreen from '@screens/FavoritesScreen';

const Tab = createBottomTabNavigator();

const TabBarIcon = ({
  name,
  color,
}: {
  name: React.ComponentProps<typeof Icon>['name'];
  color: string;
}) => <Icon name={name} color={color} size={24} />;

const createTabBarIcon =
  (name: string) =>
  ({color}: {color: string}) =>
    <TabBarIcon name={name} color={color} />;

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
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: createTabBarIcon('home'),
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          tabBarIcon: createTabBarIcon('heart'),
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomTabs;
