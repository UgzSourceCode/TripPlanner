import styled from 'styled-components'

const ButtonPrimary = styled.button`
  padding: 10px 18px 10px 18px;
  width: 105px;
  height: 34px;
  background-color: #F53314;
  border: 0;
  border-radius: 6px;
  color: #fff;
  cursor: pointer;
  left: calc(50% - 105px/2);
  top: calc(50% - 34px/2 + 54px);
  
  &:hover {
    background: #F75D45;
  }
  &:disabled {
    background: #D1D1D1;
    color: #ADADAD;
  }
  &:active {
    background: #F98876;
  }
  &:focus {
    border: 2px solid #FBB2A7;
    padding: 0;
  }
`
export default ButtonPrimary;