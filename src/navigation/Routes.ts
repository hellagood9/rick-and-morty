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

export type Routes = {
  Home: undefined;
  Detail: {id: number};
  Favorites: undefined;
};

export type ParentStack = TypedNavigator<
  Routes,
  StackNavigationState<ParamListBase>,
  NativeStackNavigationOptions,
  NativeStackNavigationEventMap,
  () => React.JSX.Element
>;
