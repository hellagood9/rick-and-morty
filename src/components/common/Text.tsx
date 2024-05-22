import {Text as DefaultText, TextProps} from 'react-native';
import {colors} from '@constants/colors';

export const Text = (props: TextProps) => {
  const {style, ...otherProps} = props;

  return (
    <DefaultText
      style={[{color: colors.text_primary}, style]}
      {...otherProps}
    />
  );
};
