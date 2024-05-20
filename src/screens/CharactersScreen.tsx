import React, {useEffect} from 'react';
import {FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {fetchCharacters} from '@state/characters';

import {useAppNavigation} from '@navigation/hooks/useAppNavigation';

import CharacterCard from '@components/CharacterCard';
import {SafeAreaViewWithTabBar} from '@components/common/View';
import {AppDispatch, RootState} from '@state/store';

const CharactersScreen = () => {
  const navigation = useAppNavigation();
  const dispatch = useDispatch<AppDispatch>();
  const characters = useSelector((state: RootState) => state.characters.items);

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
