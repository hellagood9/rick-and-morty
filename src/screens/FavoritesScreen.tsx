import React, {useEffect} from 'react';
import {FlatList} from 'react-native';

import {useAppDispatch, useAppSelector} from '@state/hooks';
import {loadFavorites, removeFavorite} from '../state/favorites/favoritesSlice';

import {SafeAreaViewWithTabBar, Text, View} from '@components/common';
import FavoriteItem from '@components/FavoriteItem';
import NoResults from '@components/NoResults';

import {globalStyles} from '@styles/global';

const FavoritesScreen = () => {
  const dispatch = useAppDispatch();
  const favorites = useAppSelector(state => state.favorites.items);

  useEffect(() => {
    dispatch(loadFavorites());
  }, [dispatch]);

  const handleRemoveFavorite = (id: number) => {
    dispatch(removeFavorite(id));
  };

  if (!favorites.length) {
    return <NoResults message="No favorites yet" />;
  }

  return (
    <SafeAreaViewWithTabBar>
      <View style={globalStyles.screenContainer}>
        <Text style={globalStyles.sectionTitle}>Your Favorites</Text>

        <FlatList
          data={favorites}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <FavoriteItem
              character={item}
              onRemove={() => handleRemoveFavorite(item.id)}
            />
          )}
        />
      </View>
    </SafeAreaViewWithTabBar>
  );
};

export default FavoritesScreen;
