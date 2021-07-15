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
  /* padding: 10px 20px; */
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
`;

export const User = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
  padding: 10px;
  cursor: pointer;
  transition: background-color 0.1s linear;

  div {
    &.MuiAvatar-root {
      width: 60px;
      height: 60px;
    }

    display: flex;
    align-items: center;

    h4 {
      margin-left: 15px;
      font-weight: 600;
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
  /* margin: 5px auto; */
`;
