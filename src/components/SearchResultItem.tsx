import React, {memo} from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import {View, Text} from '@components/common';
import {Character} from '@models/Character';
import fonts from '@constants/fonts';
import spacing from '@constants/spacing';
import {colors} from '@constants/colors';

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
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.text_primary_subtle,
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
    margin: spacing.tiny,
  },
});

export default memo(SearchResultItem);
