import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import { NewChat } from '../../svg';
import { useDispatch, useSelector } from 'react-redux';
import { NewChatModalWrapper, Content, Icon, Parent, FullName } from './styles';
import { newConversation } from '../../actions/conversation.actions';

const ModalSmall = ({ data, onClick, onBtnClick, follow }) => {
  const auth = useSelector((state) => state.auth);
  const conversation = useSelector((state) => state.conversation);

  const dispatch = useDispatch();

  const members = conversation.chats.map((e) => e.members);
  let allMembers = [].concat.apply([], members);

  const newData = data
    .filter((item) => item._id !== auth.user._id)
    .map((item) => {
      if (!allMembers.includes(item._id)) {
        return item;
      }
    });

  const newData2 = newData.filter((item) => item !== undefined);

  const startNewConversation = (id) => {
    dispatch(newConversation(auth.user._id, id));
  };

  return (
    <NewChatModalWrapper>
      {newData2.map((user) => {
        return (
          <Parent>
            <Content>
              <div className="main" onClick={onClick}>
                <Avatar src={user.profilePicture} />
                <span>
                  <h3> {user.name}</h3>
                  <FullName>{user.fullName}</FullName>
                </span>
              </div>
              <span>
                {follow ? (
                  <button onBtnClick={onBtnClick}>Follow</button>
                ) : (
                  <Icon
                    onClick={() => {
                      startNewConversation(user._id);
                    }}
                  >
                    <NewChat />
                  </Icon>
                )}
              </span>
            </Content>
          </Parent>
        );
      })}
    </NewChatModalWrapper>
  );
};

export default ModalSmall;
