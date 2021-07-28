import React, { useState } from 'react';
import styled from 'styled-components';
import { AuthComponents, Loader, Info } from '../../components';
import { useDispatch, useSelector } from 'react-redux';
import { signup } from '../../actions/user.actions';
import { Redirect, useHistory } from 'react-router-dom';
import {
  Wrapper,
  Logo,
  Text,
  Divider,
  TextInput,
  Button,
  BoxBottom,
  LoginLink,
  Form,
} from './styles';

const Signup = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const auth = useSelector((state) => state.auth);
  const history = useHistory();
  const [message, setMessage] = useState(user.message);
  const [error, setError] = useState('');

  const [name, setName] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [bool, setBool] = useState(user.loading);
  user.loading = bool;

  const PostData = (e) => {
    e.preventDefault();
    setBool(true);
    if (
      !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
      )
    ) {
      setError('Invalid Email');
      setEmail('');
      setBool(false);
      return;
    }
    setBool(true);
    const user = {
      name,
      fullName,
      email,
      password,
    };
    dispatch(signup(user)).then(() => {
      setBool(false);
      setTimeout(() => {
        setMessage('');
      }, 1000);
      user.loading = false;
      history.push('/signin');
    });
  };

  if (auth?.authenticate) {
    return <Redirect to="/" />;
  }

  return (
    <AuthComponents>
      <Info />
      <Wrapper>
        <Logo>
          <img src="/images/logo.svg" alt="Instagram" />
        </Logo>
        <Text>Sign up to see photos and videos from your friends.</Text>
        <Divider />
        {error && <Error none={message && 'none'}>{error}</Error>}
        {/* {!user.error && user.message && <Message>{user.message}</Message>} */}
        <Form>
          <TextInput
            required
            variant="outlined"
            type="email"
            label="Email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextInput
            required
            variant="outlined"
            label="Full Name"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          <TextInput
            required
            variant="outlined"
            label="User Name"
            placeholder="User Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextInput
            required
            variant="outlined"
            label="Password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {/* <TextInput
            required
            variant="outlined"
            type="file"
            onChange={(e) => setProfile(e.target.files[0])}
          /> */}
          {user.loading ? (
            <Loader left="-3.5rem" />
          ) : (
            <Button onClick={(e) => PostData(e)}>Sign up</Button>
          )}
        </Form>
      </Wrapper>
      <BoxBottom>
        Have an account ? <LoginLink to="/signin">Log in</LoginLink>
      </BoxBottom>
    </AuthComponents>
  );
};

export default Signup;

export const Error = styled.div`
  text-align: center;
  width: 100%;
  position: relative;
  color: red;
  font-weight: 600;
  letter-spacing: 0.8px;
  font-size: 15px;
  margin: -10px auto 11px;
  display: ${({ none }) => none || 'block'};
`;

export const Message = styled.div`
  text-align: center;
  position: relative;
  left: auto;
  font-size: 14px;
  color: green;
  font-weight: 700;
  margin-top: -1rem;
  margin-right: 27rem;
  margin-left: 27rem;
  margin-bottom: 1.2rem;
  width: 100%;
`;
