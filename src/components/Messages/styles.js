import styled from 'styled-components/macro';

export const Center = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 1000px) {
    padding-top: 0.2rem;
  }

  @media (max-width: 870px) {
    padding-top: 5rem;
  }
  @media (max-width: 550px) {
    padding-top: 7rem;
  }

  @media (max-width: 550px) {
    padding-top: 7rem;
  }

  @media (max-width: 450px) {
    padding-top: 7rem;
  }

  @media (max-width: 390px) {
    padding-top: 8rem !important;
  }
`;

export const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  max-width: 975px;

  background-color: white;
  overflow: hidden;
  min-height: 85vh;
  max-height: 100vh;
  overflow: scroll;
  border: 1px solid #dbdbdb;
  display: flex;

  &::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none;

  @media (max-width: 580px) {
    min-height: 92vh;
  }

  @media (max-width: 550px) {
    min-height: 89vh;
    margin-top: -1.5rem;
  }

  @media (max-width: 450px) {
    min-height: 100vh;
    width: 48rem;
  }

  @media (max-width: 405px) {
    min-height: 111vh;
  }
`;

export const ContainerLeft = styled.div`
  width: 350px;
  min-width: 350px;
  height: 87vh;
  border-right: 1px solid #dbdbdb;
  border-top: none;
  overflow: hidden;

  @media (max-width: 1000px) {
    display: none;
  }
  @media (max-width: 550px) {
    min-width: 200px;
  }

  @media (max-width: 500px) {
    height: 88vh;
  }
`;

export const ContainerRight = styled.div`
  width: 100%;
  height: 87vh;
  overflow: hidden;
  /* background-color: red; */
  @media (max-width: 450px) {
    min-height: 100vh;
    width: 48rem;
  }

  @media (max-width: 405px) {
    min-height: 111vh;
  }
`;

export const InitialDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 85vh;
  margin-top: -3.7rem;
  flex-direction: column;

  @media (max-width: 450px) {
    min-height: 95vh;
  }

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    h2 {
      font-size: 22px;
      font-weight: 300;
      line-height: 26px;
      margin-top: 15px;
      letter-spacing: 1px;

      @media (max-width: 900px) {
        font-size: 19px;
      }
    }

    h5 {
      font-size: 14px;
      line-height: 18px;
      font-weight: 400;
      color: #8e8e8e;
      margin-top: 10px;
      @media (max-width: 900px) {
        font-size: 12px;
      }
    }

    button {
      padding: 5px 11px;
      margin-top: 10px;
      min-height: 30px;
      max-height: max-content;
      background-color: #0095f6;
      border: 1px solid #ffffff !important;
      color: #ffffff;
      border-radius: 5px;
      cursor: pointer;
      font-size: 14px;
      font-weight: 700;

      &:hover,
      &:focus,
      &:active {
        border: 1px solid #ffffff !important;
        background-color: #0095f6;
        color: #ffffff;
        border-radius: 5px;
      }
    }
  }
`;

export const Circle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  border: 2px solid #262626;
  border-radius: 50%;
  div {
    margin-top: 7px;
  }
  @media (max-width: 950px) {
    width: 90px;
    height: 90px;
  }
`;

export const Top = styled.div`
  border-bottom: 1px solid #dbdbdb;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: ${({ jc }) => jc || 'center'};

  @media (max-width: 900px) {
    height: 60px;
  }

  h4 {
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
    @media (max-width: 950px) {
      font-size: 14px;
      line-height: 22px;
    }
  }
  span {
    margin-left: 5px;
    margin-top: 3px;
    & .MuiSvgIcon-root {
      font-size: 25px;
      font-weight: 600;
    }
  }
`;

export const ChatSection = styled.div`
  height: max-content;
  max-height: 79vh;
  overflow: scroll !important;
  border-bottom: none;

  &::-webkit-scrollbar {
    width: 8px;
    padding: 8px;
  }
  &::-webkit-scrollbar-track {
    background: #ffffff;
  }
  &::-webkit-scrollbar-thumb {
    background: #dbdbdb;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #55555560;
  }
`;

export const Chat = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: background-color 0.3s linear;
  cursor: pointer;

  @media (max-width: 600px) {
    & .MuiAvatar-root {
      height: 50px !important;
      width: 50px !important;
    }
  }

  & .MuiAvatar-root {
    height: 60px;
    width: 60px;
  }

  div {
    display: flex;
    align-items: center;

    @media (max-width: 600px) {
      span {
        margin-left: 9px !important;
        /* margin-top: 5px; */
      }
    }
    span {
      margin-left: 15px;

      h3 {
        font-size: 14px;
        font-weight: 600;
        line-height: 18px;
      }
    }
  }

  &:hover {
    background-color: #dbdbdb85;
  }
