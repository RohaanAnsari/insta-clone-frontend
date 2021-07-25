import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { Liked, Chat } from '../../svg';
import { Modal2, ModalPostDetails } from '../../components';
import { PostContainer, Wrapper, Img, Hover } from '../Feed/styles';
import Skeleton from '@material-ui/lab/Skeleton';

const SavedPost = () => {
  const auth = useSelector((state) => state.auth);
  const [open, setOpen] = useState(false);
  const [item, setItem] = useState({});
  const [posts, setPosts] = useState(null);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    //  window.location.reload();
  }, []);

  useEffect(() => {
    setPosts(JSON.parse(localStorage.getItem('savedPosts')));
  }, []);

  return (
    <Wrapper>
      {posts === null && <Note>Saved posts will appear here</Note>}
      {React.Children.toArray(
        //   !posts !== null &&
        posts?.map((item) => {
          return (
            <>
              <PostContainer
                onClick={() => {
                  setItem(item);
                  handleOpen();
                }}
              >
                <Hover>
                  <div>
                    <Liked color="red" />
                    <p>{item.likes.length}</p>
                  </div>
                  <span>
                    <Chat color="white" />
                    <p>{item.comments.length}</p>
                  </span>
                </Hover>
                <Img>
                  <img src={item.photo} alt="" />
                </Img>
              </PostContainer>
            </>
          );
        })
      )}
      <Modal2 open={open} handleClose={handleClose}>
        <ModalPostDetails item={item}></ModalPostDetails>
      </Modal2>
    </Wrapper>
  );
};

export default SavedPost;

const Note = styled.p`
  margin: 0 auto;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 1px;
`;
