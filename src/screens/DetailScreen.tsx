import React, {useEffect} from 'react';
import {ActivityIndicator, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Routes} from '@navigation/Routes';
import {fetchCharacterById} from '@state/characters';
import {AppDispatch, RootState} from '@state/store';
import {globalStyles} from '@styles/global';
import CharacterDetail from '@components/CharacterDetail';

import {View, Text, SafeAreaView} from '@components/common';

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
    <SafeAreaView style={styles.container}>
      <View style={globalStyles.screenContainer}>
        <CharacterDetail character={character} episodes={episodes} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default DetailScreen;
