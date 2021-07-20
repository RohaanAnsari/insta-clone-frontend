import { authConstants, userConstants } from './constants';
import axios from '../components/axios/axios';
import { updateUser } from './auth.actions';

export const signup = (user) => {
  console.log(user);
  return async (dispatch) => {
    dispatch({ type: authConstants.USER_REGISTER_REQUEST });
    const res = await axios.post(`/signup`, {
      ...user,
    });

    if (res.status === 201) {
      dispatch({
        type: authConstants.USER_REGISTER_SUCCESS,
        payload: {
          message: res.data.message,
        },
      });
    } else {
      if (res.status === 206) {
        dispatch({
          type: authConstants.USER_REGISTER_FAILURE,
          payload: { error: res.data.error },
        });
      }
    }
  };
};

const getUserProfile = (id) => {
  return async (dispatch) => {
    const res = await axios.get(`/user/${id}`);
    dispatch({ type: userConstants.GET_USER_PROFILE_REQUEST });

    if (res.status === 200) {
      const { user, posts } = res.data;
      dispatch({
        type: userConstants.GET_USER_PROFILE,
        payload: { user, posts },
      });
    } else if (res.status === 206) {
      dispatch({
        type: userConstants.GET_USER_PROFILE_FAILURE,
        payload: res.data.error,
      });
    }
  };
};

export const getUserInfo = (id) => {
  return async (dispatch) => {
    const res = await axios.post('/users/info', {
      ids: id,
    });
    if (res.status === 200) {
      dispatch({
        type: userConstants.GET_USER_INFO,
        payload: { users: res.data.user },
      });
    }
  };
};

export const getAllUsers = () => {
  return async (dispatch) => {
    const res = await axios.get('/getallusers');
    console.log(res, 'res after get all users');
    if (res.status === 200) {
      dispatch({
        type: userConstants.GET_ALL_USERS,
        payload: { users: res.data.users },
      });
    }
  };
};

export const cleanUser = () => {
  return async (dispatch) => {
    dispatch({ type: userConstants.CLEAR_USER });
  };
};

export const follow = (id, userId) => {
  return async (dispatch) => {
    const res = await axios.put('/follow', { followId: id });
    if (res.status === 200) {
      dispatch({ type: userConstants.FOLLOW_USER_REQUEST });

      setTimeout(() => {
        dispatch({
          type: userConstants.FOLLOW_USER,
          payload: {
            user: res.data,
          },
        });
      }, 1500);
      dispatch(updateUser(res.data));
    }
  };
};

export const unFollow = (id) => {
  return async (dispatch) => {
    const res = await axios.put('/unfollow', { unfollowId: id });
    console.log(res);
    dispatch({ type: userConstants.UNFOLLOW_USER_REQUEST });
    if (res.status === 200) {
      setTimeout(() => {
        dispatch({
          type: userConstants.UNFOLLOW_USER,
          payload: {
            user: res.data,
          },
        });
      }, 1500);
      dispatch(updateUser(res.data));
    }
  };
};

export const getFollowers = (id) => {
  return async (dispatch) => {
    const res = await axios.get(`/get-followers/${id}`);

    if (res.status === 200) {
      dispatch({
        type: userConstants.GET_FOLLOWERS_DETAILS,
        payload: {
          followers: res.data.user.followers,
        },
      });
    }
  };
};

export const getFollowings = (id) => {
  return async (dispatch) => {
    const res = await axios.get(`/get-followings/${id}`);

    if (res.status === 200) {
      console.log('followings', res.data.user.following);
      dispatch({
        type: userConstants.GET_FOLLOWINGS_DETAILS,
        payload: { followings: res.data.user.following },
      });
    }
  };
};

export { getUserProfile };
