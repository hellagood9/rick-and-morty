import React, {useEffect} from 'react';
import {ActivityIndicator} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Routes} from '@navigation/Routes';
import {fetchCharacterById} from '@state/characters';
import {AppDispatch, RootState} from '@state/store';
import {globalStyles} from '@styles/global';
import CharacterDetail from '@components/CharacterDetail';

import {View, Text} from '@components/common';
import ScreenContainer from '@components/ScreenContainer';

type Props = NativeStackScreenProps<Routes, 'Detail'>;

const DetailScreen = ({route}: Props) => {
  const {id} = route.params;
  const dispatch = useDispatch<AppDispatch>();
  const character = useSelector(
    (state: RootState) => state.characters.selectedCharacter,
  );
  const episodes = useSelector((state: RootState) => state.characters.episodes);
  const status = useSelector((state: RootState) => state.characters.status);
  const error = useSelector((state: RootState) => state.characters.error);

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
