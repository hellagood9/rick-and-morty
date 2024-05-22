import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {View, Text} from '@components/common';
import fontWeights from '@constants/fontWeights';
import EpisodeList from '@components/EpisodeList';
import SectionHeader from '@components/SectionHeader';
import InfoItem from '@components/InfoItem';

import {Character, Episode} from '@models/Character';
import spacing from '@constants/spacing';
import fonts from '@constants/fonts';
import {colors} from '@constants/colors';

interface CharacterDetailProps {
  character: Character;
  episodes: Episode[];
}

const CharacterDetail: React.FC<CharacterDetailProps> = ({
  character,
  episodes,
}) => {
  const characterInfo = [
    {title: 'Status', value: character.status},
    {title: 'Species', value: character.species},
    {title: 'Gender', value: character.gender},
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{character.name}</Text>
      <Image source={{uri: character.image}} style={styles.image} />

      <SectionHeader iconName="application-brackets" title="Info" hasBorder />

      <View style={styles.sectionContainer}>
        {characterInfo.map(info => (
          <InfoItem key={info.title} label={info.title} value={info.value} />
        ))}
      </View>

      <SectionHeader
        iconName="application-brackets"
        title="Episodes"
        hasBorder
      />

      <View style={styles.sectionContainer}>
        <EpisodeList episodes={episodes} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: spacing.large,
  },
  sectionContainer: {
    marginBottom: spacing.medium,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.primary_TintColor,
    padding: spacing.medium,
    backgroundColor: colors.screen_BackgroundColor_subtle,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginVertical: 16,
    alignSelf: 'center',
  },
  name: {
    fontSize: fonts.size.title,
    fontWeight: fontWeights.semiBold,
    fontFamily: fonts.family.kodeMonoSemiBold,
    color: colors.primary_TintColor,
    textAlign: 'center',
    marginBottom: 8,
  },
});

export default CharacterDetail;
