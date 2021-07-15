import React from 'react';
import KeyboardArrowDownSharpIcon from '@material-ui/icons/KeyboardArrowDownSharp';
import Avatar from '@material-ui/core/Avatar';
import { Share } from '../../svg';
import { useSelector } from 'react-redux';
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
} from './styles';

const Messages = () => {
  const auth = useSelector((state) => state.auth);
  return (
    <Center>
      <Wrapper>
        <ContainerLeft>
          <Top>
            <h4>{auth.user.name}</h4>
            <span>
              <KeyboardArrowDownSharpIcon />
            </span>
          </Top>
          <ChatSection>
            <Chat>
              <div>
                <Avatar src={auth.user.profilePicture} />
                <span>
                  <h3>aman_07</h3>
                  <NewMessage color="#8e8e8e">Sent you a message</NewMessage>
                </span>
              </div>
              <Dot />
            </Chat>
            <Chat>
              <div>
                <Avatar src={auth.user.profilePicture} />
                <span>
                  <h3>aman_07</h3>
                  <NewMessage>Sent you a message</NewMessage>
                </span>
              </div>
              <Dot />
            </Chat>
            <Chat>
              <div>
                <Avatar src={auth.user.profilePicture} />
                <span>
                  <h3>aman_07</h3>
                  <NewMessage>Sent you a message</NewMessage>
                </span>
              </div>
              <Dot />
            </Chat>
            <Chat>
              <div>
                <Avatar src={auth.user.profilePicture} />
                <span>
                  <h3>aman_07</h3>
                  <NewMessage>Sent you a message</NewMessage>
                </span>
              </div>
              <Dot />
            </Chat>
            <Chat>
              <div>
                <Avatar src={auth.user.profilePicture} />
                <span>
                  <h3>aman_07</h3>
                  <NewMessage>Sent you a message</NewMessage>
                </span>
              </div>
              <Dot />
            </Chat>
            <Chat>
              <div>
                <Avatar src={auth.user.profilePicture} />
                <span>
                  <h3>aman_07</h3>
                  <NewMessage>Sent you a message</NewMessage>
                </span>
              </div>
              <Dot />
            </Chat>
            <Chat>
              <div>
                <Avatar src={auth.user.profilePicture} />
                <span>
                  <h3>aman_07</h3>
                  <NewMessage>Sent you a message</NewMessage>
                </span>
              </div>
              <Dot />
            </Chat>
            <Chat>
              <div>
                <Avatar src={auth.user.profilePicture} />
                <span>
                  <h3>aman_07</h3>
                  <NewMessage>Sent you a message</NewMessage>
                </span>
              </div>
              <Dot />
            </Chat>
            <Chat>
              <div>
                <Avatar src={auth.user.profilePicture} />
                <span>
                  <h3>aman_07</h3>
                  <NewMessage>Sent you a message</NewMessage>
                </span>
              </div>
              <Dot />
            </Chat>
            <Chat>
              <div>
                <Avatar src={auth.user.profilePicture} />
                <span>
                  <h3>aman_07</h3>
                  <NewMessage>Sent you a message</NewMessage>
                </span>
              </div>
              <Dot />
            </Chat>
            <Chat>
              <div>
                <Avatar src={auth.user.profilePicture} />
                <span>
                  <h3>aman_07</h3>
                  <NewMessage>Sent you a message</NewMessage>
                </span>
              </div>
              <Dot />
            </Chat>
            <Chat>
              <div>
                <Avatar src={auth.user.profilePicture} />
                <span>
                  <h3>aman_07</h3>
                  <NewMessage>Sent you a message</NewMessage>
                </span>
              </div>
              <Dot />
            </Chat>
            <Chat>
              <div>
                <Avatar src={auth.user.profilePicture} />
                <span>
                  <h3>aman_07</h3>
                  <NewMessage>Sent you a message</NewMessage>
                </span>
              </div>
              <Dot />
            </Chat>
            <Chat>
              <div>
                <Avatar src={auth.user.profilePicture} />
                <span>
                  <h3>aman_07</h3>
                  <NewMessage>Sent you a message</NewMessage>
                </span>
              </div>
              <Dot />
            </Chat>
            <Chat>
              <div>
                <Avatar src={auth.user.profilePicture} />
                <span>
                  <h3>aman_07</h3>
                  <NewMessage>Sent you a message</NewMessage>
                </span>
              </div>
              <Dot />
            </Chat>
            <Chat>
              <div>
                <Avatar src={auth.user.profilePicture} />
                <span>
                  <h3>aman_07</h3>
                  <NewMessage>Sent you a message</NewMessage>
                </span>
              </div>
              <Dot />
            </Chat>
            <Chat>
              <div>
                <Avatar src={auth.user.profilePicture} />
                <span>
                  <h3>aman_07</h3>
                  <NewMessage>Sent you a message</NewMessage>
                </span>
              </div>
              <Dot />
            </Chat>
            <Chat>
              <div>
                <Avatar src={auth.user.profilePicture} />
                <span>
                  <h3>aman_07</h3>
                  <NewMessage>Sent you a message</NewMessage>
                </span>
              </div>
              <Dot />
            </Chat>
            <Chat>
              <div color="red">
                <Avatar src={auth.user.profilePicture} />
                <span>
                  <h3>aman_07</h3>
                  <NewMessage>Sent you a message</NewMessage>
                </span>
              </div>
              <Dot />
            </Chat>
          </ChatSection>
        </ContainerLeft>
        <ContainerRight>
          <InitialUi />
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
