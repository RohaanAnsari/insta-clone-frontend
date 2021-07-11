import React, { useEffect } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
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
} from './components';
import { useDispatch, useSelector } from 'react-redux';
import { isUserLoggedIn } from './actions/auth.actions';
import { getAllPosts } from './actions/post.actions';
import { cleanUser } from './actions/user.actions';

const Main = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    console.log('pageview', location.pathname);
    if (location.pathname === '/') {
      dispatch(getAllPosts());
      dispatch(cleanUser());
    }
  }, [location]);

  useEffect(() => {
    if (!auth.authenticate) {
      dispatch(isUserLoggedIn());
      dispatch(getAllPosts());
    }
    if (auth.authenticate) {
      dispatch(getAllPosts());
    }
  }, [auth.authenticate]);

  return (
    <>
      <Switch>
        <Route path="/signup" component={Signup} />
        <Route path="/signin" component={Signin} />
        <Layout>
          <PrivateRoute exact path="/" component={Home} />
          <PrivateRoute path="/messages" component={Messages} />
          <PrivateRoute path="/feed" component={Feed} />
          <PrivateRoute exact path="/profile" component={Profile} />
          <PrivateRoute
            forceRefresh={true}
            exact
            path="/profile/:userid"
            component={ProfileUser}
          />
        </Layout>
      </Switch>
    </>
  );
};

export default Main;
