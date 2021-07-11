import axios from '../components/axios/axios';
import { authConstants } from './constants';
import { getAllPosts } from './post.actions';

export const login = (user) => {
  console.log(user);
  return async (dispatch) => {
    dispatch({ type: authConstants.LOGIN_REQUEST });
    const res = await axios.post('/signin', {
      ...user,
    });
    console.log('response after signin', res);
    if (res.status === 200) {
      dispatch(getAllPosts());
      const { token, user } = res.data;
      localStorage.setItem('jwt', token);
      localStorage.setItem('user', JSON.stringify(user));
      dispatch({
        type: authConstants.LOGIN_SUCCESS,
        payload: {
          token,
          user,
        },
      });
    } else if (res.status === 206) {
      dispatch({
        type: authConstants.LOGIN_FAILURE,
        payload: { error: res.data.error },
      });
    }
  };
};

export const isUserLoggedIn = () => {
  return async (dispatch) => {
    dispatch(getAllPosts());
    const token = localStorage.getItem('jwt');
    if (token) {
      const user = JSON.parse(localStorage.getItem('user'));
      dispatch({
        type: authConstants.LOGIN_SUCCESS,
        payload: {
          token,
          user,
        },
      });
    }
  };
};

export const signout = () => {
  return async (dispatch) => {
    dispatch({ type: authConstants.LOGOUT_REQUEST });
    localStorage.clear();
    dispatch({ type: authConstants.LOGOUT_SUCCESS });
  };
};

export const updateUser = (user) => {
  return async (dispatch) => {
    localStorage.setItem('user', JSON.stringify(user));
    dispatch({
      type: authConstants.UPDATE_FOLLOWINGS,
      payload: {
        user,
      },
    });
  };
};
