import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Avatar from '@material-ui/core/Avatar';
import { Like, Liked, Chat, Save, Share, Emoji, Saved } from '../../svg';
import { CustomModal } from '../../components';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import {
  Wrapper,
  ContentLeft,
  ContentRight,
  Post,
  Icon,
  Img,
  Buttons,
  BtnsLeft,
  BtnsRight,
  Button,
  CommentSection,
  SuggestionsContainer,
  Suggestions,
  AddModalButton,
  ModalContainer,
  TextInput,
  UploadImage,
  Caption,
  Title,
  LikesNumber,
  CommentDetails,
  Comment,
  PostedBy,
  ViewComments,
} from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { savePost, signout, unsavePost } from '../../actions/auth.actions';
import {
  createPost,
  likePost,
  unLikePost,
  comment,
  deletePost,
  deleteComment,
  getMyFollowingsPost,
  getMyPost,
  setPostDetails,
} from '../../actions/post.actions';
import Loader from '../Loader/Loader';
import Loader2 from '../Loader2/Loader2';
import { useHistory } from 'react-router-dom';
import { getAllUsers, getUserProfile } from '../../actions/user.actions';
import ReactScrollableFeed from 'react-scrollable-feed';
import moment from 'moment';
import Modal2 from '../Modal2';
import ModalPostDetails from '../ModalPostDetails';
import SimplePopover from '../Popover/Popover';
import { Delete } from '../Messages/styles';
import { Modal } from '@material-ui/core';
import ModalDetails from '../ModalDetails/ModalDetails';

