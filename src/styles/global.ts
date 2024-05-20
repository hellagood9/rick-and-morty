import {StyleSheet} from 'react-native';
import fontWeights from '@constants/fontWeights';
import fonts from '@constants/fonts';
import spacing from '@constants/spacing';

export const globalStyles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    paddingHorizontal: spacing.medium,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sectionTitle: {
    fontSize: fonts.size.title,
    fontWeight: fontWeights.semiBold,
    fontFamily: fonts.family.kodeMonoSemiBold,
  },
});
