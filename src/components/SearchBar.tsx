import React, {useState} from 'react';
import {TextInput, StyleSheet, Button, FlatList} from 'react-native';

import {fetchSearchCharacters} from '@state/characters';

import {View} from '@components/common';
import {useAppDispatch, useAppSelector} from '@state/hooks';
import spacing from '@constants/spacing';
import SearchResultItem from './SearchResultItem';
import {useAppNavigation} from '@navigation/hooks/useAppNavigation';

const SearchBar = () => {
  const navigation = useAppNavigation();

  const [searchQuery, setSearchQuery] = useState('');
  const dispatch = useAppDispatch();
  const searchResults = useAppSelector(state => state.characters.searchResults);

  const handleSearch = () => {
    if (searchQuery.trim().length > 0) {
      dispatch(fetchSearchCharacters(searchQuery));
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <TextInput
          style={styles.input}
          placeholder="Search characters"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        <Button title="Search" onPress={handleSearch} />
      </View>

      <FlatList
        data={searchResults}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <SearchResultItem
            character={item}
            onPress={() => navigation.navigate('Detail', {id: item.id})}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: spacing.small,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    paddingHorizontal: spacing.medium,
  },
  input: {
    flex: 1,
    height: 48,
  },
});

export default SearchBar;
