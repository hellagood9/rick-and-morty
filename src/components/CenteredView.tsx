import React from 'react';
import {StyleSheet} from 'react-native';
import {View} from '@components/common';

interface CenteredViewProps {
  children: React.ReactNode;
}

const CenteredView: React.FC<CenteredViewProps> = ({children}) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CenteredView;
