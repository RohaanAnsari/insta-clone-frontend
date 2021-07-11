import { authConstants } from '../actions/constants';

const initState = {
  token: null,
  user: {
    _id: '',
    fullName: '',
    name: '',
    email: '',
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
};

export default (state = initState, action) => {
  // console.log(action);
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
  }
  return state;
};
