import axios from '../components/axios/axios';
import { authConstants, userConstants } from './constants';
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
      window.location.reload();
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
    window.location.reload();
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

export const updateProfilePicture = (url) => {
  return async (dispatch) => {
    const res = await axios.put('/updateprofilepicture', {
      profilePicture: url,
    });
    dispatch({
      type: userConstants.UPDATE_USER_DETAILS,
      payload: {
        user: res.data.result,
      },
    });
    localStorage.setItem('user', JSON.stringify(res.data.result));
  };
};

export const updateBio = (bio) => {
  return async (dispatch) => {
    const res = await axios.put('/updatebio', {
      bio,
    });
    dispatch({
      type: userConstants.UPDATE_USER_DETAILS,
      payload: {
        user: res.data.result,
      },
    });
    localStorage.setItem('user', JSON.stringify(res.data.result));
  };
};

export const resetPassword = (email) => {
  return async (dispatch) => {
    const res = await axios.post('/reset-password', { email });
    console.log(res);
    if (res.status === 200) {
      dispatch({
        type: authConstants.RESET_PASSWORD_SUCCESS,
        payload: {
          message: res.data.message,
        },
      });
    } else {
      dispatch({
        type: authConstants.RESET_PASSWORD_FAILURE,
        payload: {
          error: res.data.error,
        },
      });
    }
  };
};

export const updatePassword = (password, token) => {
  return async (dispatch) => {
    const res = await axios.post('/new-password', { password, token });
    console.log(res);
    if (res.status === 200) {
      dispatch({
        type: authConstants.UPDATE_PASSWORD_SUCCESS,
        payload: { message: res.data.message },
      });
    } else {
      if (res.status === 206) {
        dispatch({
          type: authConstants.UPDATE_PASSWORD_FAILURE,
          payload: { error: res.data.error },
        });
      }
    }
  };
};
