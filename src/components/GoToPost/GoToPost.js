import { Avatar } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import moment from 'moment';
import { Like, Liked, Chat, Share, Save, Emoji, Saved } from '../../svg';
import { likePost, unLikePost } from '../../actions/post.actions.js';
import { savePost, unsavePost } from '../../actions/auth.actions';
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
import { getUserProfile } from '../../actions/user.actions.js';

const GoToPost = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const auth = useSelector((state) => state.auth);
  const post = useSelector((state) => state.post);

  const savedPosts = localStorage.getItem('ids');

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
          <img src={post.postDetails.photo} alt="" />
        </div>
      </LeftContainer>
      <RightContainer>
        <header>
          <Avatar src={post.postDetails.postedBy?.profilePicture} />
          <h3
            onClick={() => {
              dispatch(getUserProfile(post.postDetails.postedBy._id));
              history.push(`/profile/${post.postDetails.postedBy._id}`);
            }}
          >
            {post.postDetails.postedBy.name}
          </h3>
        </header>
        <Divider />
        <header>
          <Avatar src={post.postDetails.postedBy.profilePicture} />
          <h3
            onClick={() => {
              dispatch(getUserProfile(post.postDetails.postedBy._id));
              history.push(`/profile/${post.postDetails.postedBy._id}`);
            }}
          >
            {post.postDetails.postedBy.name}
          </h3>
          <Caption>{post.postDetails.body}</Caption>
        </header>
        <Comment>
          {post.postDetails.comments.map((comment) => {
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
            ) : post.postDetails.likes.includes(auth.user._id) ? (
              <Icon>
                <Liked />
              </Icon>
            ) : (
              <Icon>
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
            {savedPosts?.includes(post.postDetails._id) ? (
              <Icon
                marginRight="0"
                onClick={() => {
                  console.log('item', post.postDetails._id);
                  dispatch(unsavePost(post.postDetails._id));
                }}
              >
                <Saved />
              </Icon>
            ) : (
              <Icon
                marginRight="0"
                onClick={() => {
                  console.log('item', post.postDetails._id);
                  dispatch(savePost(post.postDetails._id));
                }}
              >
                <Save />
              </Icon>
            )}
          </span>
        </Icons>
        {post.postDetails.likes.length === 1 ? (
          <Likes>1 Like</Likes>
        ) : (
          <Likes>{post.postDetails.likes.length} Likes</Likes>
        )}
        <Divider />
        <CommentController>
          <Icon>
            <Emoji />
          </Icon>
          <input placeholder="Add a comment..." />
          <PostBtn type="submit">Post</PostBtn>
        </CommentController>
      </RightContainer>
    </Wrapper>
  );
};

export default GoToPost;
