import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import CharactersScreen from '@screens/CharactersScreen';
import FavoritesScreen from '@screens/FavoritesScreen';
import iconSizes from '@constants/icons';

const Tab = createBottomTabNavigator();

const TabBarIcon = ({
  name,
  color,
}: {
  name: React.ComponentProps<typeof Icon>['name'];
  color: string;
}) => <Icon name={name} color={color} size={iconSizes.medium} />;

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
        name="Characters"
        component={CharactersScreen}
        options={{
          tabBarIcon: createTabBarIcon('account-group'),
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
