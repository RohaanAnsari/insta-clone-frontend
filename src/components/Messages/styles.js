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
  min-height: 90vh;
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
  height: 90vh;
  border: 1px solid #dbdbdb;
`;

export const ContainerRight = styled.div`
  width: 100%;
  height: 90vh;
  border: 1px solid #dbdbdb;
`;

export const InitialDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
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
  justify-content: center;

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
    background-color: #dbdbdb50;
  }
`;

export const NewMessage = styled.h4`
  font-size: 14px;
  font-weight: 600;
  line-height: 18px;
  color: ${({ color }) => color || '#262626'};
`;

export const Dot = styled.span`
  background: #0095f6;
  height: 8px;
  width: 8px;
  border-radius: 50%;
`;
