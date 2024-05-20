import React from 'react';
import {
  View as DefaultView,
  ViewProps,
  ScrollView as DefaultScrollView,
  Platform,
  StyleSheet,
} from 'react-native';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import {SafeAreaView as DefaultSafeAreaView} from 'react-native-safe-area-context';

export function View(props: ViewProps) {
  const {style, ...otherProps} = props;

  return <DefaultView style={[styles.defaultView, style]} {...otherProps} />;
}

export const SafeAreaView = (props: ViewProps) => {
  const {style, ...otherProps} = props;

  return (
    <DefaultSafeAreaView style={[styles.safeAreaView, style]} {...otherProps}>
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
        styles.safeAreaViewWithTabBar,
        {paddingBottom: Platform.OS === 'android' ? 0 : -tabBarHeight},
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
    <DefaultScrollView style={[styles.scrollView, style]} {...otherProps} />
  );
};

const styles = StyleSheet.create({
  defaultView: {
    backgroundColor: 'pink',
  },
  safeAreaView: {
    flex: 1,
    backgroundColor: 'pink',
  },
  safeAreaViewWithTabBar: {
    flex: 1,
  },
  scrollView: {
    backgroundColor: 'pink',
  },
});
