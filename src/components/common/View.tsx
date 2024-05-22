import React from 'react';
import {
  View as DefaultView,
  ViewProps,
  ScrollView as DefaultScrollView,
  Platform,
} from 'react-native';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import {SafeAreaView as DefaultSafeAreaView} from 'react-native-safe-area-context';
import {colors} from '@constants/colors';

export function View(props: ViewProps) {
  const {style, ...otherProps} = props;

  return (
    <DefaultView
      style={[{backgroundColor: colors.screen_BackgroundColor}, style]}
      {...otherProps}
    />
  );
}

export const SafeAreaView = (props: ViewProps) => {
  const {style, ...otherProps} = props;

  return (
    <DefaultSafeAreaView
      style={[{flex: 1, backgroundColor: colors.screen_BackgroundColor}, style]}
      {...otherProps}>
      {props.children}
    </DefaultSafeAreaView>
  );
};

export const SafeAreaViewWithTabBar = (props: ViewProps) => {
  const tabBarHeight = useBottomTabBarHeight();
  const {style, ...otherProps} = props;

  return (
    <DefaultSafeAreaView
      style={[
        {
          flex: 1,
          backgroundColor: colors.screen_BackgroundColor,
          paddingBottom: Platform.OS === 'android' ? 0 : -tabBarHeight,
        },
        style,
      ]}
      {...otherProps}>
      {props.children}
    </DefaultSafeAreaView>
  );
};

export const ScrollView = (props: ViewProps) => {
  const {style, ...otherProps} = props;

  return (
    <DefaultScrollView
      style={[{backgroundColor: colors.screen_BackgroundColor}, style]}
      {...otherProps}
    />
  );
};
