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
  Container,
  Content,
} from './styles';
import { useSelector, useDispatch } from 'react-redux';
import { getMyPost } from '../../actions/post.actions';
import {
  signout,
  updateProfilePicture,
  updateBio,
} from '../../actions/auth.actions';
import {
  Modal2,
  ModalPostDetails,
  ModalSmall,
  Popover,
} from '../../components';
import { getFollowers, getFollowings } from '../../actions/user.actions';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { IGTV, Posts, Save, Tagged } from '../../svg';
import { useHistory } from 'react-router-dom';

const Profile = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const auth = useSelector((state) => state.auth);
  const user = useSelector((state) => state.user);
  const post = useSelector((state) => state.post);
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [followerModal, setFollowerModal] = useState(false);
  const [followingModal, setFollowingModal] = useState(false);
  const [item, setItem] = useState({});

  const [image, setImage] = useState();
  const [bio, setBio] = useState('');
  const [url, setUrl] = useState('');
  const [error, setError] = useState('');
  const [bool, setBool] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

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

  const openFollower = () => {
    setFollowerModal(true);
  };

  const closeFollower = () => {
    setFollowerModal(false);
  };

  const openFollowing = () => {
    setFollowingModal(true);
  };

  const closeFollowing = () => {
    setFollowingModal(false);
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

  const openPopOver = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const closePopOver = () => {
    setAnchorEl(null);
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

  useEffect(() => {
    dispatch(getFollowers(auth.user._id));
    dispatch(getFollowings(auth.user._id));
  }, []);

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
              <div>
                <h1>{auth.user.name}</h1>
                <button onClick={handleOpen}>Edit Profile</button>
                <button onClick={() => dispatch(signout())}>Signout</button>
              </div>
              <span>
                <span onClick={openPopOver}>
                  <MoreVertIcon />
                </span>
                <Popover
                  transformVO="top"
                  anchorVO="top"
                  anchorEl={anchorEl}
                  handleClose={closePopOver}
                >
                  <Container>
                    <Content>
                      <div>
                        <Posts height="24px" width="24px" />
                        <p>Posts </p>
                      </div>
                    </Content>
                    <Content>
                      <div
                        onClick={() => {
                          history.push('/savedpost');
                        }}
                      >
                        <Save fill="#8e8e8e" />
                        <p>Saved Posts</p>
                      </div>
                    </Content>
                    <Content>
                      <div>
                        <IGTV height="26px" width="26px" />
                        <p>IGTV </p>
                      </div>
                    </Content>
                    <Content>
                      <div>
                        <Tagged height="26px" width="26px" />
                        <p>Tagged</p>
                      </div>
                    </Content>
                  </Container>
                </Popover>
              </span>
            </Top>
            <Mid>
              <Number>{post.myPosts.length}</Number>
              <Text>posts</Text>

              <Number>{user?.followers.length}</Number>
              <Text onClick={openFollower}>followers</Text>

              <Number>{user?.followings?.length}</Number>
              <Text onClick={openFollowing}>following</Text>
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
      {user?.followers?.length > 0 && (
        <Modal2 open={followerModal} handleClose={closeFollower}>
          <ModalSmall details={user.followers} follower={true} />
        </Modal2>
      )}

      {user?.followings?.length > 0 && (
        <Modal2 open={followingModal} handleClose={closeFollowing}>
          <ModalSmall details={user.followings} following={true} />
        </Modal2>
      )}
    </>
  );
};
export default Profile;
