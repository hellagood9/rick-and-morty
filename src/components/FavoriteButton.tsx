import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Character} from '@models/Character';

import iconSizes from '@constants/icons';
import spacing from '@constants/spacing';
import useFavorite from '@hooks/useFavorite';

interface FavoriteButtonProps {
  character: Character;
}

const FavoriteButton: React.FC<FavoriteButtonProps> = ({character}) => {
  const {isFavorite, handleAddFavorite, handleRemoveFavorite} =
    useFavorite(character);

  return (
    <TouchableOpacity
      onPress={isFavorite ? handleRemoveFavorite : handleAddFavorite}
      style={styles.button}>
      <Icon
        name={isFavorite ? 'heart' : 'heart-outline'}
        size={iconSizes.medium}
        color="red"
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
