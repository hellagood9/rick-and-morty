import React from 'react';
import {TextInput, StyleSheet, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import spacing from '@constants/spacing';
import iconSizes from '@constants/icons';
import fonts from '@constants/fonts';

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
      <Icon name={'magnify'} size={iconSizes.large} />

      <TextInput
        style={styles.input}
        placeholder="Search characters"
        value={searchQuery}
        onChangeText={setSearchQuery}
      />

      {searchQuery.length > 0 && (
        <TouchableOpacity onPress={handleResetSearch}>
          <Icon name={'close'} size={iconSizes.medium} />
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
    backgroundColor: 'white',
    paddingHorizontal: spacing.medium,
  },
  input: {
    flex: 1,
    height: 56,
    fontSize: fonts.size.medium,
    paddingHorizontal: spacing.small,
  },
});

export default SearchInput;
