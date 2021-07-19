import styled from 'styled-components/macro';

export const NewChatModalWrapper = styled.div`
  background-color: #ffffff10;
  max-height: 450px;
  height: max-content;
  width: 450px;
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const FullName = styled.h4`
  font-size: 14px;
  line-height: 18px;
  font-weight: 600;
  color: #8e8e8e;
  text-transform: capitalize;
  transition: color 0.7s linear;
`;

export const Parent = styled.div`
  width: 100%;
  height: 81px;
  background-color: #ffffff;
  border-radius: 2px;
  margin-bottom: 3.5px;
  transition: background-color 0.5s linear;
  display: flex;
  align-items: center;

  & .MuiAvatar-root {
    width: 60px;
    height: 60px;
    border-radius: 50%;
  }

  &:hover {
    background-color: #eeeeee65;
    ${FullName} {
      color: #010101;
    }
  }
`;

export const Content = styled.div`
  width: 100%;
  padding: 10px 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & .main {
    display: flex;
    align-items: center;

    span {
      margin-left: 10px;

      h3 {
        font-size: 14px;
        line-height: 18px;
        font-weight: 600;
      }
    }
  }
`;

export const Icon = styled.span`
  background-color: transparent;
  cursor: pointer;
`;
