import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {Character} from '@models/Character';
import fonts from '@constants/fonts';
import spacing from '@constants/spacing';

interface SearchResultItemProps {
  character: Character;
  onPress: () => void;
}

const SearchResultItem: React.FC<SearchResultItemProps> = ({
  character,
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.touchable}>
      <View style={styles.container}>
        <View style={styles.content}>
          <Image source={{uri: character.image}} style={styles.image} />
          <Text style={styles.text}>{character.name}</Text>
        </View>
      </View>
    </TouchableOpacity>
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
  content: {
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
  touchable: {
    flex: 1,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'lightgray',
    margin: spacing.tiny,
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

export default SearchResultItem;
