import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {View, Text} from '@components/common';

import {Character, Episode} from '@models/Character';
import spacing from '@constants/spacing';
import EpisodeList from '@components/EpisodeList';
import fonts from '@constants/fonts';
import fontWeights from '@constants/fontWeights';

interface CharacterDetailProps {
  character: Character;
  episodes: Episode[];
}

const CharacterDetail: React.FC<CharacterDetailProps> = ({
  character,
  episodes,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{character.name}</Text>
      <Image source={{uri: character.image}} style={styles.image} />
      <Text style={styles.infoText}>Status: {character.status}</Text>
      <Text style={styles.infoText}>Species: {character.species}</Text>
      <Text style={styles.infoText}>Gender: {character.gender}</Text>
      <Text style={styles.episodesTitle}>Episodes:</Text>
      <EpisodeList episodes={episodes} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: spacing.large,
    paddingHorizontal: spacing.medium,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginVertical: 16,
  },
  name: {
    fontSize: fonts.size.xLarge,
    fontWeight: fontWeights.semiBold,
    fontFamily: fonts.family.kodeMonoSemiBold,
    marginBottom: 8,
  },
  infoText: {
    fontSize: fonts.size.medium,
    marginVertical: 4,
  },
  episodesTitle: {
    fontSize: fonts.size.large,
    fontWeight: fontWeights.bold,
    marginTop: 16,
    marginBottom: 8,
  },
});

export default CharacterDetail;
