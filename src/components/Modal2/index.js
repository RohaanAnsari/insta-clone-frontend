import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Grow from '@material-ui/core/Grow';
import styled from 'styled-components/macro';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0px',
  },
}));

export default function Modal2({ handleClose, open, children }) {
  const classes = useStyles();
  return (
    <Main>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Grow in={open}>
          <Wrapper>{children}</Wrapper>
        </Grow>
      </Modal>
    </Main>
  );
}

export const Wrapper = styled.div`
  background: transparent;
  width: max-content;
  border: none;

  &:active,
  &:target,
  &:focus,
  &:hover,
  &:visited,
  &:focus-within {
    border: none;
  }
`;

export const Main = styled.div`
  background: transparent;
  width: max-content;
  border: none;

  &:active,
  &:target,
  &:focus,
  &:hover,
  &:visited,
  &:focus-within {
    border: none;
  }
`;
