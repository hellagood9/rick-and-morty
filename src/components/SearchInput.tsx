import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import spacing from '@constants/spacing';
import iconSizes from '@constants/icons';
import fonts from '@constants/fonts';
import {TextInput, View} from '@components/common';
import {colors} from '@constants/colors';

interface SearchInputProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  handleResetSearch: () => void;
}

const SearchInput: React.FC<SearchInputProps> = ({
  searchQuery,
  setSearchQuery,
  handleResetSearch,
}) => {
  return (
    <View style={styles.content}>
      <Icon
        name={'magnify'}
        size={iconSizes.large}
        color={colors.secondary_TintColor_subtle}
      />

      <TextInput
        style={styles.input}
        placeholder="Search characters"
        value={searchQuery}
        onChangeText={setSearchQuery}
      />

      {searchQuery.length > 0 && (
        <TouchableOpacity onPress={handleResetSearch}>
          <Icon
            name={'close'}
            size={iconSizes.medium}
            color={colors.text_primary}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.input_BackgroundColor,
    paddingHorizontal: spacing.medium,
    borderWidth: 1,
    borderColor: colors.input_BorderColor,
  },
  input: {
    flex: 1,
    height: 56,
    fontSize: fonts.size.medium,
    fontFamily: fonts.family.kodeMonoRegular,
    paddingHorizontal: spacing.small,
    backgroundColor: 'transparent',
  },
});

export default SearchInput;