const Home = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const auth = useSelector((state) => state.auth);
  const post = useSelector((state) => state.post);
  const user = useSelector((state) => state.user);

  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [image, setImage] = useState('');
  const [url, setUrl] = useState('');
  const [error, setError] = useState(post.createPostError);
  const [message, setMessage] = useState('');
  const [bool, setBool] = useState(post.creating);

  const [openModal, setOpenModal] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [viewCommentsModal, setViewCommentsModal] = useState({});
  const [item, setItem] = useState({});

  const handleOpenModal = () => {
    setOpenModal(true);
  };
  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const like = (id) => {
    dispatch(likePost(id));
  };

  const unLike = (id) => {
    dispatch(unLikePost(id));
  };

  const postDetails = () => {
    setBool(true);
    if (!title) {
      setError('Title required');
      setBool(false);
      return;
    }
    if (!body) {
      setError('Body required');
      setBool(false);
      return;
    }
    const data = new FormData();
    data.append('file', image);
    data.append('upload_preset', 'insta-clone');
    data.append('cloud_name', 'cny');
    setTimeout(() => {
      setOpen(false);
    }, 1500);

    fetch('https://api.cloudinary.com/v1_1/cdy/image/upload', {
      method: 'post',
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          console.log(data.url);
          setUrl(data.url);
          setOpen(false);
        }
        if (data.error) {
          setBool(false);
          setError(`${data.error.message}`);
          console.log(data.error);
        }
      })
      .catch((err) => {
        console.log(err);
        setBool(false);
      });
  };

  const postComment = (e, cmnt, postId) => {
    if (cmnt === '') {
      return;
    }
    if (!cmnt.replace(/\s/g, '')) {
      return;
    }
    const Comment = {
      text: cmnt,
      postId,
    };
    e.target.reset();
    dispatch(comment(Comment));

    return;
  };

  const commentDelete = (e, postId, commentId) => {
    e.preventDefault();
    dispatch(deleteComment(postId, commentId));
    console.log(postId, commentId);
  };

  const openDeleteModal = () => {
    setOpenDelete(true);
  };

  const closeDeleteModal = () => {
    setOpenDelete(false);
  };

  useEffect(() => {
    dispatch(getAllUsers());
    dispatch(getMyFollowingsPost());
    dispatch(getMyPost());
    setError('');
    setUrl('');
    setBool(false);
    setOpen(false);
    setTitle('');
    setBody('');
    setImage('');
    setUrl('');
    setMessage('');
  }, [auth?.user]);

  useEffect(() => {
    if (url) {
      const data = {
        title,
        body,
        pic: url,
      };
      dispatch(createPost(data)).then(() => {
        setUrl('');
        setBool(false);
        setOpen(false);
        setTitle('');
        setBody('');
        setImage('');
        setUrl('');
        setError('');
      });
    }
  }, [url]);

  const savedPosts = localStorage.getItem('ids');

  return (
    <Wrapper>
      <Modal2 zoom={true} open={openDelete} handleClose={closeDeleteModal}>
        <ModalDetails close={setOpenDelete} data={item} />
      </Modal2>
      <ContentLeft>
        {post.myFollowingsPost.length === 0 && (
          <ZeroPost>
            <h1>Follow some people to see their posts here</h1>
            <span>
              See posts from other people
              <p
                onClick={() => {
                  history.push('/feed');
                  localStorage.setItem('location', 'feed');
                }}
              >
                Go to feed
              </p>
            </span>
          </ZeroPost>
        )}
        {React.Children.toArray(
          post.myFollowingsPost?.map((item) => {
            return (
              <Post>
                <header>
                  <div>
                    <Avatar src={item.postedBy.profilePicture} alt="profile" />
                    <Title>
                      <div
                        onClick={() => {
                          dispatch(getUserProfile(item.postedBy._id));
                        }}
                      >
                        {item.postedBy.name && (
                          <PostedBy
                            to={
                              item.postedBy._id === auth.user._id
                                ? '/profile'
                                : `/profile/${item.postedBy._id}`
                            }
                          >
                            {item.postedBy.name}
                          </PostedBy>
                        )}
                      </div>
                      <p>{item.title}</p>
                    </Title>
                  </div>

                  <Icon
                    onClick={() => {
                      openDeleteModal();
                      setItem(item);
                      dispatch(setPostDetails(item));
                    }}
                  >
                    <MoreHorizIcon />
                  </Icon>
                </header>
                <Img>
                  <img src={item.photo} alt="" />
                </Img>
                <Caption>
                  <div
                    onClick={() => {
                      console.log(item.postedBy._id);
                      dispatch(getUserProfile(item.postedBy._id));
                      history.push(`/profile/${item.postedBy._id}`);
                    }}
                  >
                    {item.postedBy.name}
                  </div>
                  <span> {item.body}</span>
                </Caption>
                <Buttons>
                  <BtnsLeft>
                    {post.liking ? (
                      <Loader2 />
                    ) : item.likes?.includes(auth.user._id) ? (
                      <Button onClick={() => unLike(item._id)}>
                        <Liked />
                      </Button>
                    ) : (
                      <Button onClick={() => like(item._id)}>
                        <Like />
                      </Button>
                    )}
                    <Button>
                      <Chat />
                    </Button>
                    <Button>
                      <Share />
                    </Button>
                  </BtnsLeft>
                  <BtnsRight>
                    {savedPosts?.includes(item._id) ? (
                      <Button
                        marginRight="0"
                        onClick={() => {
                          console.log('item', item._id);
                          dispatch(unsavePost(item._id));
                        }}
                      >
                        <Saved />
                      </Button>
                    ) : (
                      <Button
                        marginRight="0"
                        onClick={() => {
                          dispatch(savePost(item._id));
                        }}
                      >
                        <Save />
                      </Button>
                    )}
                  </BtnsRight>
                </Buttons>
                {item.likes.length === 1 && <LikesNumber> 1 Like</LikesNumber>}
                {item.likes.length > 1 && (
                  <LikesNumber>{item.likes.length} Likes</LikesNumber>
                )}

                {item.comments.length > 1 && (
                  <ViewComments
                    onClick={() => {
                      handleOpenModal();
                      setViewCommentsModal(item);
                    }}
                  >
                    {`View all ${item.comments.length} comments`}
                  </ViewComments>
                )}
                <Modal2 open={openModal} handleClose={handleCloseModal}>
                  <ModalPostDetails item={viewCommentsModal}></ModalPostDetails>
                </Modal2>
                {React.Children.toArray(
                  <CommentDetails forceScroll="true">
                    <ReactScrollableFeed className="scrollable-div">
                      {item.comments.slice(-3).map((comment) => {
                        let date = new Date(comment.createdAt);
                        return (
                          <>
                            <Comment>
                              <div>
                                <p className="postedBy">
                                  {comment.postedBy.name}
                                </p>
                                <p style={{ marginLeft: '4px' }}>
                                  {comment.text}
                                </p>
                              </div>
                              <span>
                                {comment.postedBy._id === auth.user._id && (
                                  <DeleteIcon
                                    style={{
                                      cursor: 'pointer',
                                      marginBottom: '4px',
                                    }}
                                    onClick={(e) =>
                                      commentDelete(e, item._id, comment._id)
                                    }
                                  />
                                )}
                                <p
                                  className="timeAgo"
                                  style={{
                                    color: post.deleting && '#8e8e8e45',
                                  }}
                                >
                                  {moment(date).startOf('seconds').fromNow()}
                                </p>
                              </span>
                            </Comment>
                          </>
                        );
                      })}
                    </ReactScrollableFeed>
                  </CommentDetails>
                )}
                <CommentSection>
                  <div>
                    <Button>
                      <Emoji />
                    </Button>
                  </div>
                  <form
                    id="form"
                    onSubmit={(e) => {
                      e.preventDefault();
                      postComment(e, e.target[0].value, item._id);
                    }}
                  >
                    <input placeholder="Add a comment..." />
                  </form>
                </CommentSection>
              </Post>
            );
          })
        )}
      </ContentLeft>
      <ContentRight>
        <header>
          <div>
            <Avatar src={auth.user.profilePicture} alt="profile" />
            <span
              onClick={() => {
                history.push(`/profile`);
              }}
            >
              <h4>{auth.user.name}</h4>
              <p>{auth.user.fullName}</p>
            </span>
          </div>
          <button onClick={() => dispatch(signout())}>Signout</button>
        </header>
        <section>
          <div>
            <h3>Suggestions for you</h3>
            <p>See All</p>
          </div>
        </section>
        {user.allUsers.slice(-5).map((user) => (
          <SuggestionsContainer>
            {user._id !== auth.user._id && (
              <Suggestions>
                <>
                  <div>
                    <Avatar src={user.profilePicture} alt="profile" />
                    <h4
                      style={{ marginLeft: '10px' }}
                      onClick={() => {
                        dispatch(getUserProfile(user._id));
                        history.push(`/profile/${user._id}`);
                      }}
                    >
                      {user.name}
                    </h4>
                  </div>
                  <button
                    onClick={() => {
                      dispatch(getUserProfile(user._id));
                      history.push(`/profile/${user._id}`);
                    }}
                  >
                    View
                  </button>
                </>
              </Suggestions>
            )}
          </SuggestionsContainer>
        ))}
        {post.creating ? (
          <Loader left="-1remm" />
        ) : (
          <>
            <AddModalButton onClick={handleOpen}>Add Post</AddModalButton>
            {error && <Error style={{ marginTop: '15px' }}>{error}</Error>}
          </>
        )}
        <CustomModal open={open} handleClose={handleClose}>
          <ModalContainer>
            <h1>Add New Post</h1>
            {message && <Message>{message}</Message>}
            {error && <Error none={message && 'none'}>{error}</Error>}
            <TextInput
              required
              variant="outlined"
              placeholder="Title"
              vaule={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <TextInput
              type="text"
              variant="outlined"
              placeholder="Body"
              vaule={body}
              onChange={(e) => setBody(e.target.value)}
            />
            <UploadImage>
              <input
                type="file"
                onChange={(e) => setImage(e.target.files[0])}
              />
            </UploadImage>

            {!bool ? (
              <button onClick={postDetails}>Submit Post</button>
            ) : (
              <div>Hold on a sec</div>
            )}
          </ModalContainer>
        </CustomModal>
      </ContentRight>
    </Wrapper>
  );
};

