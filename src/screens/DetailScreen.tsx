import React, {useEffect} from 'react';
import {ActivityIndicator} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {useAppDispatch, useAppSelector} from '@state/hooks';
import {fetchCharacterById} from '@state/characters';

import {Routes} from '@navigation/Routes';

import CharacterDetail from '@components/CharacterDetail';
import {View} from '@components/common';
import ScreenContainer from '@components/ScreenContainer';
import FavoriteButton from '@components/FavoriteButton';
import NoResults from '@components/NoResults';

import {globalStyles} from '@styles/global';

type Props = NativeStackScreenProps<Routes, 'Detail'>;

const DetailScreen = ({route}: Props) => {
  const {id: characterId} = route.params;

  const dispatch = useAppDispatch();
  const character = useAppSelector(state => state.characters.selectedCharacter);
  const episodes = useAppSelector(state => state.characters.episodes);

  const status = useAppSelector(state => state.characters.status);
  const error = useAppSelector(state => state.characters.error);

  useEffect(() => {
    if (characterId) {
      dispatch(fetchCharacterById(characterId));
    }
  }, [dispatch, characterId]);

  useEffect(() => {
    if (error) {
      console.error('Error:', error);
    }
  }, [status, character, error]);

  if (status === 'loading') {
    return <ActivityIndicator size="large" />;
  }

  if (!character) {
    return <NoResults message="No character found" />;
  }

  return (
    <ScreenContainer>
      <View style={globalStyles.screenContainer}>
        <FavoriteButton character={character} />
        <CharacterDetail character={character} episodes={episodes} />
      </View>
    </ScreenContainer>
  );
};

export default DetailScreen;
