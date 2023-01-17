import React, { useEffect, useRef } from "react";

import * as Yup from "yup";
import { useField } from "@unform/core";

import * as S from "./styles";
import { useForm } from "@/RegistrationForm/context/FormContext";

interface InputProps extends React.HTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  className?: string;
  required?: boolean;
  autoFocus?: boolean;
  disabled?: boolean;
  validation?: any;
  fieldsetName: string;
}

export const Text: React.FC<InputProps> = ({
  name,
  label,
  className,
  required,
  autoFocus,
  validation,
  fieldsetName,
  ...rest
}) => {
  const { formRef } = useForm();
  const inputRef = useRef<HTMLInputElement>(null);

  const { registerField, fieldName, defaultValue, error, clearError } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: "value",
    });

    if (autoFocus) {
      inputRef.current?.focus();
    }
  }, [fieldName, registerField, autoFocus]);

  const validateValue = async () => {
    if (validation) {
      try {
        const schema = validation

        await schema.validate(inputRef.current?.value, { abortEarly: false });

        error && clearError()
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          err.inner.forEach((error) => {
            formRef.current?.setFieldError(`${fieldsetName}.${name}`, error.message);
          });
        }
      }
    }
  };

  return (
    <S.Container className={className}>
      <S.LabelContainer>
        {label && <S.Label htmlFor={name}>{label}</S.Label>}
        {required && <S.Required>Obrigatório</S.Required>}
      </S.LabelContainer>

      <S.Input
        onBlur={validateValue}
        id={fieldName}
        ref={inputRef}
        defaultValue={defaultValue}
        hasError={error ? true : false}
        {...rest}
      />

      {error && <S.ErrorMessage>{error}</S.ErrorMessage>}
    </S.Container>
  );
};
