import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Grow from '@material-ui/core/Grow';
import Fade from '@material-ui/core/Fade';
import Zoom from '@material-ui/core/Zoom';
import Slide from '@material-ui/core/Slide';
import styled from 'styled-components/macro';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0px',
  },
}));

export default function Modal2({
  handleClose,
  open,
  children,

  zoom,
}) {
  const classes = useStyles();
  return (
    <Main>
      {!zoom && (
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          style={{ zIndex: '9999999999' }}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Grow in={open}>
            <Wrapper>{children}</Wrapper>
          </Grow>
        </Modal>
      )}
      {zoom && (
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          style={{ zIndex: '9999999999' }}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Zoom in={open}>
            <Wrapper>{children}</Wrapper>
          </Zoom>
        </Modal>
      )}
    </Main>
  );
}

export const Wrapper = styled.div`
  background: transparent;
  width: max-content;
  border: none;
  position: relative;
  z-index: 100000;

  &:active,
  &:target,
  &:focus,
  &:hover,
  &:visited,
  &:focus-within,
  &:focus-visible {
    border: none;
    outline: none;
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
  &:focus-within,
  &:focus-visible {
    border: none;
    outline: none;
  }
`;
