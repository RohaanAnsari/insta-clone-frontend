import { authConstants, userConstants } from '../actions/constants';

const initState = {
  token: null,
  user: {
    _id: '',
    fullName: '',
    name: '',
    email: '',
    bio: '',
    profilePicture: '',
    followers: [],
    following: [],
  },
  authenticate: false,
  authenticating: false,
  loading: false,
  error: '',
  message: '',
  following: [],
  resetError: '',
  resetMessage: '',
  updatePasswordError: '',
  updatePasswordMsg: '',
};

export default (state = initState, action) => {
  console.log(action);
  switch (action.type) {
    case authConstants.LOGIN_REQUEST:
      state = {
        ...state,
        authenticating: true,
      };
      break;
    case authConstants.LOGIN_SUCCESS:
      state = {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        authenticate: true,
        authenticating: false,
      };
      break;
    case authConstants.LOGIN_FAILURE:
      state = {
        ...initState,
        authenticating: false,
        error: action.payload.error,
      };
      break;
    case authConstants.LOGOUT_REQUEST:
      state = {
        ...state,
      };
      break;
    case authConstants.LOGOUT_SUCCESS:
      // state = {
      //   token: null,
      //   user: undefined,
      //   authenticate: false,
      // };
      state = null;
      break;
    case authConstants.UPDATE_FOLLOWINGS:
      state = {
        ...state,
        user: action.payload.user,
      };
      break;
    case userConstants.UPDATE_USER_DETAILS:
      state = {
        ...state,
        user: action.payload.user,
      };
      break;
    case authConstants.RESET_PASSWORD_SUCCESS:
      state = {
        ...state,
        resetMessage: action.payload.message,
      };
    case authConstants.RESET_PASSWORD_FAILURE:
      state = {
        ...state,
        resetError: action.payload.error,
      };
    case authConstants.UPDATE_PASSWORD_SUCCESS:
      state = {
        ...state,
        updatePasswordMsg: action.payload.message,
      };
    case authConstants.UPDATE_PASSWORD_FAILURE:
      state = {
        ...state,
        updatePasswordError: action.payload.error,
      };
  }
  return state;
};
