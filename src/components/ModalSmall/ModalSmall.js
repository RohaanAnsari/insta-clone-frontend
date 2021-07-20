import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import { NewChat } from '../../svg';
import { useDispatch, useSelector } from 'react-redux';
import {
  NewChatModalWrapper,
  Content,
  Icon,
  Parent,
  FullName,
  StyledBtn,
} from './styles';
import { newConversation } from '../../actions/conversation.actions';
import { getFollowings, unFollow } from '../../actions/user.actions';

const ModalSmall = ({
  details,
  data,
  onClick,
  onBtnClick,
  follower,
  following,
}) => {
  const auth = useSelector((state) => state.auth);
  const user = useSelector((state) => state.user);
  const conversation = useSelector((state) => state.conversation);
  const dispatch = useDispatch();
  let newData2;

  if (data) {
    const members = conversation.chats.map((e) => e.members);
    let allMembers = [].concat.apply([], members);
    const newData = data
      .filter((item) => item._id !== auth.user._id)
      .map((item) => {
        if (!allMembers.includes(item._id)) {
          return item;
        }
      });

    newData2 = newData.filter((item) => item !== undefined);
  }

  const startNewConversation = (id) => {
    dispatch(newConversation(auth.user._id, id));
  };

  const UNfollow = (id) => {
    console.log(id);
    dispatch(unFollow(id)).then(() => dispatch(getFollowings(auth.user._id)));
  };

  return (
    <NewChatModalWrapper>
      {data
        ? data &&
          newData2.map((user) => {
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
                    <Icon
                      onClick={() => {
                        startNewConversation(user._id);
                      }}
                    >
                      <NewChat />
                    </Icon>
                  </span>
                </Content>
              </Parent>
            );
          })
        : details.map((user) => {
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
                    {following && (
                      <StyledBtn
                        style={{ cursor: user.followReq ? 'wait' : 'normal' }}
                        onBtnClick={onBtnClick}
                        onClick={() => UNfollow(user._id)}
                      >
                        Following
                      </StyledBtn>
                    )}
                    {follower && <div></div>}
                  </span>
                </Content>
              </Parent>
            );
          })}
    </NewChatModalWrapper>
  );
};

export default ModalSmall;
