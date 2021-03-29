import React, { useState } from 'react';
import {
  StyledInput,
  StyledInputWrapper,
  StyledLabel,
  StyledErrorMessage,
} from './Input.styled';

interface Props {
  disabled: boolean;
  label: string;
  withError: boolean;
  placeholder: string;
  errorMessage: string;
}

const Input = ({
  disabled,
  label,
  withError,
  placeholder,
  errorMessage,
}: Props) => {
  const [inputValue, setInputValue] = useState<string>('');
  const handleInputChange = (e: { target: { value: string } }) => {
    setInputValue(e.target.value);
  };

  return (
    <StyledInputWrapper>
      <StyledLabel
        disabled={disabled}
        htmlFor={placeholder}
        withError={withError}
      >
        {label}
      </StyledLabel>
      <StyledInput
        placeholder={placeholder}
        id={placeholder}
        disabled={disabled}
        withError={withError}
        value={inputValue}
        onChange={handleInputChange}
      />
      {withError && <StyledErrorMessage>{errorMessage}</StyledErrorMessage>}
    </StyledInputWrapper>
  );
};

export default Input;
