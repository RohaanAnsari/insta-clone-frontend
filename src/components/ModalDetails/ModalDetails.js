import { Divider } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { deletePost } from '../../actions/post.actions';
import { Details, DetailsContent } from './styles';

const ModalDetails = ({ close, data }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const auth = useSelector((state) => state.auth);

  const closeModal = () => {
    close(false);
  };

  const postDelete = (e, id) => {
    e.preventDefault();
    dispatch(deletePost(id)).then(() => {
      close(false);
    });
  };

  return (
    <>
      <Details>
        {data.postedBy._id === auth.user._id && (
          <DetailsContent onClick={(e) => postDelete(e, data._id)}>
            <span>Delete</span>
          </DetailsContent>
        )}
        <Divider />
        <DetailsContent
          onClick={(e) => {
            history.push(`/post/${data._id}`);
          }}
        >
          <p>Go to post </p>
        </DetailsContent>
        <Divider />
        <DetailsContent onClick={closeModal}>
          <p>Cancel </p>
        </DetailsContent>
        <Divider />
      </Details>
    </>
  );
};

export default ModalDetails;
