import React, { useEffect, useState } from 'react';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { useHistory } from 'react-router-dom';
import { resetPassword } from '../../actions/auth.actions';
import { Info } from '../../components';
import {
  Wrapper,
  TextInput,
  Button,
  Circle,
  Text,
  OR,
  Divider,
  Link,
  LoginBtn,
  Message,
  Error,
} from './styles';
import { useDispatch, useSelector } from 'react-redux';

const Reset = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const [email, setEmail] = useState('');
  const passwordReset = (e) => {
    e.preventDefault();
    console.log(email);
    dispatch(resetPassword(email));
  };

  useEffect(() => {
    if (auth) {
      auth.resetMessage = '';
      auth.resetError = '';
    }
  }, []);

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Wrapper>
        <Info />
        <Circle>
          <LockOutlinedIcon />
        </Circle>
        <Text>
          <h3>Trouble Logging In?</h3>
          <h5>
            Enter your email, phone, or username and we'll send you a link to
            get back into your account.
          </h5>
        </Text>
        {auth?.resetMessage && <Message>{auth?.resetMessage}</Message>}
        {auth?.resetError && (
          <Error display={auth?.resetMessage && 'none'}>
            {auth?.resetError}
          </Error>
        )}
        <TextInput
          required
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          label="Email"
          placeholder="Enter your email"
        />
        <Button onClick={(e) => passwordReset(e)}>Reset Password</Button>
        <OR>
          <Divider></Divider>
          <p>OR</p>
          <Divider></Divider>
        </OR>
        <Link
          onClick={() => history.push('/signup')}
          className="text"
          marginTop="20px"
        >
          <h2>Create New Account</h2>
        </Link>
        <LoginBtn onClick={() => history.push('/signin')}>
          <h1>Back to Login</h1>
        </LoginBtn>
      </Wrapper>
    </div>
  );
};

export default Reset;
