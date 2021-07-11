import React, { useEffect, useState } from 'react';
import {
  Wrapper,
  Header,
  ProfilePicture,
  UserDetails,
  Top,
  Mid,
  Bottom,
  Text,
  Number,
  Divider,
  PostsContainer,
  Post,
  UpdateModal,
} from './styles';
import { useSelector, useDispatch } from 'react-redux';
import { getMyPost } from '../../actions/post.actions';
import { signout } from '../../actions/auth.actions';
import { Modal2, ModalPostDetails } from '../../components';

const Profile = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const post = useSelector((state) => state.post);
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [item, setItem] = useState({});

  const handleOpenModal = () => {
    setOpenModal(true);
    console.log(openModal);
  };

  const handleCloseModal = () => {
    console.log(openModal);
    setOpenModal(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    dispatch(getMyPost());
  }, [post.myPosts.length]);

  return (
    <>
      <Wrapper>
        <Modal2 open={open} handleClose={handleClose}>
          <UpdateModal>
            <header>
              <ProfilePicture src={auth.user.profilePicture} alt="" />
              <div>
                <h1>Choose profile picture</h1>
                <input type="file" />
              </div>
            </header>
            <span>
              <p>Update Bio</p>
              <input />
            </span>
          </UpdateModal>
        </Modal2>
        <Header>
          <ProfilePicture src={auth.user.profilePicture} alt="" />
          <UserDetails>
            <Top>
              <h1>{auth.user.name}</h1>
              <button onClick={handleOpen}>Edit Profile</button>
              <button onClick={() => dispatch(signout())}>Signout</button>
            </Top>
            <Mid>
              <Number>{post.myPosts.length}</Number>
              <Text>posts</Text>

              <Number>{auth.user.followers?.length}</Number>
              <Text>followers</Text>

              <Number>{auth.user.following?.length}</Number>
              <Text>following</Text>
            </Mid>
            <Bottom>
              <h2>{auth.user.fullName}</h2>
              <p>
                You ain't know my level even if we on the same building on the
                same floor.
              </p>
            </Bottom>
          </UserDetails>
        </Header>
        <Divider />
        <PostsContainer>
          {React.Children.toArray(
            post.myPosts.map((post) => (
              <Post
                onClick={() => {
                  setItem(post);
                  handleOpenModal();
                }}
              >
                <img src={post.photo} alt="" />
              </Post>
            ))
          )}
        </PostsContainer>
      </Wrapper>
      <Modal2 open={openModal} handleClose={handleCloseModal}>
        <ModalPostDetails item={item} />
      </Modal2>
    </>
  );
};
export default Profile;
