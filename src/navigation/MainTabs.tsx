import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import CharactersScreen from '@screens/CharactersScreen';
import FavoritesScreen from '@screens/FavoritesScreen';
import iconSizes from '@constants/icons';
import {colors} from '@constants/colors';
import fonts from '@constants/fonts';

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
        headerTintColor: colors.header_TintColor,
        headerStyle: {
          backgroundColor: colors.header_BackgroundColor,
          borderBottomWidth: 1,
          borderBottomColor: colors.tabBar_BorderColor,
        },
        tabBarStyle: {
          borderTopColor: colors.tabBar_BorderColor,
          backgroundColor: colors.tabBar_BackgroundColor,
        },
        tabBarLabelStyle: {
          fontFamily: fonts.family.kodeMonoSemiBold,
          fontSize: fonts.size.small,
        },
        tabBarActiveTintColor: colors.tabBar_ActiveTintColor,
        tabBarInactiveTintColor: colors.tabBar_InactiveTintColor,
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
