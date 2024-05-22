import React from 'react';
import {StyleSheet} from 'react-native';

import fonts from '@constants/fonts';
import spacing from '@constants/spacing';
import {Text} from '@components/common';
import {colors} from '@constants/colors';

interface InfoItemProps {
  label: string;
  value: any;
}

const InfoItem = ({label, value}: InfoItemProps) => {
  return (
    <Text style={styles.label}>
      {label}: <Text style={styles.value}>{value}</Text>
    </Text>
  );
};

const styles = StyleSheet.create({
  label: {
    fontSize: fonts.size.smallMedium,
    fontFamily: fonts.family.kodeMonoRegular,
    color: colors.primary_TintColor_subtle,
    marginBottom: 4,
  },
  value: {
    marginTop: spacing.tiny,
    lineHeight: fonts.lineHeight.medium,
    color: colors.text_primary,
  },
});

export default InfoItem;
