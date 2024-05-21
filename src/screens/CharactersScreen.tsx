import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList} from 'react-native';

import {fetchCharacters} from '@state/characters';

import {useAppNavigation} from '@navigation/hooks/useAppNavigation';

import {useAppDispatch, useAppSelector} from '@state/hooks';

import CharacterCard from '@components/CharacterCard';
import {SafeAreaViewWithTabBar, View} from '@components/common/View';
import spacing from '@constants/spacing';
import SearchBar from '@components/SearchBar';

const CharactersScreen = () => {
  const navigation = useAppNavigation();
  const dispatch = useAppDispatch();

  const characters = useAppSelector(state => state.characters.items);
  const info = useAppSelector(state => state.characters.info);
  const status = useAppSelector(state => state.characters.status);

  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(fetchCharacters(page));
  }, [dispatch, page]);

  const loadMore = () => {
    if (info.next && status !== 'loading') {
      setPage(prevPage => prevPage + 1);
    }
  };

  const renderFooter = () => {
    if (status === 'loading') {
      return (
        <View style={{padding: spacing.medium}}>
          <ActivityIndicator size="large" />
        </View>
      );
    }
    return null;
  };

  return (
    <SafeAreaViewWithTabBar>
      <SearchBar />

      <FlatList
        data={characters}
        keyExtractor={item => item.id.toString()}
        numColumns={2}
        renderItem={({item}) => (
          <CharacterCard
            character={item}
            onPress={() => navigation.navigate('Detail', {id: item.id})}
          />
        )}
        onEndReached={loadMore}
        onEndReachedThreshold={0.5}
        ListFooterComponent={renderFooter}
      />
    </SafeAreaViewWithTabBar>
  );
};

export default CharactersScreen;
