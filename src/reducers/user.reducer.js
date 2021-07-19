import { authConstants, userConstants } from '../actions/constants';

const initState = {
  allUsers: [],
  userChats: [],
  error: '',
  message: '',
  loading: false,
  gettingUser: false,
  followReq: false,

  user: {
    _id: '',
    email: '',
    fullName: '',
    name: '',
    profilePicture: '',
  },
  posts: [],
};

export default (state = initState, action) => {
  switch (action.type) {
    case authConstants.USER_REGISTER_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case authConstants.USER_REGISTER_SUCCESS:
      state = {
        ...state,
        loading: false,
        message: action.payload.message,
      };
      break;
    case authConstants.USER_REGISTER_FAILURE:
      state = {
        ...state,
        loading: false,
        error: action.payload.error,
      };
      break;
    case userConstants.GET_USER_PROFILE_REQUEST:
      state = {
        ...state,
        gettingUser: true,
      };
      break;
    case userConstants.GET_USER_PROFILE:
      state = {
        ...state,
        gettingUser: false,
        user: action.payload.user,
        posts: action.payload.posts,
      };
      break;
    case userConstants.GET_USER_PROFILE_FAILURE:
      state = {
        ...state,
        gettingUser: false,
        error: action.payload.error,
      };
      break;
    case userConstants.GET_ALL_USERS:
      state = {
        ...state,
        allUsers: action.payload.users,
      };
      break;
    case userConstants.CLEAR_USER:
      state = {
        ...state,
        user: null,
        posts: null,
      };
      break;
    case userConstants.FOLLOW_USER_REQUEST:
    case userConstants.UNFOLLOW_USER_REQUEST:
      state = {
        ...state,
        followReq: true,
      };
      break;
    case userConstants.FOLLOW_USER:
    case userConstants.UNFOLLOW_USER:
      state = {
        ...state,
        followReq: false,
      };
      break;
    case userConstants.GET_USER_INFO:
      state = {
        ...state,
        userChats: action.payload.users,
      };
  }
  return state;
};
