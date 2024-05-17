import React from 'react';
import {
  ParamListBase,
  StackNavigationState,
  TypedNavigator,
} from '@react-navigation/native';
import {
  NativeStackNavigationEventMap,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';

export type AppNavigationRoutes = {
  Home: undefined;
  Detail: undefined;
  Favorites: undefined;
};

export type ParentStack = TypedNavigator<
  AppNavigationRoutes,
  StackNavigationState<ParamListBase>,
  NativeStackNavigationOptions,
  NativeStackNavigationEventMap,
  () => React.JSX.Element
>;
