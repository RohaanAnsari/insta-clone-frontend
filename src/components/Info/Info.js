import React, { useState } from 'react';
import InfoIcon from '@material-ui/icons/Info';
import ContentCopyIcon from '@material-ui/icons/ContentCopy';
import { Modal2 } from '../../components';
import { Wrapper, Container, Box, Label, Text } from './styles';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import ReactTooltip from 'react-tooltip';

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
            <Text ml="10px"> guest@instaclone.com</Text>

            <span>
              <CopyToClipboard text="guest@instaclone.com">
                <ContentCopyIcon />
              </CopyToClipboard>
            </span>
          </Box>
          <Box>
            <Label>Password :</Label>
            <Text mr="13rem"> 123456</Text>

            <span>
              <CopyToClipboard text="123456">
                <ContentCopyIcon />
              </CopyToClipboard>
            </span>
          </Box>
        </Container>
      </Modal2>
    </Wrapper>
  );
};

export default Info;
