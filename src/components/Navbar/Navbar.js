import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Searchbar from '../Searchbar';
import { useSelector } from 'react-redux';
import {
  HomeActive,
  HomeUnActive,
  ChatActive,
  ChatUnActive,
  FeedActive,
  FeedUnActive,
} from '../../svg';
import {
  Wrapper,
  Container,
  Logo,
  Search,
  NavIcons,
  SearchIcon,
  Icons,
  FavIconActive,
  FavIconUnActive,
  ProfileActive,
  ProfileUnActive,
  Icon,
} from './styles';

const Navbar = () => {
  const user = useSelector((state) => state.user);
  return (
    <Wrapper>
      <Container>
        <Logo to="/" onClick={() => localStorage.setItem('location', 'home')}>
          <img src="/images/instagram-logo.png" alt="Instagram" />
        </Logo>
        <Search>
          <Searchbar placeholder="Search" data={user.allUsers} />
        </Search>
        <NavIcons>
          <Icons>
            <div>
              {localStorage.getItem('location') === 'home' ? (
                <HomeActive />
              ) : (
                <Link to="/">
                  <Icon
                    onClick={() => localStorage.setItem('location', 'home')}
                  >
                    <HomeUnActive />
                  </Icon>
                </Link>
              )}
            </div>
            <div>
              {localStorage.getItem('location') === 'messages' ? (
                <ChatActive />
              ) : (
                <Link to="/messages">
                  <Icon
                    onClick={() => localStorage.setItem('location', 'messages')}
                  >
                    <ChatUnActive />
                  </Icon>
                </Link>
              )}
            </div>
            <div>
              {localStorage.getItem('location') === 'feed' ? (
                <FeedActive />
              ) : (
                <Link to="feed">
                  <Icon
                    onClick={() => {
                      localStorage.setItem('location', 'feed');
                    }}
                  >
                    <FeedUnActive />
                  </Icon>
                </Link>
              )}
            </div>
            <div>
              {localStorage.getItem('location') === 'activity' ? (
                <FavIconActive />
              ) : (
                <Link to="/activity">
                  <FavIconUnActive
                    onClick={() => localStorage.setItem('location', 'activity')}
                  />
                </Link>
              )}
            </div>
            {/* <div style={{ background: 'red' }}> */}
            <div>
              {localStorage.getItem('location') === 'profile' ? (
                <ProfileActive />
              ) : (
                <>
                  <Link to="/profile">
                    <ProfileUnActive
                      onClick={() =>
                        localStorage.setItem('location', 'profile')
                      }
                    />
                  </Link>
                </>
              )}
            </div>
          </Icons>
        </NavIcons>
      </Container>
    </Wrapper>
  );
};

export default Navbar;
