import React from 'react';
import fonts from '@constants/fonts';
import spacing from '@constants/spacing';
import {Character} from '@models/Character';

import {Image, TouchableOpacity, StyleSheet} from 'react-native';
import {View, Text} from '@components/common';
import FavoriteButton from '@components/FavoriteButton';
import {colors} from '@constants/colors';

interface Props {
  character: Character;
  onPress: () => void;
}

const CharacterCard = ({character, onPress}: Props) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.touchable}>
      <View style={styles.container}>
        <FavoriteButton character={character} isCentered />
        <Image source={{uri: character.image}} style={styles.image} />

        <Text style={styles.text}>{character.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  touchable: {
    flex: 1,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.primary_TintColor,
    margin: spacing.small,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    gap: spacing.medium,
    alignItems: 'center',
    paddingHorizontal: spacing.medium,
    paddingVertical: spacing.small,
  },
  image: {
    width: 100,
    height: 100,
    borderWidth: 1,
    borderRadius: 50,
  },
  text: {
    fontSize: fonts.size.medium,
    fontFamily: fonts.family.kodeMonoSemiBold,
    textAlign: 'center',
  },
});

export default CharacterCard;
