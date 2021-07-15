import { TextField } from '@material-ui/core';
import styled from 'styled-components';

export const Wrapper = styled.div`
  background: #ffffff;
  margin: auto;
  height: max-content;
  padding: 20px 30px;
  padding-bottom: 0px !important;
  width: 390px;
  border: 2px solid #dbdbdb99;
  max-width: 935px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 30px;
  /* margin-top: 16rem; */
  border-radius: 5px;
`;

export const Circle = styled.div`
  margin-top: 5px;
  margin-bottom: 1rem;
  height: 90px;
  width: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2.4px double #262626;
  border-radius: 50%;

  & .MuiSvgIcon-root {
    font-size: 50px;
  }
`;

export const Text = styled.div`
  text-align: center;
  margin-bottom: 15px;

  h3 {
    font-size: 16px;
    line-height: 24px;
    font-weight: 600;
    margin-bottom: 5px;
  }

  h5 {
    font-size: 14px;
    line-height: 18px;
    font-weight: 400;
    color: #8e8e8e;
    width: 300px;
  }
`;

export const TextInput = styled(TextField)`
  width: 90%;
  margin-bottom: 12px !important;
  border-radius: 10px;

  & .PrivateNotchedOutline-legendLabelled-3 {
    width: max-content;
  }
  & .PrivateNotchedOutline-root-1 {
    padding: 0 11px;
    border-radius: 10px;
  }
  & .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline {
    border-color: #8e8e8e;
    border-radius: 10px;
  }

  & .MuiInputBase-input {
    font-size: 14px;
    height: 9px;
    border-radius: 10px;
  }

  & .MuiOutlinedInput-root {
    border-radius: 10px;
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
  border-radius: 10px;
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

export const OR = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    font-weight: 600;
    font-size: 13px;
    line-height: 15px;
    color: #8e8e8e;
    margin-left: 20px;
    margin-right: 20px;
  }
`;

export const Divider = styled.div`
  /* background: #8e8e8e85; */
  border: 0.1px solid #8e8e8e50;
  width: 110px;
`;

export const Link = styled.div`
  margin-top: ${({ marginTop }) => marginTop || ''};
  color: #262626;
  font-size: 10px;
  font-weight: 600;
  cursor: pointer;
`;

export const LoginBtn = styled.div`
  margin-top: 8rem;
  border: 1px solid #dbdbdb;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fafafa;
  width: 388px;
  cursor: pointer;

  h1 {
    font-size: 14px;
    font-weight: 600;
  }
`;

export const Message = styled.h3`
  color: green;
  font-size: 15px;
  font-weight: 800;
  margin-bottom: 23px;
  line-height: 2;
  text-align: left;
`;

export const Error = styled.h3`
  color: red;
  font-size: 15px;
  font-weight: 800;
  margin-bottom: 23px;
  line-height: 2;
  text-align: left;
  display: ${({ display }) => display || 'block'};
`;
