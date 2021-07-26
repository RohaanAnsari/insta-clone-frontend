import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import { Like, Liked, Chat, Share, Save, Emoji, Saved } from '../../svg';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getUserProfile } from '../../actions/user.actions.js';
import {
  likePost,
  setPostDetails,
  unLikePost,
} from '../../actions/post.actions.js';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
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
import { savePost, unsavePost } from '../../actions/auth.actions';
import Modal2 from '../Modal2';
import ModalDetails from '../ModalDetails/ModalDetails';

const ModalPostDetails = ({ item }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const auth = useSelector((state) => state.auth);
  const post = useSelector((state) => state.post);
  const [openDelete, setOpenDelete] = useState(false);
  const [details, setDetails] = useState({});
  const savedPosts = localStorage.getItem('ids');

  const like = (id) => {
    dispatch(likePost(id));
    console.log(id);
  };

  const unLike = (id) => {
    console.log(id);
    dispatch(unLikePost(id));
  };

  const openDeleteModal = () => {
    setOpenDelete(true);
  };

  const closeDeleteModal = () => {
    setOpenDelete(false);
  };
  return (
    <Wrapper>
      <LeftContainer>
        <div>
          <img src={item.photo} alt="" />
        </div>
      </LeftContainer>
      <RightContainer>
        <Modal2 zoom={true} open={openDelete} handleClose={closeDeleteModal}>
          <ModalDetails close={setOpenDelete} data={item} />
        </Modal2>
        <header>
          <span>
            <Avatar src={item.postedBy.profilePicture} />
            <h3
              onClick={() => {
                dispatch(getUserProfile(item.postedBy._id));
                history.push(`/profile/${item.postedBy._id}`);
              }}
            >
              {item.postedBy.name}
            </h3>
          </span>
          <span
            onClick={() => {
              openDeleteModal();
              setDetails(item);
              dispatch(setPostDetails(item));
            }}
          >
            <MoreHorizIcon />
          </span>
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
            {savedPosts?.includes(item._id) ? (
              <Icon
                marginRight="0"
                onClick={() => {
                  console.log('item', item._id);
                  dispatch(unsavePost(item._id));
                }}
              >
                <Saved />
              </Icon>
            ) : (
              <Icon
                marginRight="0"
                onClick={() => {
                  console.log('item', item._id);
                  dispatch(savePost(item._id));
                }}
              >
                <Save />
              </Icon>
            )}
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
