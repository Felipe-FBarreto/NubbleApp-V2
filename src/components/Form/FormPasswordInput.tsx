import React from 'react';
import {Controller, UseControllerProps, FieldValues} from 'react-hook-form';
import {IPasswordProps, PasswordInput} from '@components';

export function FormPasswordInput<FormValue extends FieldValues>({
  control,
  name,
  label,
  placeholder,
  ...passwordInput
}: IPasswordProps & UseControllerProps<FormValue>) {
  return (
    <Controller
      control={control}
      rules={{
        required: 'Senha obrigatória',
        minLength: {
          value: 8,
          message: 'Senha no minimo 8 caracteres',
        },
      }}
      name={name}
      render={({field, fieldState}) => (
        <PasswordInput
          erroMessage={fieldState.error?.message}
          value={field.value}
          onChangeText={field.onChange}
          label={label}
          placeholder={placeholder}
          {...passwordInput}
        />
      )}
    />
  );
}
