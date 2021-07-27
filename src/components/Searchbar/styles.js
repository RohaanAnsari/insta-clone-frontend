import styled from 'styled-components/macro';

export const Wrapper = styled.div`
  /* position: relative; */
`;

export const Inputs = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  & .MuiSvgIcon-root {
    font-size: 20px;
    margin-right: 5px;
  }
  input {
    border: none;
    outline: none;
    font-weight: 500;
    letter-spacing: 0.5px;

    &:focus {
      /* border: 1px solid red; */
    }
  }
`;

export const Result = styled.div`
  position: fixed;
  top: ${({ top }) => top || '4.9rem'};
  left: ${({ left }) => left || '37%'};
  width: 400px;
  min-height: max-content;
  max-height: 300px;
  background-color: #ffffff;
  margin-top: 5px;
  margin-right: 10px;
  border: 1px #8e8e8e59;
  border-style: double;

  overflow: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;

  @media (max-width: 1200px) {
    left: 33.5vw;
  }

  @media (max-width: 900px) {
    left: 32vw !important;
    width: 330px;
  }

  @media (max-width: 750px) {
    left: 26vw !important;
  }

  @media (max-width: 650px) {
    left: 21vw !important;
  }

  @media (max-width: 550px) {
    left: 26vw !important;
    width: 310px;
  }
  @media (max-width: 500px) {
    left: 14vw !important;
    width: 280px;
  }
  @media (max-width: 400px) {
    left: 18vw !important;
    width: 280px;
  }
`;

export const User = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
  padding: 10px;
  cursor: pointer;
  transition: background-color 0.1s linear;

  @media (max-width: 900px) {
    padding: 8px;
  }

  div {
    &.MuiAvatar-root {
      width: 60px;
      height: 60px;

      @media (max-width: 900px) {
        width: 40px;
        height: 40px;
      }
    }

    display: flex;
    align-items: center;

    h4 {
      margin-left: 15px;
      font-weight: 600;

      @media (max-width: 900px) {
        margin-left: 17px;
        font-weight: 600;
        font-size: 13px;
      }
    }
  }

  &:hover {
    background-color: #dcdcdc;
    h4 {
      border-bottom: 1.3px solid #000;
    }
  }
`;

export const Divider = styled.div`
  width: 100%;
  box-shadow: 0 1px 0 0 #8e8e8e35;
  height: 1px;
`;
