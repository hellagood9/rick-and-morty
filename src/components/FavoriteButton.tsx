import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Character} from '@models/Character';

import iconSizes from '@constants/icons';
import spacing from '@constants/spacing';
import useFavorite from '@hooks/useFavorite';
import {colors} from '@constants/colors';

interface FavoriteButtonProps {
  character: Character;
  isCentered?: boolean;
}

const FavoriteButton: React.FC<FavoriteButtonProps> = ({
  character,
  isCentered = false,
}) => {
  const {isFavorite, handleAddFavorite, handleRemoveFavorite} =
    useFavorite(character);

  return (
    <TouchableOpacity
      onPress={isFavorite ? handleRemoveFavorite : handleAddFavorite}
      style={[styles.button, {alignSelf: isCentered ? 'center' : 'flex-end'}]}>
      <Icon
        name={isFavorite ? 'heart' : 'heart-outline'}
        size={iconSizes.medium}
        color={isFavorite ? colors.critical : colors.text_secondary}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: spacing.small,
  },
});

export default FavoriteButton;
