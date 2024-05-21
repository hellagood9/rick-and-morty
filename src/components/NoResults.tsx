import React from 'react';
import {StyleSheet} from 'react-native';
import {Text, View} from '@components/common';
import fonts from '@constants/fonts';

interface NoResultsProps {
  message: string;
}

const NoResults: React.FC<NoResultsProps> = ({message}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: fonts.size.medium,
    color: 'gray',
  },
});

export default NoResults;
