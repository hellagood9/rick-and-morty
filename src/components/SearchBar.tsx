import React, {useEffect, useState} from 'react';
import {StyleSheet, FlatList, View} from 'react-native';
import {fetchCharacters, fetchSearchCharacters} from '@state/characters';
import {useAppDispatch, useAppSelector} from '@state/hooks';
import spacing from '@constants/spacing';
import SearchResultItem from './SearchResultItem';
import {useAppNavigation} from '@navigation/hooks/useAppNavigation';
import debounce from 'lodash.debounce';
import SearchInput from '@components/SearchInput';
import NoResults from '@components/NoResults';

const SearchBar = () => {
  const navigation = useAppNavigation();

  const [searchQuery, setSearchQuery] = useState('');
  const dispatch = useAppDispatch();
  const searchResults = useAppSelector(state => state.characters.searchResults);

  useEffect(() => {
    const debouncedSearch = debounce(query => {
      if (query.trim().length > 0) {
        dispatch(fetchSearchCharacters(query));
      }
    }, 300);

    if (searchQuery.trim().length === 0) {
      dispatch(fetchCharacters(1));
    } else {
      debouncedSearch(searchQuery);
    }

    return () => {
      debouncedSearch.cancel();
    };
  }, [searchQuery, dispatch]);

  const handleResetSearch = () => {
    setSearchQuery('');
    dispatch(fetchCharacters(1));
  };

  const results = searchQuery.trim().length === 0 ? [] : searchResults;
  const isSearching = searchQuery.trim().length > 0;

  return (
    <View style={[styles.container, isSearching && styles.fullHeight]}>
      <SearchInput
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        handleResetSearch={handleResetSearch}
      />

      {isSearching && results.length === 0 ? (
        <NoResults message="No results found" />
      ) : (
        <FlatList
          data={results}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <SearchResultItem
              character={item}
              onPress={() => navigation.navigate('Detail', {id: item.id})}
            />
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: spacing.small,
  },
  fullHeight: {
    height: '100%',
  },
  noResultsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noResultsText: {
    fontSize: 16,
    color: 'gray',
  },
});

export default SearchBar;
