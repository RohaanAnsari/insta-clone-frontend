import React, { useEffect } from 'react';
import { Switch, Route, useLocation, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { isUserLoggedIn } from './actions/auth.actions';
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
} from './components';

const Main = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const history = useHistory();
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    if (location.pathname === '/') {
      dispatch(getMyFollowingsPost());
      dispatch(cleanUser());
    }

    // if (location.pathname === '/') {
    //   localStorage.setItem('location', 'home');
    // } else if (location.pathname === '/messages') {
    //   localStorage.setItem('location', 'home');
    // } else if (location.pathname === '/') {
    //   localStorage.setItem('location', 'home');
    // } else if (location.pathname === '/') {
    //   localStorage.setItem('location', 'home');
    // }
  }, [location.pathname]);

  useEffect(() => {
    if (!auth.authenticate) {
      dispatch(isUserLoggedIn());
    }
    if (auth.authenticate) {
      dispatch(getAllPosts());
      dispatch(getMyFollowingsPost());
      if (location.pathname.startsWith('/reset')) {
        history.push('/');
      }
    }
  }, [auth.authenticate]);

  return (
    <>
      <Switch>
        <Route path="/signup" component={Signup} />
        <Route path="/signin" component={Signin} />
        <Route exact path="/reset" component={Reset} />
        <Route path="/reset/:token" component={UpdatePassword} />
        <Layout>
          <PrivateRoute exact path="/" component={Home} />
          <Route
            path="/messages"
            // component={Messages}
            render={() => <Messages />}
          />

          <PrivateRoute path="/feed" component={Feed} />
          <PrivateRoute exact path="/profile" component={Profile} />
          <PrivateRoute exact path="/profile/:userid" component={ProfileUser} />
        </Layout>
      </Switch>
    </>
  );
};

export default Main;
