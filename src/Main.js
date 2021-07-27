import React, { useEffect } from 'react';
import { Switch, Route, useLocation, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getSavedPosts, isUserLoggedIn } from './actions/auth.actions';
import { getAllPosts, getMyFollowingsPost } from './actions/post.actions';
import { cleanUser } from './actions/user.actions';

import {
  Layout,
  Home,
  Profile,
  Feed,
  Messages,
  Signin,
  Signup,
  PrivateRoute,
  ProfileUser,
  Reset,
  UpdatePassword,
  SavedPost,
} from './components';
import GoToPost from './components/GoToPost/GoToPost';

const Main = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const history = useHistory();
  const auth = useSelector((state) => state.auth);
  let ids = JSON.parse(localStorage.getItem('ids'));

  useEffect(() => {
    if (location.pathname === '/') {
      dispatch(getMyFollowingsPost());
      dispatch(cleanUser());
    }

    if (location.pathname === '/') {
      localStorage.setItem('location', 'home');
    } else if (location.pathname === '/messages') {
      localStorage.setItem('location', 'messages');
    } else if (location.pathname === '/feed') {
      localStorage.setItem('location', 'feed');
    } else if (location.pathname === '/profile') {
      localStorage.setItem('location', 'profile');
    } else if (location.pathname === '/profile/feed') {
      localStorage.setItem('location', 'feed');
      history.push('/feed');
    }

    if (location.pathname === '/savedpost') {
      ids = JSON.parse(localStorage.getItem('ids'));
      console.log(ids);
      dispatch(getSavedPosts(ids));
    }
  }, [location.pathname, ids?.length]);

  useEffect(() => {
    if (!auth?.authenticate) {
      dispatch(isUserLoggedIn());
    }
    if (auth?.authenticate) {
      dispatch(getAllPosts());
      dispatch(getMyFollowingsPost());
      if (location.pathname.startsWith('/reset')) {
        history.push('/');
      }
    }
  }, [auth?.authenticate]);

  return (
    <>
      <Switch>
        <Route path="/signup" component={Signup} />
        <Route path="/signin" component={Signin} />
        <Route exact path="/reset" component={Reset} />
        <Route path="/reset/:token" component={UpdatePassword} />
        <Layout>
          <PrivateRoute exact path="/" component={Home} />
          <PrivateRoute exact path="/messages" component={Messages} />
          <PrivateRoute exact path="/savedpost" component={SavedPost} />
          <PrivateRoute exact path="/feed" component={Feed} />
          <PrivateRoute exact path="/profile" component={Profile} />
          <PrivateRoute exact path="/profile/:userid" component={ProfileUser} />
          <PrivateRoute exact path="/post/:id" component={GoToPost} />
        </Layout>
      </Switch>
    </>
  );
};

export default Main;
