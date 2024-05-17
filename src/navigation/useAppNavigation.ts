import {NavigationProp, useNavigation} from '@react-navigation/native';
import {AppNavigationRoutes} from '@navigation/appNavigationRoutes';

export const useAppNavigation = () => {
  return useNavigation<NavigationProp<AppNavigationRoutes>>();
};
