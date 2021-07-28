import styled from 'styled-components/macro';
import Avatar from '@material-ui/core/Avatar';

export const Wrapper = styled.div`
  max-width: 935px;
  height: 100%;
  padding: 2px 20px 0 20px;

  @media (max-width: 870px) {
    padding-top: 3.5rem;
  }
`;

export const Header = styled.header`
  height: 200px;
  margin-bottom: 30px;
  padding: 10px 30px;
  display: flex;
  align-items: center;

  & .MuiAvatar-root {
    width: 160px;
    height: 160px;
  }
  @media (max-width: 920px) {
    min-width: 600px;
  }

  @media (max-width: 900px) {
    & .MuiAvatar-root {
      width: 120px;
      height: 120px;
    }
  }
  @media (max-width: 500px) {
    margin-left: -30px;
  }
`;

export const ProfilePicture = styled(Avatar)``;

export const UserDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  margin-left: 30px;
  padding: 20px 5px;
  @media (max-width: 500px) {
    margin-left: 14px;
  }
`;

export const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 106%;

  div {
    display: flex;
    align-items: center;

    h1 {
      font-size: 28px;
      font-weight: 300;
      line-height: 32px;
      color: #555555;
      @media (max-width: 920px) {
        font-size: 18px;
        line-height: 20px;
      }
    }

    button {
      margin-left: 15px;
      font-size: 14px;
      font-weight: 500;
      line-height: 18px;
      border: 1px solid #dbdbdb;
      border-radius: 4px;
      height: 30px;
      width: max-content;
      letter-spacing: 0.5px;
      padding: 5px 9px;
      cursor: pointer;
      background: transparent;
      &:active {
        background-color: #dbdbdb;
      }
      @media (max-width: 500px) {
        margin-left: 13px;
        font-size: 12px;
        line-height: 14px;
        height: 25px;
        padding: 3px 6px;
      }
    }
  }

  span {
    cursor: pointer;
    margin-right: 15px;
    & .MuiSvgIcon-root {
      font-size: 25px;
    }
    @media (max-width: 500px) {
      margin-right: 50px;
    }
  }
`;

export const Mid = styled.div`
  display: flex;
  text-align: left;
  align-items: center;
`;

export const Number = styled.div`
  display: inline;
  font-size: 16px;
  font-weight: 600;
  margin-right: 5px;
  @media (max-width: 500px) {
    font-size: 13px;
    font-weight: 600;
    margin-right: 3px;
  }
`;

export const Text = styled.div`
  display: inline;
  margin-right: 18px;
  font-size: 14px;
  color: rgb(38, 38, 38);
  font-weight: 400;
  cursor: pointer;
`;

export const Bottom = styled.div`
  h2 {
    font-size: 16px;
    font-weight: 600;
    line-height: 26px;
    letter-spacing: 0.9px;
    @media (max-width: 500px) {
      font-size: 14px;
      font-weight: 600;
    }
  }

  p {
    color: rgb(38, 38, 38);
    font-size: 16px;
    font-weight: 400;
    @media (max-width: 500px) {
      font-size: 14px;
    }
  }
`;

export const Divider = styled.div`
  background-color: #83838360;
  height: 1px;
  width: 100%;
`;

export const PostsContainer = styled.div`
  margin-top: 40px;
  width: 100%;
  height: 100%;
  padding-bottom: 2rem;
  display: flex;
  flex-wrap: wrap;
  gap: 25px;
  @media (max-width: 900px) {
    gap: 14px !important;
  }
`;

export const Post = styled.div`
  width: 280px;
  max-width: 293px;
  max-height: 293px;
  height: 293px;
  background: #fff;
  cursor: pointer !important;

  @media (max-width: 900px) {
    width: 270px;
  }
  @media (max-width: 500px) {
    min-width: 46rem !important;
  }

  &:hover {
    filter: brightness(60%);
  }

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;

export const UpdateModal = styled.div`
  padding: 30px;
  height: max-content;
  width: 600px;
  background: #fff;

  @media (max-width: 620px) {
    width: 100%;
  }

  header {
    justify-content: space-between;
    .MuiAvatar-root {
      width: 70px;
      height: 70px;
    }
    display: flex;
    align-items: center;

    div {
      input {
        margin-left: 30px;
      }

      h1 {
        color: #0095f6;
        font-weight: 800;
        font-size: 14px;
        margin-top: 2px;
        margin-left: 30px;
        margin-bottom: 15px;
        cursor: pointer;
      }
    }

    button {
      padding: 8px 15px;
      border: 1px dashed #8e8e8e;
      border-radius: 5px;
      background: transparent;
      font-weight: 600;
      cursor: pointer;

      @media (max-width: 620px) {
        padding: 4px 9px;
        font-weight: 600;
        width: 120px;
      }
    }
  }

  span {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-left: 8px;
    margin-top: 20px;

    p {
      font-size: 14px;
      font-weight: 400;
      text-align: center;
      margin-right: 20px;
    }

    input {
      padding: 5px;
      width: 45%;
      margin-left: 23px;
    }
    button {
      background: transparent;
      padding: 8px 27px;
      border: 1px dashed #8e8e8e;
      border-radius: 5px;
      margin-left: 38px;
      font-weight: 600;
      cursor: pointer;
      @media (max-width: 620px) {
        padding: 4px 9px;
        font-weight: 600;
        width: 120px;
      }
    }
  }
`;

export const Container = styled.div`
  height: max-content;
  width: 250px;
`;

export const Content = styled.div`
  padding: 12px 16px;
  cursor: pointer;
  transition: background-color 0.5s linear;

  &:hover {
    background-color: #ecf3f9;

    div {
      p {
        color: black;
      }
    }
  }

  div {
    display: flex;
    align-items: center;

    p {
      font-size: 14px;
      font-weight: 600;
      margin-left: 10px;
      color: #8e8e8e;
      transition: color 0.5s linear;
    }
  }
`;
