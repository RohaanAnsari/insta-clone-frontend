import React, { useEffect, useState, useRef } from 'react';

import KeyboardArrowDownSharpIcon from '@material-ui/icons/KeyboardArrowDownSharp';
import { NewChat, Share } from '../../svg';
import Avatar from '@material-ui/core/Avatar';
import { useDispatch, useSelector } from 'react-redux';
import { getUserInfo } from '../../actions/user.actions';
import { io } from 'socket.io-client';
import moment from 'moment';
import Head from './Head';
import {
  getMessages,
  postNewMessage,
} from '../../actions/conversation.actions';
import ReactScrollableFeed from 'react-scrollable-feed';
import { Attachment, Emoji, Like } from '../../svg';

import {
  Center,
  Wrapper,
  ContainerLeft,
  ContainerRight,
  InitialDiv,
  Circle,
  Top,
  ChatSection,
  Chat,
  Dot,
  NewMessage,
  Bottom,
  ChatArea,
  Header,
  Main,
  Upper,
  Icon,
  Message,
} from './styles';
import {
  getAllConversations,
  getConversation,
} from '../../actions/conversation.actions';
import { useLocation } from 'react-router-dom';

const Messages = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const auth = useSelector((state) => state.auth);
  const user = useSelector((state) => state.user);
  const conversation = useSelector((state) => state.conversation);
  const [receiverId, setReceiverId] = useState('');
  const [arrivalMessage, setArrivalMessage] = useState(null);

  const [messages, setMessages] = useState(conversation.messages);

  const scrollRef = useRef();
  const socket = useRef();

  const [currentChat, setCurrentChat] = useState(null);

  useEffect(() => {
    if (location.pathname === '/messages') {
      socket.current = io('ws://localhost:5500');
    }
    socket.current.on('getMessage', (data) => {
      setArrivalMessage({
        sender: data.senderId,
        text: data.text,
        createdAt: Date.now(),
      });
    });
  }, [location.pathname === '/messages']);

  useEffect(() => {
    arrivalMessage && dispatch(getMessages(conversation.conversationId));
    console.log(arrivalMessage);
  }, [arrivalMessage]);

  useEffect(() => {
    const members = conversation.chats.map((e) => e.members);
    let allMembers = [].concat.apply([], members);
    const filteredMembers = allMembers.filter(
      (member) => member !== auth.user._id
    );

    dispatch(getAllConversations(auth.user._id));
    dispatch(getUserInfo(filteredMembers));
  }, [auth.user._id, conversation.chats.length]);

  useEffect(() => {
    scrollRef?.current?.scrollIntoView({ scrollBehavior: 'smooth' });
  }, [conversation.messages]);

  useEffect(() => {
    socket?.current?.emit('addUser', auth.user._id);
    socket.current.on('getUsers', (users) => {
      console.log(users);
    });
  }, [auth.user._id]);

  const getText = (user) => {
    setReceiverId(user._id);
    setCurrentChat(user);
    dispatch(getConversation(user._id));
  };

  const handleSubmit = (e, msg) => {
    if (msg === '') {
      return;
    } else {
      e.preventDefault();
      const message = {
        sender: auth.user._id,
        text: msg,
        conversationId: conversation.conversationId,
      };
      dispatch(postNewMessage(message)).then(() => e.target.reset());

      socket.current.emit('sendMessage', {
        senderId: auth.user._id,
        receiverId,
        text: msg,
      });
    }
  };

  return (
    <Center>
      <Wrapper>
        <ContainerLeft>
          <Head />
          <ChatSection>
            {user.userChats.map((user) => {
              return (
                <Chat
                  onClick={() => {
                    getText(user);
                  }}
                >
                  <div>
                    <Avatar src={user.profilePicture} />
                    <span>
                      <h3>{user.name}</h3>
                      <NewMessage color="#8e8e8e">
                        Sent you a message
                      </NewMessage>
                    </span>
                  </div>
                  {/* <Dot /> */}
                </Chat>
              );
            })}
          </ChatSection>
        </ContainerLeft>
        <ContainerRight>
          {currentChat === null ? (
            <InitialUi />
          ) : (
            <ChatArea>
              <Header>
                <Avatar src={conversation.user.profilePicture} />
                <h1>{conversation.user.name}</h1>
              </Header>
              <Main>
                <Upper alignItems="flex-start">
                  <ReactScrollableFeed className="scroll">
                    {conversation.messages.map((msg) => {
                      return (
                        <div style={{ width: '100%' }} ref={scrollRef}>
                          <Message
                            style={{
                              alignItems:
                                msg.sender === auth.user._id
                                  ? 'flex-end'
                                  : 'flex-start',
                            }}
                          >
                            <p
                              style={{
                                backgroundColor:
                                  msg.sender === auth.user._id
                                    ? '#efefef'
                                    : '#FFFFFF',
                                border:
                                  msg.sender === auth.user._id
                                    ? '1px solid #FFFFFFF'
                                    : '1px solid #efefef',
                              }}
                            >
                              {msg.text}
                            </p>
                            <span>
                              {moment(msg.createdAt)
                                .startOf('seconds')
                                .fromNow()}
                            </span>
                          </Message>
                        </div>
                      );
                    })}
                  </ReactScrollableFeed>
                </Upper>
                <Bottom>
                  <div className="container">
                    <Icon ml="1rem" mr="1rem">
                      <Emoji className="margin" />
                    </Icon>
                    <form
                      className="form"
                      onSubmit={(e) => {
                        e.preventDefault();
                        handleSubmit(e, e.target[0].value);
                      }}
                    >
                      <input placeholder="Message..." />
                    </form>

                    <Icon ml="1rem">
                      <Attachment className="margin" />
                    </Icon>
                    <Icon ml="1rem">
                      <Like className="margin" />
                    </Icon>
                  </div>
                </Bottom>
              </Main>
            </ChatArea>
          )}
        </ContainerRight>
      </Wrapper>
    </Center>
  );
};

export default Messages;

const InitialUi = () => {
  return (
    <>
      <InitialDiv>
        <Circle>
          <div>
            <Share height="58px" width="58px" />
          </div>
        </Circle>
        <span>
          <h2>Your Messages</h2>
          <NewMessage>
            Send private photos and messages to a friend or group.
          </NewMessage>
          <button>Send Message</button>
        </span>
      </InitialDiv>
    </>
  );
};
