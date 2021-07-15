import React from 'react';
import { Redirect, Route, useHistory } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const history = useHistory();
  return (
    <Route
      {...rest}
      component={(props) => {
        const token = window.localStorage.getItem('jwt');
        if (token) {
          return <Component {...props} />;
        } else {
          return <Redirect to={`/signin`} />;
        }
      }}
    />
  );
};

export default PrivateRoute;
