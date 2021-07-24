import { conversationConstants } from '../actions/constants';

const initState = {
  chats: [],
  messages: [],
  loading: false,
  user: [],
  conversationId: '',
  receiver: [],
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
    case conversationConstants.GET_RECEIVER:
      state = {
        ...state,
        receiver: action.payload.receiver,
      };
      break;
    case conversationConstants.DELETE_CONVERSATION:
      state = {
        ...state,
        chats: state.chats.filter((chat) => chat._id !== action.payload.id),
      };
      break;
  }
  return state;
};
