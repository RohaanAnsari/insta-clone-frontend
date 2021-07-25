import { postConstants } from '../actions/constants';
import axios from '../components/axios/axios';

const getAllPosts = () => {
  return async (dispatch) => {
    const res = await axios.get('/allpost');
    if (res.status === 200) {
      dispatch({
        type: postConstants.GET_POSTS,
        payload: {
          posts: res.data.posts,
        },
      });
    }
  };
};

export const getMyPost = () => {
  return async (dispatch) => {
    const res = await axios.get('/mypost');
    //  console.log('res after mypost', res);
    if (res.status === 200) {
      const { mypost } = res.data;
      dispatch({
        type: postConstants.GET_MY_POST,
        payload: {
          mypost,
        },
      });
    }
  };
};

export const createPost = (data) => {
  return async (dispatch) => {
    dispatch({ type: postConstants.CREATE_POST_REQUEST });
    const res = await axios.post('/createpost', {
      ...data,
    });

    if (res.status === 201) {
      dispatch(getAllPosts());
      dispatch({ type: postConstants.CREATE_POST_SUCCESS });
      dispatch(getMyFollowingsPost());
    } else if (res.status === 206) {
      dispatch({
        type: postConstants.CREATE_POST_FAILURE,
        payload: {
          error: res.data.error,
        },
      });
    }
    // console.log('res after createPost', res);
  };
};

export const likePost = (id) => {
  return async (dispatch) => {
    dispatch({ type: postConstants.LIKE_POST_REQUEST });
    const res = await axios.put('/like', { postId: id });
    if (res.status === 200) {
      dispatch(getMyFollowingsPost());
      // console.log('likePost data', res.data);
      dispatch({ type: postConstants.LIKE_POST });
    }
  };
};

export const unLikePost = (id) => {
  return async (dispatch) => {
    dispatch({ type: postConstants.UNLIKE_POST_REQUEST });
    const res = await axios.put('/unlike', { postId: id });
    dispatch(getMyFollowingsPost());
    console.log('DisssslikePost data', res.data);
    dispatch({ type: postConstants.UNLIKE_POST });
  };
};

export const comment = (Comment) => {
  return async (dispatch) => {
    const res = await axios.put('/comment', {
      text: Comment.text,
      postId: Comment.postId,
    });
    if (res.status === 200) {
      dispatch(getMyFollowingsPost());
    }
    console.log(res);
  };
};

export const deletePost = (id) => {
  return async (dispatch) => {
    const res = await axios.delete(`/deletepost/${id}`);

    if (res.status === 200) {
      dispatch(getMyFollowingsPost());
      console.log(res);
    }
    console.log(res);
  };
};

export const deleteComment = (postId, commentId) => {
  return async (dispatch) => {
    dispatch({ type: postConstants.DELETE_COMMENT_REQUEST });
    const res = await axios.delete(`/deletecomment/${postId}/${commentId}`);

    if (res.status === 200) {
      dispatch(getMyFollowingsPost());
      dispatch({ type: postConstants.DELETE_COMMENT });
    }
  };
};

const getMyFollowingsPost = () => {
  return async (dispatch) => {
    const res = await axios.get('/getsubposts');
    // console.log(res);
    dispatch({ type: postConstants.GET_MYFOLLOWINGS_POST_REQUEST });
    if (res.status === 200) {
      const { posts } = res.data;
      dispatch({
        type: postConstants.GET_MYFOLLOWINGS_POST_SUCCESS,
        payload: {
          posts,
        },
      });
    }
  };
};

export { getAllPosts, getMyFollowingsPost };
