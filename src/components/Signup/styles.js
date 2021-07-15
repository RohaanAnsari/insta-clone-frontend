import styled from 'styled-components/macro';
import { TextField } from '@material-ui/core';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  background: #ffffff;
  border: 1px solid #dbdbdb;
  max-width: 350px;
  width: 350px;
  height: max-content;
  margin: 30px 0 10px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 1.5rem;
`;

export const Logo = styled.div`
  margin: 22px auto 0px auto;
  height: 55px;
  display: block;
  img {
    height: 60px !important;
  }
`;

export const Text = styled.h2`
  text-align: center;
  font-size: 17px;
  font-weight: 600;
  margin: 0 40px 10px 40px;
  color: #8e8e8e;
  line-height: 20px;
`;

export const Divider = styled.div`
  width: 90%;
  background-color: #8e8e8e80;
  height: 1px;
  margin: 10px auto 15px auto;
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
    border-color: #0095f6;
  }

  & .MuiInputBase-input {
    font-size: 14px;
    height: 9px;
  }

  & .MuiOutlinedInput-root {
    border-radius: 3px;
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
`;

export const Button = styled.button`
  background-color: #0095f6;
  color: #ffffff;
  line-height: 18px;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 1px;
  border-radius: 3px;
  border: none;
  width: 90%;
  height: 45px;
  border: 1px solid #ffffff;
  padding: 5px 9px;
  cursor: pointer;

  &:hover,
  &:active {
    background-color: #0095f685;
  }
`;

export const BoxBottom = styled.div`
  background: #ffffff;
  border: 1px solid #dbdbdb;
  max-width: 350px;
  width: 350px;
  letter-spacing: 0.7px;
  font-size: 15px;
  padding: 10px 0;
  text-align: center;
  height: 50px;
  margin: 0 0 10px 0;
`;

export const LoginLink = styled(Link)`
  text-decoration: none;
  color: ${({ color }) => color || '#0095F6'};
  cursor: pointer;

  &:hover,
  &:focus,
  &:active {
    color: ${({ color }) => color || '#0095F6'};
  }
`;

export const Form = styled.form`
  margin: 0 auto;
  width: 100%;
  margin-left: 18px;
`;
