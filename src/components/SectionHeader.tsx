import React from 'react';

import {StyleSheet} from 'react-native';
import {View, Text} from '@components/common';

import fonts from '@constants/fonts';
import spacing from '@constants/spacing';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import iconSizes from '@constants/icons';
import {colors} from '@constants/colors';

interface SectionHeaderProps {
  iconName: string;
  title: string;
  hasBorder?: boolean;
}

const SectionHeader = ({title, hasBorder = false}: SectionHeaderProps) => {
  return (
    <View
      testID="sectionHeader"
      style={[
        styles.container,
        {backgroundColor: colors.primary_TintColor},
        hasBorder && {
          borderBottomWidth: StyleSheet.hairlineWidth,
          borderBottomColor: colors.tabBar_BorderColor,
        },
      ]}>
      <View style={styles.content}>
        <Icon
          name={'hexagon-multiple-outline'}
          color={colors.screen_BackgroundColor}
          size={iconSizes.regular}
        />

        <Text style={[styles.title, {color: colors.screen_BackgroundColor}]}>
          {title}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: spacing.tiny,
    paddingHorizontal: spacing.small,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'transparent',
    gap: 8,
  },
  title: {
    fontSize: fonts.size.smallMedium,
    fontFamily: fonts.family.kodeMonoSemiBold,
    textTransform: 'uppercase',
  },
});

export default SectionHeader;
