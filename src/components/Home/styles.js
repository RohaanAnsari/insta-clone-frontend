import styled from 'styled-components/macro';
import { TextField } from '@material-ui/core';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  height: 100%;
  background-color: transparent;
  display: flex;
  position: relative;
  overflow-y: scroll;
  position: relative;

  @media (max-width: 1000px) {
    display: flex;
    justify-content: center;
    padding-top: 0.5rem;
  }
  @media (max-width: 870px) {
    padding-top: 5.5rem;
  }

  &::-webkit-scrollbar {
    width: 8px;
    border-radius: 5px;
    display: none;
  }
  &::-webkit-scrollbar-track {
    background: #fefefe;
  }
  &::-webkit-scrollbar-thumb {
    background: #55555550;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

export const ContentLeft = styled.div`
  height: 100%;
  width: 614px;
  max-width: 614px;
  margin-right: 30px;
  padding-bottom: 10px !important;
  display: flex;
  flex-direction: column;
  @media (max-width: 1000px) {
    margin-right: 0;
  }
  @media (max-width: 500px) {
    max-width: 50rem;
  }
`;

export const ContentRight = styled.section`
  height: 100%;
  width: 285px;
  max-width: 285px;
  position: sticky;

  /* border: 1px solid black; */
  @media (max-width: 1000px) {
    display: none;
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 4px;
    & .MuiAvatar-root {
      width: 64px;
      height: 64px;
    }
    div {
      display: flex;
      align-items: center;

      span {
        display: flex;
        flex-direction: column;
        margin-left: 15px;
        h4 {
          font-size: 14px;
          font-weight: 600;
          color: #262626;
        }
        p {
          color: #8e8e8e;
          font-size: 14px;
          font-weight: 400;
        }
      }
    }

    button {
      background: transparent;
      border: none;
      font-size: 14.9px;
      font-weight: 800;
      line-height: 14px;
      color: #0095f6;
      cursor: pointer;
      letter-spacing: 0.6px;
      font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
        'Lucida Sans', Arial, sans-serif;

      &:active,
      &:focus,
      &:visited {
        border: none;
      }
    }
  }

  section {
    padding: 10px 4px;
    div {
      display: flex;
      justify-content: space-between;
      h3 {
        font-size: 14px;
        font-weight: 600;
        line-height: 18px;
        color: #8e8e8e;
      }
      p {
        font-size: 14px;
        font-weight: 600;
        line-height: 14px;
        margin-right: 3px;
      }
    }
  }
`;

export const SuggestionsContainer = styled.div`
  overflow-y: scroll;
  height: max-content;
  max-height: 300px;
  &::-webkit-scrollbar {
    width: 8px;
    border-radius: 5px;
    display: none;
  }
  &::-webkit-scrollbar-track {
    background: #fefefe;
  }
  &::-webkit-scrollbar-thumb {
    background: #55555550;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

export const Suggestions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 6px;
  max-height: 200px;
  & .MuiAvatar-root {
    width: 42px;
    height: 42px;
  }
  div {
    display: flex;
    align-items: center;
    h4 {
      font-size: 14px;
      font-weight: 600;
      line-height: 20px;
      color: #262626;
      margin-left: 15px;
      &:hover {
        border-bottom: 1px solid #000000;
        cursor: pointer;
      }
    }
  }

  button {
    border: none;
    background: transparent;
    font-size: 13px;
    font-weight: 600;
    line-height: 14px;
    color: #0095f6;
    cursor: pointer;
    letter-spacing: 1px;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
      'Lucida Sans', Arial, sans-serif;

    &:active,
    &:focus,
    &:visited {
      border: none;
    }
  }
`;

export const Post = styled.div`
  width: 100%;
  background: #ffffff;
  height: max-content;
  margin-bottom: 25px;
  border: 1px solid #dbdbdb;
  /* border: 1px solid black; */
  header {
    display: flex;
    justify-content: space-between;
    padding: 8px 10px 7px;
    display: flex;
    align-items: center;

    & .MuiAvatar-root {
      width: 45px;
      height: 45px;
    }
    div {
      display: flex;
      align-items: center;
    }
  }
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  align-items: flex-start !important;

  p {
    margin-top: 5px;
    font-size: 13px;
    font-weight: 400;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    letter-spacing: 1px;
  }
`;

export const PostedBy = styled(Link)`
  font-size: 14px;
  font-weight: 600;
  line-height: 18px;
  color: #262626;
  letter-spacing: 0.3px;
  text-decoration: none;

  &:hover,
  &:focus,
  &:active,
  &:visited {
    color: #262626;
    border-bottom: 1px solid #262626;
  }
`;

export const Icon = styled.div`
  & .MuiSvgIcon-root {
    font-size: 20px;
    cursor: pointer;
  }
`;

export const Img = styled.div`
  height: 400px;
  max-height: 500px;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;

export const Caption = styled.div`
  display: flex;
  align-items: center;
  margin: 5px auto;
  div {
    font-size: 15px;
    font-weight: 700;
    padding: 5px 10px;
    margin-left: 5px;
    cursor: pointer;
    position: relative;

    &:after {
      content: '';
      display: inline-block;
      background: black;
      width: 90%;
      border: 1px solid black;
      position: absolute;
      top: 23px;
      left: 4px;
      opacity: 0;
      transform: scaleX(0);
      transition: 0.2s;
    }

    &:hover:after {
      opacity: 1;
      transform: scaleX(1);
    }
  }
  span {
    font-size: 15px;
    margin-left: 5px;
  }
`;

export const Buttons = styled.section`
  height: 40px;
  /* background: lightpink; */
  display: flex;
  justify-content: space-between;
  padding: 5px 15px;
`;

export const BtnsLeft = styled.div`
  display: flex;
  align-items: center;
`;

export const BtnsRight = styled.div`
  display: flex;
  align-items: center;
`;

export const Button = styled.button`
  width: 24px;
  height: 24px;
  margin-right: ${({ marginRight }) => marginRight || `20px`};
  border: none;
  background: transparent;
  cursor: pointer;
  & .MuiSvgIcon-root {
    font-size: 25px;
  }
`;

export const CommentSection = styled.div`
  margin-top: 5px;
  height: 40px;
  width: 100%;
  border-top: 1px solid #dbdbdb95;
  padding: 20px 20px;
  display: flex;
  align-items: center;
  overflow: hidden;
  /* justify-content: space-around; */
  form {
    width: 100%;
  }

  input {
    width: 47rem;
    height: 35px;
    border: none;
    font-size: 14px;
    padding: 0 10px;
    word-wrap: break-word;
    overflow-wrap: break-word;
    word-wrap: break-word;
    hyphens: auto;

    &:focus-visible {
      border: none;
      outline: none;
    }
    &:active,
    &:focus {
      border: none;
    }
  }
`;

export const PostBtn = styled.button`
  background: transparent;
  border: none;
  font-size: 14px;
  text-decoration: none;
  color: ${({ color }) => color || '#0095F6'};
  cursor: pointer;

  &:hover,
  &:focus,
  &:active {
    color: ${({ color }) => color || '#0095F6'};
  }
`;

export const AddModalButton = styled.button`
  border: 1px solid #dbdbdb;
  padding: 8px 15px;
  margin-left: 5px;
  margin-top: 15px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  color: #ffffff;
  border-radius: 5px;
  background-color: #0095f6;

  &:hover,
  &:active {
    color: #ffffff;
    background-color: #0095f675;
  }
`;

export const ModalContainer = styled.div`
  margin: 0 auto;
  margin-top: 10rem;
  height: max-content;
  width: 55%;
  max-width: 935px;
  background: #f8f8ff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 4rem;
  padding-top: 4rem;

  h1 {
    color: #8e8e8e;
    text-align: center;
    font-weight: 600;
    margin-bottom: 2rem;
    border-bottom: 1.87px dashed #8e8e8e;
  }

  button {
    border: none;
    text-decoration: none;
    padding: 8px 15px;
    border-radius: 5px;
    margin-top: 1rem;
    font-size: 17px;
    letter-spacing: 1.6px;
    background: #0095f6;
    color: ${({ color }) => color || '#FFFFFF'};
    cursor: pointer;

    &:hover,
    &:focus,
    &:active {
      border: none;
      text-decoration: none;
    }
  }
`;

export const TextInput = styled(TextField)`
  width: 90%;
  margin-bottom: 2rem !important;

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
    font-size: 16px;
    height: 9px;
    font-weight: 500;
    letter-spacing: 1px;
    padding-bottom: 12px;
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

export const UploadImage = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  border: 1.8px dashed #8e8e8e;
  width: 90%;
  margin: 10px auto;
  padding: 20px 0;

  input {
    margin-left: 20px;
  }
`;

export const LikesNumber = styled.h4`
  display: block;
  color: #262626;
  font-size: 14px;
  font-weight: 600px;
  margin-left: 2rem;
`;

export const CommentDetails = styled.div`
  margin: 5px 20px;
  display: block;
  max-height: 10rem;
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }

  & .scrollable-div {
    &::-webkit-scrollbar {
      display: none;
    }
  }

  -ms-overflow-style: none;
  scrollbar-width: none;

  p {
    color: #8e8e8e;
    cursor: pointer;
    display: inline-block;
    margin-bottom: 5px;
    font-size: 12px;
    position: sticky;
  }
`;

export const Comment = styled.div`
  color: #262626 !important;
  display: flex;
  justify-content: space-between;
  align-items: center;
  &::-webkit-scrollbar {
    display: none;
  }

  div {
    display: flex;

    & .postedBy {
      font-weight: bold;
      min-width: max-content;
      margin-right: 8px;
    }

    & .timeAgo {
      min-width: 1rem;
    }

    p {
      font-size: 12px;
      color: #262626;
      word-wrap: break-word;
      overflow-wrap: break-word;
      word-wrap: break-word;
      hyphens: auto;
      max-width: 36rem;
    }
  }

  span {
    color: #8e8e8e;
    font-size: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    p {
      color: ${({ color }) => color || '#8e8e8e'};
      font-size: 10px;
      margin-left: 4px;
    }
  }
`;

export const ViewComments = styled.p`
  color: #8e8e8e;
  cursor: pointer;
  display: inline-block;
  margin-bottom: 5px;
  font-size: 12px;
  margin: 3px auto;
  margin-left: 21px;
`;
