import React from 'react';
import {Platform} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

import MainTabs from '@navigation/MainTabs';
import DetailScreen from '@screens/DetailScreen';
import {Routes} from './Routes';
import {colors} from '@constants/colors';

const Stack = createNativeStackNavigator<Routes>();

const AppNavigation = () => (
  <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name="MainTabs"
        component={MainTabs}
        options={{
          title: 'Characters',
        }}
      />
      <Stack.Screen
        name="Detail"
        component={DetailScreen}
        options={{
          title: 'Details',
          headerShown: Platform.OS === 'ios' ? false : true,
          headerTransparent: true,
          headerTintColor: colors.primary_TintColor,
          headerStyle: {
            backgroundColor: colors.header_BackgroundColor,
          },
          headerShadowVisible: false,
          headerTitleAlign: 'center',
          presentation: 'modal',

          // Android
          animationTypeForReplace: 'push',
          animation: 'slide_from_right',
        }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigation;
