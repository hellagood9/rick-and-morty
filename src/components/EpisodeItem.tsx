import React from 'react';
import {StyleSheet} from 'react-native';
import {Episode} from '@models/Character';
import {View, Text} from '@components/common';
import fontWeights from '@constants/fontWeights';
import fonts from '@constants/fonts';
import spacing from '@constants/spacing';
import {colors} from '@constants/colors';
import InfoItem from '@components/InfoItem';

interface EpisodeItemProps {
  item: Episode;
}

const EpisodeItem = ({item}: EpisodeItemProps) => {
  return (
    <View style={[styles.episodeContainer]}>
      <Text style={styles.episodeName}>{item.name}</Text>
      <InfoItem label="Air Date" value={item.air_date} />
      <InfoItem label="Episode" value={item.episode} />
    </View>
  );
};

const styles = StyleSheet.create({
  episodeContainer: {
    paddingVertical: spacing.medium,
    backgroundColor: colors.screen_BackgroundColor,
  },
  episodeName: {
    fontSize: fonts.size.medium,
    fontWeight: fontWeights.semiBold,
    fontFamily: fonts.family.kodeMonoSemiBold,
    color: colors.primary_TintColor,
    marginBottom: 4,
  },
});

export default EpisodeItem;
