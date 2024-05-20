import React, {useEffect} from 'react';
import {ActivityIndicator} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Routes} from '@navigation/Routes';
import {fetchCharacterById} from '@state/characters';
import {globalStyles} from '@styles/global';
import CharacterDetail from '@components/CharacterDetail';

import {View, Text} from '@components/common';
import ScreenContainer from '@components/ScreenContainer';
import {useAppDispatch, useAppSelector} from '@state/hooks';

type Props = NativeStackScreenProps<Routes, 'Detail'>;

const DetailScreen = ({route}: Props) => {
  const {id} = route.params;

  const dispatch = useAppDispatch();
  const character = useAppSelector(state => state.characters.selectedCharacter);
  const episodes = useAppSelector(state => state.characters.episodes);
  const status = useAppSelector(state => state.characters.status);
  const error = useAppSelector(state => state.characters.error);

  useEffect(() => {
    if (id) {
      dispatch(fetchCharacterById(id));
    }
  }, [dispatch, id]);

  useEffect(() => {
    if (error) {
      console.error('Error:', error);
    }
  }, [status, character, error]);

  if (status === 'loading') {
    return <ActivityIndicator size="large" />;
  }

  if (!character) {
    return (
      <View>
        <Text>No character found</Text>
      </View>
    );
  }

  return (
    <ScreenContainer>
      <View style={globalStyles.screenContainer}>
        <CharacterDetail character={character} episodes={episodes} />
      </View>
    </ScreenContainer>
  );
};

export default DetailScreen;
