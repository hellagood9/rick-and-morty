import React, {useEffect} from 'react';
import {FlatList} from 'react-native';

import {fetchCharacters} from '@state/characters';

import {useAppNavigation} from '@navigation/hooks/useAppNavigation';

import {useAppDispatch, useAppSelector} from '@state/hooks';

import CharacterCard from '@components/CharacterCard';
import {SafeAreaViewWithTabBar} from '@components/common/View';

const CharactersScreen = () => {
  const navigation = useAppNavigation();
  const dispatch = useAppDispatch();
  const characters = useAppSelector(state => state.characters.items);

  useEffect(() => {
    dispatch(fetchCharacters());
  }, [dispatch]);

  return (
    <SafeAreaViewWithTabBar>
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
      />
    </SafeAreaViewWithTabBar>
  );
};

export default CharactersScreen;
