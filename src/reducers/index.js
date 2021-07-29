import { combineReducers } from 'redux';
import authReducer from './auth.reducer';
import userReducer from './user.reducer';
import postReducer from './post.reducer';
import conversationReducer from './conversation.reducer';

const rootReducer = (state, action) => {
  if (action.type === 'LOGOUT_SUCCESS') {
    return appReducer(undefined, action);
  }
  return appReducer(state, action);
};

const appReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  post: postReducer,
  conversation: conversationReducer,
});

export default rootReducer;
