import React, { useEffect, useRef, useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import { Attachment, Emoji, Like } from '../../svg';
import { Bottom, ChatArea, Header, Main, Upper, Icon, Message } from './styles';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';
import { postNewMessage } from '../../actions/conversation.actions';
import ReactScrollableFeed from 'react-scrollable-feed';

import { io } from 'socket.io-client';

const ChattingUi = ({ message, own, senderId, receiverId }) => {
  const conversation = useSelector((state) => state.conversation);
  const auth = useSelector((state) => state.auth);
  const scrollRef = useRef();
  const socket = useRef();
  const dispatch = useDispatch();

  useEffect(() => {
    scrollRef?.current?.scrollIntoView({ scrollBehavior: 'smooth' });
  }, [conversation.messages]);

  useEffect(() => {
    socket.current = io('ws://localhost:5500');
  }, []);

  useEffect(() => {
    socket?.current?.emit('addUser', auth?.user._id);
    socket.current.on('getUsers', (users) => {
      console.log(users);
    });
  }, [auth?.user._id]);

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
                          msg.sender === auth.user._id ? '#efefef' : '#FFFFFF',
                        border:
                          msg.sender === auth.user._id
                            ? '1px solid #FFFFFFF'
                            : '1px solid #efefef',
                      }}
                    >
                      {msg.text}
                    </p>
                    <span>
                      {moment(msg.createdAt).startOf('seconds').fromNow()}
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
  );
};

export default ChattingUi;
