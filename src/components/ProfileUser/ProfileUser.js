import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getUserProfile, unFollow } from '../../actions/user.actions';
import { Loader } from '../../components';
import { follow } from '../../actions/user.actions';
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
} from './styles';
import Loader2 from '../Loader2/Loader2';

const ProfileUser = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const user = useSelector((state) => state.user);
  const [showBtn, setShowBtn] = useState(true);
  const { userid } = useParams();
  const x = localStorage.getItem('user');
  const y = JSON.parse(x);

  const followUser = (e, id, userId) => {
    e.preventDefault();
    dispatch(follow(id, userId)).then(() => {
      setShowBtn(true);
      console.log('followUser', showBtn);
    });
  };

  const unfollowUser = (id) => {
    dispatch(unFollow(id)).then(() => {
      setShowBtn(false);
      console.log('UnfollowUser', showBtn);
    });
  };

  useEffect(() => {
    dispatch(getUserProfile(userid));
  }, [userid]);

  if (user.gettingUser) {
    return (
      <div style={{ height: '100vh' }}>
        <Loader top="10rem" left="-1rem" />
      </div>
    );
  }

  return (
    <>
      {!user.gettingUser && (
        <Wrapper style={{ display: user.gettingUser ? 'none' : 'block' }}>
          <Header>
            <ProfilePicture src={user.user?.profilePicture} alt="" />
            <UserDetails>
              <Top>
                <h1>{user?.user?.name}</h1>
                <span>
                  {user.followReq ? (
                    <Loader2 left="-5rem" />
                  ) : !y.following.includes(user?.user?._id) ? (
                    <button
                      style={{ cursor: user.gettingUser && 'not-allowed' }}
                      onClick={(e) => followUser(e, user.user._id)}
                    >
                      Follow
                    </button>
                  ) : (
                    <button onClick={(e) => unfollowUser(user.user._id)}>
                      Unfollow
                    </button>
                  )}
                </span>
              </Top>
              <Mid>
                <Number>{user?.posts?.length}</Number>
                <Text>posts</Text>

                <Number>{user.user?.followers?.length}</Number>
                <Text>followers</Text>

                <Number>{user.user?.following?.length}</Number>
                <Text>following</Text>
              </Mid>
              <Bottom>
                <h2>{user.user?.fullName}</h2>
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
              user?.posts?.map((post) => (
                <Post>
                  <img src={post.photo} alt="" />
                </Post>
              ))
            )}
          </PostsContainer>
        </Wrapper>
      )}
    </>
  );
};
export default ProfileUser;
