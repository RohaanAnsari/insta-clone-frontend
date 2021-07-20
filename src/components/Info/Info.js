import React, { useState } from 'react';
import InfoIcon from '@material-ui/icons/Info';
import ContentCopyIcon from '@material-ui/icons/ContentCopy';
import Tooltip from '@material-ui/core/Tooltip';
import { Modal2 } from '../../components';
import { Wrapper, Container, Box, Label, Text } from './styles';

const Info = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Wrapper>
      <InfoIcon onClick={handleOpen} />
      <Modal2 open={open} handleClose={handleClose}>
        <Container>
          <h2>Demo Login Credentials for Guest Account</h2>
          <Box>
            <Label>Email :</Label>
            <Text mr="1px"> guest@instaclone.com</Text>

            <span>
              <ContentCopyIcon />
            </span>
          </Box>
          <Box>
            <Label>Password :</Label>
            <Text mr="13rem"> 123456</Text>

            <span>
              <ContentCopyIcon />
            </span>
          </Box>
          <div style={{ marginBottom: '4rem' }} />
        </Container>
      </Modal2>
    </Wrapper>
  );
};

export default Info;
