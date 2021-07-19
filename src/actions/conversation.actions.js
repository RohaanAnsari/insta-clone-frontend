import { conversationConstants } from '../actions/constants';
import axios from '../components/axios/axios';

const getAllConversations = (userid) => {
  return async (dispatch) => {
    const res = await axios.get(`/conversations/${userid}`);
    if (res.status === 200) {
      dispatch({
        type: conversationConstants.GET_ALL_CONVERSATIONS,
        payload: {
          chats: res.data.conversation,
        },
      });
    }
  };
};

export const getConversation = (userid) => {
  return async (dispatch) => {
    const res = await axios.get(`/conversations/b/w/${userid}`);

    const id = res.data.id.join(', ');

    if (res.status === 200) {
      dispatch(getMessages(res.data.id.join(', ')));
      dispatch({
        type: conversationConstants.PERSIST_CONVERSATION_ID,
        payload: { conversationId: id },
      });
    }
  };
};

const getMessages = (chatId) => {
  return async (dispatch) => {
    const res = await axios.get(`/messages/${chatId}`);

    dispatch({ type: conversationConstants.GET_MESSAGES_REQUEST });
    if (res.status === 200) {
      dispatch({
        type: conversationConstants.GET_MESSAGES_SUCCESS,
        payload: { messages: res.data.messages, user: res.data.user },
      });
    }
  };
};

export const postNewMessage = (message) => {
  return async (dispatch) => {
    const res = await axios.post(`/messages`, { message });

    if (res.status === 200) {
      dispatch({ type: conversationConstants.POST_NEW_MESSAGE });
      dispatch(getMessages(message.conversationId));
    }
  };
};

export const newConversation = (senderId, receiverId) => {
  return async (dispatch) => {
    const res = await axios.post('/conversations', { senderId, receiverId });
    console.log(res);

    if (res.status === 200) {
      dispatch({ type: conversationConstants.NEW_CONVERSATION });
      dispatch(getAllConversations(senderId));
    }
  };
};

export { getMessages, getAllConversations };
