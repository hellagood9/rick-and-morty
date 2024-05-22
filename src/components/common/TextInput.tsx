import React, {forwardRef} from 'react';
import {TextInput as DefaultTextInput, TextInputProps} from 'react-native';
import {colors} from '@constants/colors';

export const TextInput = forwardRef<DefaultTextInput, TextInputProps>(
  (props, ref) => {
    const {style, ...otherProps} = props;

    const computedStyle = [
      {
        backgroundColor: colors.input_BackgroundColor,
        borderColor: colors.input_BorderColor,
        color: colors.text_primary,
      },
      style,
    ];

    return (
      <DefaultTextInput
        ref={ref}
        style={computedStyle}
        {...otherProps}
        placeholderTextColor={colors.input_placeholderTextColor}
      />
    );
  },
);
