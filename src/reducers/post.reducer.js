import { postConstants } from '../actions/constants';

const initState = {
  posts: [],
  myPosts: [],
  myFollowingsPost: [],
  loading: false,
  creating: false,
  deleting: false,
  liking: false,
  error: '',
  createPostError: '',
  message: '',
};

export default (state = initState, action) => {
  console.log(action);
  switch (action.type) {
    case postConstants.GET_POSTS:
      state = {
        ...state,
        posts: action.payload.posts,
      };
      break;
    case postConstants.GET_MY_POST:
      state = {
        ...state,
        myPosts: action.payload.mypost,
      };
      break;
    case postConstants.CREATE_POST_REQUEST:
      state = {
        ...state,
        creating: true,
      };
      break;
    case postConstants.CREATE_POST_SUCCESS:
      state = {
        ...state,
        creating: false,
      };
      break;
    case postConstants.CREATE_POST_FAILURE:
      state = {
        ...state,
        creating: false,
        createPostError: action.payload.error,
      };
      break;
    case postConstants.LIKE_POST_REQUEST:
      state = {
        ...state,
        liking: true,
      };
      break;
    case postConstants.LIKE_POST:
      state = {
        ...state,
        liking: false,
      };
      break;
    case postConstants.UNLIKE_POST_REQUEST:
      state = {
        ...state,
        liking: true,
      };
      break;
    case postConstants.UNLIKE_POST:
      state = {
        ...state,
        liking: false,
      };
      break;
    case postConstants.DELETE_COMMENT_REQUEST:
      state = {
        ...state,
        deleting: true,
      };
      break;
    case postConstants.DELETE_COMMENT:
      state = {
        ...state,
        deleting: false,
      };
      break;
    case postConstants.GET_MYFOLLOWINGS_POST_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case postConstants.GET_MYFOLLOWINGS_POST_SUCCESS:
      state = {
        ...state,
        loading: false,
        myFollowingsPost: action.payload.posts,
      };
  }
  return state;
};
