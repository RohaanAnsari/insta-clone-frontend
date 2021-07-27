import React, { useState, useEffect } from 'react';
import { Top, Icon } from './styles';
import { NewChat } from '../../svg';
import { useSelector, useDispatch } from 'react-redux';
import KeyboardArrowDownSharpIcon from '@material-ui/icons/KeyboardArrowDownSharp';

import { ModalSmall, Modal2 } from '../../components';
import { useHistory } from 'react-router';
import { getAllUsers } from '../../actions/user.actions';

const Head = () => {
  const auth = useSelector((state) => state.auth);
  const user = useSelector((state) => state.user);
  const conversation = useSelector((state) => state.conversation);

  const history = useHistory();
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const newConversation = () => {
    const ids = user.allUsers.map((id) => id._id);
    console.log(ids);
  };

  useEffect(() => {
    dispatch(getAllUsers());
  }, []);

  useEffect(() => {
    //  setTimeout(() => {
    setOpen(false);
    //  }, 100);
  }, [conversation.chats.length]);

  return (
    <Top>
      <h4>{auth.user.name}</h4>
      <span>
        <KeyboardArrowDownSharpIcon />
      </span>
      <Icon onClick={handleOpen}>
        <NewChat />
      </Icon>
      <Modal2 open={open} handleClose={handleClose}>
        <ModalSmall data={user.allUsers} onBtnClick={newConversation} />
      </Modal2>
    </Top>
  );
};

export default Head;
