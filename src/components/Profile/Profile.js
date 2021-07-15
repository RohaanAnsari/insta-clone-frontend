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
import {
  signout,
  updateProfilePicture,
  updateBio,
} from '../../actions/auth.actions';
import { Modal2, ModalPostDetails, Loader2 } from '../../components';

const Profile = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const post = useSelector((state) => state.post);
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [item, setItem] = useState({});

  const [image, setImage] = useState();
  const [bio, setBio] = useState('');
  const [url, setUrl] = useState('');
  const [error, setError] = useState('');
  const [bool, setBool] = useState(false);

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

  const profileUpdate = () => {
    const data = new FormData();
    data.append('file', image);
    data.append('upload_preset', 'insta-clone');
    data.append('cloud_name', 'cny');
    setBool(true);
    fetch('https://api.cloudinary.com/v1_1/cdy/image/upload', {
      method: 'post',
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data) {
          setUrl(data.url);
        }
        if (data.error) {
          setBool(false);
          setError(`${data.error.message}`);
          console.log(data.error);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const bioUpdate = (bio) => {
    dispatch(updateBio(bio));
  };

  useEffect(() => {
    if (url) {
      dispatch(updateProfilePicture(url));
    }
  }, [url]);

  useEffect(() => {
    dispatch(getMyPost());
    setError('');
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
                <input
                  type="file"
                  onChange={(e) => setImage(e.target.files[0])}
                />
              </div>
              <button onClick={() => profileUpdate()}>Update Picture</button>
            </header>
            <span>
              <p>Update Bio</p>
              <input
                value={bio}
                placeholder={auth.user.bio}
                onChange={(e) => setBio(e.target.value)}
              />
              <button onClick={() => bioUpdate(bio)}>Update Bio</button>
            </span>

            {error && (
              <h3
                style={{
                  margin: '14px 6px 0px',
                  color: 'red',
                  fontWeight: 600,
                  letterSpacing: '0.5px',
                }}
              >
                {error}
              </h3>
            )}
            {bool && (
              <h3
                style={{
                  margin: '14px 8px 0px',
                  color: '	#2E8B57',
                  fontWeight: 900,
                  fontSize: '14px',
                  letterSpacing: '0.5px',
                }}
              >
                Sit tight... this might take a little while
              </h3>
            )}
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
              <p>{auth.user.bio && auth.user.bio}</p>
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
