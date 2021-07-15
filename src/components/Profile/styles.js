import styled from 'styled-components/macro';
import Avatar from '@material-ui/core/Avatar';

export const Wrapper = styled.div`
  max-width: 935px;
  height: 100%;
  padding: 2px 20px 0 20px;
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
`;

export const Top = styled.div`
  display: flex;

  h1 {
    font-size: 28px;
    font-weight: 300;
    line-height: 32px;
    color: #555555;
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
`;

export const Text = styled.div`
  display: inline;
  margin-right: 18px;
  font-size: 14px;
  color: rgb(38, 38, 38);
  font-weight: 00;
`;

export const Bottom = styled.div`
  h2 {
    font-size: 16px;
    font-weight: 600;
    line-height: 26px;
    letter-spacing: 0.9px;
  }

  p {
    color: rgb(38, 38, 38);
    font-size: 16px;
    font-weight: 400;
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
`;

export const Post = styled.div`
  width: 280px;
  max-width: 293px;
  max-height: 293px;
  height: 293px;
  background: #fff;

  &:hover {
    filter: brightness(60%);
  }

  img {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }
`;

export const UpdateModal = styled.div`
  padding: 30px;
  height: max-content;
  width: 600px;
  background: #fff;

  header {
    /* border: 1px solid #272727; */
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
    }
  }
`;
