import React from 'react';
import {StyleSheet} from 'react-native';
import {Text} from '@components/common';
import CenteredView from '@components/CenteredView';
import fonts from '@constants/fonts';
import {colors} from '@constants/colors';

interface NoResultsProps {
  message: string;
}

const NoResults: React.FC<NoResultsProps> = ({message}) => {
  return (
    <CenteredView>
      <Text style={styles.text}>{message}</Text>
    </CenteredView>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: fonts.size.medium,
    color: colors.primary_TintColor,
  },
});

export default NoResults;
