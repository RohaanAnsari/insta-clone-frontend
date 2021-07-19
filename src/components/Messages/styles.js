import styled from 'styled-components/macro';

export const Center = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled.div`
  height: 100%;
  width: 100%;
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
`;

export const ContainerLeft = styled.div`
  width: 350px;
  min-width: 350px;
  height: 87vh;
  border-right: 1px solid #dbdbdb;
  border-top: none;
  overflow: hidden;
`;

export const ContainerRight = styled.div`
  width: 100%;
  height: 87vh;
  overflow: hidden;
`;

export const InitialDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 85vh;
  margin-top: -3.7rem;
  flex-direction: column;

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
    }

    h5 {
      font-size: 14px;
      line-height: 18px;
      font-weight: 400;
      color: #8e8e8e;
      margin-top: 10px;
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
`;

export const Top = styled.div`
  border-bottom: 1px solid #dbdbdb;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: ${({ jc }) => jc || 'center'};

  h4 {
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
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

  & .MuiAvatar-root {
    height: 60px;
    width: 60px;
  }

  div {
    display: flex;
    align-items: center;
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

  h1 {
    font-weight: 16px;
    font-weight: 600;
    line-height: 24px;
    margin-left: 10px;
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
