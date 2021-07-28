import styled, { css } from 'styled-components/macro';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import FavoriteOutlinedIcon from '@material-ui/icons/FavoriteOutlined';
import FavoriteBorderRoundedIcon from '@material-ui/icons/FavoriteBorderRounded';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  background-color: #ffffff;
  color: #262626;
  font-size: 14px;
  line-height: 18px;
  text-decoration: none;
  height: 54px;
  width: 100%;

  border-bottom: 1px solid #dbdbdb;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3;
`;

export const Container = styled.div`
  font-weight: 300;
  height: 100%;
  min-height: auto;
  width: 72%;
  max-width: 975px;
  min-width: 985px;
  margin: 0 auto;
  padding: 0 20px 0 20px;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 960px) {
    min-width: auto;
    width: 85vw;
  }
  @media (max-width: 800px) {
    min-width: 68rem;
  }
  @media (max-width: 670px) {
    min-width: 65rem;
  }
  @media (max-width: 620px) {
    min-width: 63rem;
  }
  @media (max-width: 500px) {
    min-width: 52rem;
  }
`;

export const Logo = styled(Link)`
  max-width: 360px;
  width: 100%;
  cursor: pointer;
  display: flex;
  @media (max-width: 500px) {
    img {
      width: 70%;
    }
  }
`;

export const Search = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 215px;
  width: 100%;

  min-height: auto;
  min-width: 125px;
  border: 1px solid #dbdbdb;
  padding: 3px 10px 3px 11px;
  border-radius: 5px;
  overflow: hidden;
  background: #fafafa;
  height: 28px;

  input {
    font-size: 14px;
    background: transparent;
    border: none;
    padding: 5px;

    &:focus {
      outline: none;
      box-shadow: none;
    }
    &:active {
      background: transparent;
    }
  }
`;

export const SearchIcon = styled(SearchRoundedIcon)`
  height: 28px !important;
  margin-left: 20px;
  @media (max-width: 870px) {
    height: 22px !important;
  }
`;

export const NavIcons = styled.div`
  height: 22px;
  max-width: 360px;
  width: 100%;
  white-space: noWrap;

  display: flex;
  justify-content: flex-end;
`;

export const Icons = styled.div`
  width: 222px;
  padding: 0 0 0 24px;
  display: flex;
  justify-content: space-around;
  @media (max-width: 500px) {
    padding: 0 0 0 20px;
  }
  @media (max-width: 500px) {
    padding: 0 0 0 40px;
  }
`;

const sharedIconStyles = css`
  font-size: 23px !important;
  text-decoration: none !important;
  color: black !important;
  &:active,
  &:visited,
  &:focus {
    color: black !important;
  }
  @media (max-width: 870px) {
    height: 22px !important;
  }
`;

export const Icon = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
  @media (max-width: 870px) {
    height: 5px !important;
  }
`;

export const FavIconActive = styled(FavoriteOutlinedIcon)`
  ${sharedIconStyles}
`;

export const FavIconUnActive = styled(FavoriteBorderRoundedIcon)`
  ${sharedIconStyles}
`;

export const ProfileActive = styled(AccountCircleRoundedIcon)`
  ${sharedIconStyles}
`;

export const ProfileUnActive = styled(AccountCircleOutlinedIcon)`
  ${sharedIconStyles}
`;

export const Activity = styled.div`
  background-color: #565656;
`;
