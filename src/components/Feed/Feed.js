import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPosts } from '../../actions/post.actions.js';
import { Liked, Chat } from '../../svg';
import { Modal2, ModalPostDetails } from '../../components';
import { PostContainer, Wrapper, Img, Hover } from './styles.js';

const Feed = () => {
  const dispatch = useDispatch();
  const post = useSelector((state) => state.post);
  const [open, setOpen] = useState(false);
  const [item, setItem] = useState({});

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    dispatch(getAllPosts());
  }, []);

  return (
    <Wrapper>
      {post.posts.map((item) => (
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
      ))}
      <Modal2 open={open} handleClose={handleClose}>
        <ModalPostDetails item={item}></ModalPostDetails>
      </Modal2>
    </Wrapper>
  );
};

export default Feed;