export default Home;

export const Error = styled.div`
  text-align: center;
  text-transform: capitalize;
  width: 100%;
  position: relative;
  color: #dc143c;
  font-size: 17px;
  letter-spacing: 0.77px;
  font-weight: 600;
  margin: -14px auto 11px;
  display: ${({ none }) => none || 'block'};
`;

export const Message = styled.div`
  text-align: center;
  text-transform: capitalize;
  width: 100%;
  position: relative;
  color: Green;
  font-size: 18px;
  letter-spacing: 1.1px;
  font-weight: 600;
  margin: -14px auto 11px;
  display: ${({ none }) => none || 'block'};
`;

export const ZeroPost = styled.div`
  margin-top: 2rem;
  border: 4px dashed #00000080;

  border-left-style: solid;

  padding: 2rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transition: border-color 0.5s ease-in-out;

  &:hover {
    border-color: #000000;
    border-bottom-style: dashed;
    h2 {
      font-weight: 600;
    }
  }
  h1 {
    font-size: 17px;
    font-weight: 600;
    letter-spacing: 0.7px;
    &:hover {
      color: #00000075;
    }
  }
  span {
    margin-top: 10px;
    text-align: center;
    font-style: capitalize;
    font-size: 14px;

    p {
      font-size: 13px;
      color: #0095f6;
      cursor: pointer;
    }
  }
`;
