import styled from 'styled-components';

export const StyledInputWrapper = styled.div`
 width: 90%;
 display: flex;
 flex-direction: column;
`;

export const StyledInput = styled.input`
  width: 90%;
  height: 36px;
  border: ${(props) =>
    props.withError ? '1px solid #F53314' : '1px solid #272727'};
  border-radius: 6px;
  padding-left: 5.2%;

  &:disabled {
    border: 1px solid #d1d1d1;
  }
  &::placeholder {
    color: #d1d1d1;
  }
`;

export const StyledLabel = styled.label`
  font-size: 10px;
  margin-bottom: 2%;
  ${(props) => {
    if (props.withError) {
      return `color: #9C1B07`;
    }
    if (props.disabled) {
      return `color: #D1D1D1`;
    }
    return `color: black`;
  }}
`;

export const StyledErrorMessage = styled.div`
  width: 100%;
  color: #9c1b07;
  font-size: 10px;
`;
