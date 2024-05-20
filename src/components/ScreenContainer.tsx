import React from 'react';
import {View, StyleSheet} from 'react-native';
import {useHeaderHeight} from '@react-navigation/elements';

const ScreenContainer = ({children}: {children: React.ReactNode}) => {
  const headerHeight = useHeaderHeight();

  return (
    <View style={{...styles.container, paddingTop: headerHeight}}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ScreenContainer;
