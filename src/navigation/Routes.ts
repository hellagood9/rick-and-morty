import {
  ParamListBase,
  StackNavigationState,
  TypedNavigator,
} from '@react-navigation/native';
import {
  NativeStackNavigationEventMap,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';

export type Routes = {
  MainTabs: undefined;
  Favorites: undefined;
  Detail: {id: number};
};

export type ParentStack = TypedNavigator<
  Routes,
  StackNavigationState<ParamListBase>,
  NativeStackNavigationOptions,
  NativeStackNavigationEventMap,
  () => React.JSX.Element
>;
