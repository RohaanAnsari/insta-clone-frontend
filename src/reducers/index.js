import { combineReducers } from 'redux';
import authReducer from './auth.reducer';
import userReducer from './user.reducer';
import postReducer from './post.reducer';
import conversationReducer from './conversation.reducer';

const rootreducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  post: postReducer,
  conversation: conversationReducer,
});

export default rootreducer;
