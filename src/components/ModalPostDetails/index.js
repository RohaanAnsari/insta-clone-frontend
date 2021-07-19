import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import { Like, Liked, Chat, Share, Save, Emoji } from '../../svg';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getUserProfile } from '../../actions/user.actions.js';
import { likePost, unLikePost } from '../../actions/post.actions.js';
import {
  Wrapper,
  LeftContainer,
  RightContainer,
  Comment,
  Divider,
  Caption,
  Icons,
  Icon,
  Likes,
  CommentController,
  PostBtn,
} from './styles.js';
import moment from 'moment';

const ModalPostDetails = ({ item }) => {
  const auth = useSelector((state) => state.auth);
  const post = useSelector((state) => state.post);
  const dispatch = useDispatch();
  const history = useHistory();

  const like = (id) => {
    dispatch(likePost(id));
    console.log(id);
  };

  const unLike = (id) => {
    console.log(id);
    dispatch(unLikePost(id));
  };
  return (
    <Wrapper>
      <LeftContainer>
        <div>
          <img src={item.photo} alt="" />
        </div>
      </LeftContainer>
      <RightContainer>
        <header>
          <Avatar src={item.postedBy.profilePicture} />
          <h3
            onClick={() => {
              dispatch(getUserProfile(item.postedBy._id));
              history.push(`/profile/${item.postedBy._id}`);
            }}
          >
            {item.postedBy.name}
          </h3>
        </header>
        <Divider />
        <header>
          <Avatar src={item.postedBy.profilePicture} />
          <h3
            onClick={() => {
              dispatch(getUserProfile(item.postedBy._id));
              history.push(`/profile/${item.postedBy._id}`);
            }}
          >
            {item.postedBy.name}
          </h3>
          <Caption>{item.body}</Caption>
        </header>
        <Comment>
          {item.comments.map((comment) => {
            let date = new Date(comment.createdAt);
            return (
              <section>
                <div>
                  <Avatar src={comment.postedBy.profilePicture} />
                  <span className="userDetails">
                    <h3>{comment.postedBy.name}</h3>
                    <h4>{comment.text}</h4>
                  </span>
                </div>
                <span>{moment(date).startOf('seconds').fromNow()}</span>
              </section>
            );
          })}
        </Comment>
        <Divider />
        <Icons>
          <div>
            {post.liking ? (
              <Icons />
            ) : item.likes.includes(auth.user._id) ? (
              <Icon onClick={() => unLike(item._id)}>
                <Liked />
              </Icon>
            ) : (
              <Icon onClick={() => like(item._id)}>
                <Like />
              </Icon>
            )}
            <Icon>
              <Chat />
            </Icon>
            <Icon>
              <Share />
            </Icon>
          </div>

          <span>
            <Icon>
              <Save />
            </Icon>
          </span>
        </Icons>
        {item.likes.length === 1 ? (
          <Likes>1 Like</Likes>
        ) : (
          <Likes>{item.likes.length} Likes</Likes>
        )}
        <Divider />
        <CommentController>
          <Icon>
            <Emoji />
          </Icon>
          <input
            placeholder="Add a comment..."
            // value={cmnt}
            // onChange={(e) => setCmnt(e.target.value)}
          />
          <PostBtn
            // onClick={(e) => postComment(e, item._id)}
            type="submit"
          >
            Post
          </PostBtn>
        </CommentController>
      </RightContainer>
    </Wrapper>
  );
};

export default ModalPostDetails;
