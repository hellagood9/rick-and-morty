import {useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addFavorite, removeFavorite} from '../state/favorites/favoritesSlice';
import {Character} from '@models/Character';
import {RootState} from '../state/store';

const useFavorite = (character: Character) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state: RootState) => state.favorites.items);
  const isFavorite = favorites.some(favorite => favorite.id === character.id);

  const handleAddFavorite = useCallback(() => {
    dispatch(addFavorite(character));
  }, [dispatch, character]);

  const handleRemoveFavorite = useCallback(() => {
    dispatch(removeFavorite(character.id));
  }, [dispatch, character.id]);

  return {
    isFavorite,
    handleAddFavorite,
    handleRemoveFavorite,
  };
};

export default useFavorite;
