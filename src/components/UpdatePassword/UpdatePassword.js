import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  Wrapper,
  Content,
  Logo,
  TextInput,
  Button,
  Error,
  Message,
} from './styles';
import { updatePassword } from '../../actions/auth.actions';

const UpdatePassword = () => {
  const { token } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const auth = useSelector((state) => state.auth);

  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  const [error, setError] = useState(auth.updatePasswordError);
  const [msg, setMsg] = useState(auth.updatePasswordMsg);

  const passwordUpdate = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    dispatch(updatePassword(password, token)).then(() => {
      setTimeout(() => {
        history.push('/signin');
        setMsg('');
      }, 1500);
    });
  };

  return (
    <Wrapper>
      <Content>
        <Logo>
          <img src="/images/logo.svg" alt="Instagram" />
        </Logo>
        {error && <Error display={msg && 'none'}>{error}</Error>}
        {auth.updatePasswordMsg && <Message>{auth.updatePasswordMsg}</Message>}
        <TextInput
          required
          variant="outlined"
          type="text"
          label="New Password"
          placeholder="New Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <TextInput
          required
          variant="outlined"
          type="text"
          label="Confirm New Password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <Button onClick={passwordUpdate}>Update Password</Button>
      </Content>
    </Wrapper>
  );
};

export default UpdatePassword;
