import React from 'react';
import {Controller, FieldValues, UseControllerProps} from 'react-hook-form';
import {TextInput, TextInputProps} from '../TextInput/TextInput';

export function FormTextInput<FormValeu extends FieldValues>({
  control,
  rules,
  name,
  ...textInputProps
}: TextInputProps & UseControllerProps<FormValeu>) {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({field, fieldState}) => (
        <TextInput
          erroMessage={fieldState.error?.message}
          value={field.value}
          onChangeText={field.onChange}
          {...textInputProps}
        />
      )}
    />
  );
}
