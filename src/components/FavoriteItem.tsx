import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {Character} from '@models/Character';
import fonts from '@constants/fonts';
import spacing from '@constants/spacing';

interface FavoriteItemProps {
  character: Character;
  onRemove: (id: number) => void;
}

const FavoriteItem: React.FC<FavoriteItemProps> = ({character, onRemove}) => {
  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <Image source={{uri: character.image}} style={styles.image} />
        <Text style={styles.text}>{character.name}</Text>
      </View>

      <TouchableOpacity
        onPress={() => onRemove(character.id)}
        style={styles.removeButton}>
        <Text style={styles.removeButtonText}>Remove</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: spacing.small,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.medium,
    flex: 1,
    marginRight: spacing.mediumSmall,
  },
  image: {
    width: 48,
    height: 48,
    borderWidth: 1,
    borderRadius: 24,
  },
  text: {
    fontSize: fonts.size.medium,
    fontFamily: fonts.family.kodeMonoSemiBold,
    flexShrink: 1,
  },
  removeButton: {
    backgroundColor: 'red',
    padding: spacing.small,
    borderRadius: 4,
  },
  removeButtonText: {
    color: 'white',
  },
});

export default FavoriteItem;
