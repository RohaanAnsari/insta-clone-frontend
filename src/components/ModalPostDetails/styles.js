import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: auto 10px;
  max-height: 900px;
  height: 650px;
  width: 878px;
  display: flex;
  justify-content: center;
  background: black;
  width: 100rem;
  cursor: pointer;

  @media (max-width: 1030px) {
    height: 610px;
    width: 800px;
  }

  @media (max-width: 830px) {
    height: 610px;
    width: 100%;
  }

  @media (max-width: 500px) {
    height: 610px;
    width: 480px;
  }
`;

export const LeftContainer = styled.div`
  width: 65%;

  @media (max-width: 500px) {
    width: 65%;
  }

  div {
    height: 100%;
    width: 100%;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      background-position: center !important;
    }
  }
`;

export const RightContainer = styled.div`
  background: #ffffff;
  width: 35%;

  @media (max-width: 500px) {
    width: 65%;
  }

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 15px;

    span {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    h3 {
      margin-left: 10px;
      cursor: pointer;
      font-size: 14px;
      font-weight: 700;
      letter-spacing: 1px;

      &:hover {
        border-bottom: 1.8px solid #262626;
      }
    }
  }
`;

export const Divider = styled.div`
  width: 100%;
  box-shadow: 0 1px 0 0 #8e8e8e35;
  height: 1px;
  margin: 1px auto;
`;

export const Caption = styled.div`
  font-size: 12.8px;
  font-weight: 500;
  width: 100%;
  display: inline-block;
  overflow: hidden;
  align-items: center;
  /* background: red; */
  word-wrap: break-word;
  overflow-wrap: break-word;
  word-wrap: break-word;
  hyphens: auto;
  letter-spacing: 0.5px;
  /* margin-top: 5px; */
  text-align: left;
  margin-left: 10px;
`;

export const Comment = styled.div`
  height: 37rem;
  display: flex;
  flex-direction: column;
  overflow: scroll;
  background: #ffffff;

  &::-webkit-scrollbar {
    display: none;
  }

  section {
    padding: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    div {
      display: flex;
      align-items: center;

      & .userDetails {
        color: black;
        margin-left: 5px;
        font-weight: 700;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        max-width: 210px;
        h3 {
          margin-left: 5px;
        }
        h4 {
          margin-left: 5px;
          font-weight: 400;
        }
      }
    }

    span {
      color: #8e8e8e;
    }
  }
`;

export const Icons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  div {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  span {
    display: flex;
    align-items: center;
  }
`;

export const Icon = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;

  &:active,
  &:hover,
  &:focus,
  &:visited {
    border: none;
  }
`;

export const Likes = styled.h3`
  padding: 10px 15px;
  margin-left: 7px;
  margin-top: -7px;
  font-size: 14px;
  font-weight: 600;
`;

export const CommentController = styled.div`
  padding: 11px 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow-y: hidden;

  @media (max-width: 1030px) {
    display: none;
  }

  input {
    width: 85%;
    height: 25px;
    border: none;
    font-size: 14px;
    padding: 0 10px;

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
