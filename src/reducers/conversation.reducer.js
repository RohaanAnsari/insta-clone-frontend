import { conversationConstants } from '../actions/constants';

const initState = {
  chats: [],
  messages: [],
  loading: false,
  user: [],
  conversationId: '',
};

export default (state = initState, action) => {
  // console.log(action);
  switch (action.type) {
    case conversationConstants.GET_ALL_CONVERSATIONS:
      state = {
        ...state,
        chats: action.payload.chats,
      };
      break;
    case conversationConstants.PERSIST_CONVERSATION_ID:
      state = {
        ...state,
        conversationId: action.payload.conversationId,
      };
      break;
    case conversationConstants.GET_ALL_CONVERSATIONS:
      state = {
        ...state,
        chats: action.payload.chats,
      };
      break;
    case conversationConstants.GET_MESSAGES_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case conversationConstants.GET_MESSAGES_SUCCESS:
      state = {
        ...state,
        loading: false,
        messages: action.payload.messages,
        user: action.payload.user,
      };
      break;
  }
  return state;
};