`;

export const NewMessage = styled.h4`
  font-size: 14px;
  font-weight: 600;
  line-height: 18px;
  text-align: center;
  color: ${({ color }) => color || '#262626'};
  @media (max-width: 900px) {
    width: 85%;
    font-size: 12px;
  }
  @media (max-width: 900px) {
    width: 100%;
    font-size: 12px;
  }
`;

export const Dot = styled.span`
  background: #0095f6;
  height: 8px;
  width: 8px;
  border-radius: 50%;
`;

export const ChatArea = styled.section`
  width: 100%;
  height: max-content;
  min-height: 87vh;
  position: relative;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
`;

export const Header = styled.div`
  border-bottom: 1px solid #dbdbdb;
  height: 80px;
  padding: 5px 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 450px) {
    height: 60px;
  }

  div {
    display: flex;
    align-items: center;
    h1 {
      font-weight: 16px;
      font-weight: 600;
      line-height: 24px;
      margin-left: 10px;
      cursor: pointer;

      &:hover {
        border-bottom: 1px solid darkgray;
      }
    }
  }

  span {
    display: flex;
    align-items: center;

    cursor: pointer;
    & .MuiSvgIcon-root {
      font-size: 24px;
      /* fill: red; */
    }
  }
`;

export const Main = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
`;

export const Upper = styled.div`
  height: 100%;
  max-height: 75vh;
  width: 100%;
  flex-grow: 1;
  overflow: scroll !important;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: ${({ alignItems }) => alignItems || 'flex-end'};
  /* padding: 0px 10px; */
  padding-left: 10px;

  padding-bottom: 5.5rem;

  @media (max-width: 450px) {
    max-height: 91vh;
  }
  @media (max-width: 450px) {
    max-height: 102vh;
  }

  & .scroll {
    width: 100%;
    padding-right: 10px;
    &::-webkit-scrollbar {
      width: 4.5px;
      /* padding: 8px; */
    }
    &::-webkit-scrollbar-track {
      background: #ffffff;
    }
    &::-webkit-scrollbar-thumb {
      background: #dbdbdb;
      border-radius: 25%;
    }
    &::-webkit-scrollbar-thumb:hover {
      background: #55555550;
    }
  }

  &::-webkit-scrollbar {
    width: 0px;
    /* padding: 8px; */
  }
  &::-webkit-scrollbar-track {
    background: #ffffff;
  }
  &::-webkit-scrollbar-thumb {
    background: #dbdbdb;
    border-radius: 25%;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #55555550;
  }
`;

export const Bottom = styled.div`
  background-color: white;
  width: 100%;
  padding: 5px 15px;
  height: max-content;
  position: absolute;
  left: 0;
  bottom: 10px;
  & .container {
    display: flex;
    border: 1px solid #dbdbdb;
    padding: 8px 11px;
    border-radius: 40px;

    & .form {
      width: 100%;
      display: flex;
      align-items: center;
      input {
        width: 80%;
        border: none;
        font-size: 14px;
        padding-left: 10px;
        outline: none;

        &:active,
        &:hover,
        &:focus,
        &:focus-within {
          border: none;
          font-size: 14px;
          padding-left: 10px;
          outline: none;
        }
      }
    }
  }
`;

export const Icon = styled.div`
  cursor: pointer;
  margin-left: ${({ ml }) => ml || '0px'};
  margin-right: ${({ mr }) => mr || '0px'};
`;

export const Message = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${({ align }) => align || 'flex-start'};
  width: 100%;
  /* cursor: pointer !important; */
  p {
    display: flex;
    align-items: center;
    justify-content: center;
    width: max-content;
    max-width: 230px;
    min-width: auto;
    min-height: auto;
    font-size: 14px;
    line-height: 18px;
    font-weight: normal;
    padding: 10px 25px;
    border-radius: 3rem;
    margin: 5px 0;
    color: ${({ color }) => color || '#262626'};
    word-wrap: break-word;
    overflow-wrap: break-word;
    word-wrap: break-word;
    hyphens: auto;
  }
  span {
    color: #8e8e8e;
    margin-left: 15px;
    margin-right: 15px;
    margin-bottom: 10px;
    margin-top: -1px;
    font-size: 9px;
  }
`;

export const Button = styled.button`
  background: transparent;
  border: none;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  & .MuiSvgIcon-root {
    font-size: 22px;
  }
`;

export const Delete = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 7px;
  transition: background-color 0.5s linear;
  cursor: pointer;

  &:hover {
    /* background-color: #ff4c4c; */

    p {
      color: #ed4956;
    }

    span {
      & .MuiSvgIcon-root {
        fill: #ed4956;
      }
    }
  }

  p {
    color: #000000;
    font-size: 14px;
    font-weight: 600;
    line-height: 18px;
    transition: color 0.5s linear;
  }

  span {
    & .MuiSvgIcon-root {
      margin-top: 2px;
      font-size: 16px;
      fill: #000000;
      transition: fill 0.5s linear;
    }
  }
`;
