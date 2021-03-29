import React from 'react';
import Input from '../Input/Input';
import { StyledForm } from './Form.styled';

const Form = () => (
  <StyledForm>
    <Input
      label="name"
      placeholder="name"
      withError={false}
      disabled={true}
      errorMessage=""
    />
    <Input
      label="surname"
      placeholder="surname"
      withError={false}
      disabled={false}
      errorMessage=""
    />
    <Input
      label="e-mail"
      placeholder="e-mail"
      disabled={false}
      withError={true}
      errorMessage="enter proper e-mail address"
    />
  </StyledForm>
);

export default Form;
