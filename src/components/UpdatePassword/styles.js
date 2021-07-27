import { TextField } from '@material-ui/core';
import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  margin: auto;
  background-color: #c0c0c035;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: max-content;
  padding: 30px 0;
  padding-top: 7rem;
  width: 35rem;
  background: #ffffff;
  border: 3px double #dbdbdb;
  @media (max-width: 500px) {
    width: 300px;
  }
`;

export const Logo = styled.div`
  margin-top: -50px;
  margin-bottom: 1rem;
  display: block;
  img {
    height: 60px !important;
    @media (max-width: 500px) {
      /* margin: auto; */
      img {
        height: 45px !important;
      }
    }
  }
`;

export const TextInput = styled(TextField)`
  width: 90%;
  margin-bottom: 12px !important;

  & .PrivateNotchedOutline-legendLabelled-3 {
    width: max-content;
  }
  & .PrivateNotchedOutline-root-1 {
    padding: 0 11px;
  }
  & .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline {
    border-color: #8e8e8e;
  }

  & .MuiInputBase-input {
    font-size: 14px;
    height: 9px;
  }

  & .MuiOutlinedInput-root {
    border-radius: 3px;
    border-color: #8e8e8e;
  }

  & label {
    font-size: 12px;
    letter-spacing: 1px;
    color: #8e8e8e;
    background-color: #ffffff;
  }

  & label.Mui-focused {
    color: #8e8e8e;
    font-size: 13px;
  }
  & .MuiOutlinedInput-root {
    &.Mui-focused fieldset {
      border: 1px solid #8e8e8e;
    }
  }

  & .MuiOutlinedInput-notchedOutline {
    width: 100%;
  }
`;
export const Button = styled.button`
  background-color: #0095f6;
  color: #ffffff;
  line-height: 18px;
  font-size: 14px;
  font-weight: 600;
  border-radius: 7px;
  margin-top: 10px;
  border: none;
  width: 90%;
  height: 45px;
  border: 1px solid #ffffff;
  padding: 0px 9px;
  cursor: pointer;

  &:hover,
  &:active {
    background-color: #0095f685;
  }
`;

export const Message = styled.h3`
  color: green;
  font-size: 14px;
  font-weight: 600;
  margin-top: -20px;
  margin-bottom: 15px;
`;

export const Error = styled.h3`
  color: red;
  font-size: 14px;
  font-weight: 600;
  margin-top: -20px;
  margin-bottom: 15px;
  display: ${({ display }) => display || 'block'};
`;
