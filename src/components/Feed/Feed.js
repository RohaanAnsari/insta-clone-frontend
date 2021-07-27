import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPosts } from '../../actions/post.actions.js';
import { Liked, Chat } from '../../svg';
import { Modal2, ModalPostDetails } from '../../components';
import { PostContainer, Wrapper, Img, Hover } from './styles.js';
import Skeleton from '@material-ui/lab/Skeleton';
import { useLocation } from 'react-router-dom';

const Feed = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const stageCanvasRef = useRef(null);
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

  const [posts, setPosts] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setPosts(post.posts);
      // setPosts(null);
    }, 1000);
  });
  let width;
  useEffect(() => {
    if (stageCanvasRef.current) {
      let height = stageCanvasRef.current.offsetHeight;
      width = stageCanvasRef.current.offsetWidth;
      console.log('height', height, 'width', width);
    }
  }, [stageCanvasRef, window.addEventListener('resize', stageCanvasRef)]);

  const skeleton = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  return (
    <Wrapper ref={stageCanvasRef}>
      {posts === null
        ? skeleton.map((item) => (
            <Skeleton
              xcx={item}
              variant="rect"
              width={300}
              height={190}
              animation="wave"
              style={{ marginLeft: '10px', marginBottom: '10px' }}
            />
          ))
        : posts?.map((item) => (
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
