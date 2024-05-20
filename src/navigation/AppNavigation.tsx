import React from 'react';
import {Platform} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

import MainTabs from '@navigation/MainTabs';
import DetailScreen from '@screens/DetailScreen';
import {Routes} from './Routes';

const Stack = createNativeStackNavigator<Routes>();

const AppNavigation = () => (
  <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="MainTabs" component={MainTabs} />
      <Stack.Screen
        name="Detail"
        component={DetailScreen}
        options={{
          headerShown: Platform.OS === 'ios' ? false : true,
          headerTransparent: true,
          headerTintColor: 'yellow',
          headerShadowVisible: false,
          headerTitleAlign: 'center',
          presentation: 'modal',
          animationTypeForReplace: 'push',
          animation: 'fade_from_bottom',
        }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigation;
