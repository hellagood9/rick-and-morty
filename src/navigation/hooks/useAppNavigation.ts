import {NavigationProp, useNavigation} from '@react-navigation/native';
import {Routes} from '@navigation/Routes';

export const useAppNavigation = () => {
  return useNavigation<NavigationProp<Routes>>();
};
