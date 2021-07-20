import React, { useEffect, useState } from 'react';
import styled from 'styled-components/macro';
import { Redirect } from 'react-router-dom';
import { AuthComponents } from '../../components';
import { useDispatch, useSelector } from 'react-redux';
import {
  Wrapper,
  Logo,
  TextInput,
  Form,
  Button,
  StyledLink,
  BoxBottom,
} from './styles';
import { login } from '../../actions/auth.actions';
import Loader from '../Loader/Loader';
import { getMyFollowingsPost } from '../../actions/post.actions';

const Signin = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const signin = async (e) => {
    setTimeout(() => {
      dispatch(getMyFollowingsPost());
    }, 2000);
    e.preventDefault();
    if (
      !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
      )
    ) {
      setError('Invalid Email');
      setEmail('');
      return;
    }
    const user = {
      email,
      password,
    };
    dispatch(login(user)).then(() => {
      setTimeout(() => {
        console.log('logged in');
      }, 4000);
    });
  };

  if (auth?.authenticate) {
    return <Redirect to={`/`} />;
  }

  return (
    <AuthComponents>
      <Wrapper>
        <Logo>
          <img src="/images/logo.svg" alt="Instagram" />
        </Logo>
        {auth?.error && <Error>{auth?.error}</Error>}
        <Form>
          <TextInput
            required
            variant="outlined"
            type="email"
            label="Email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextInput
            required
            variant="outlined"
            label="Password"
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {!auth?.authenticating && <Button onClick={signin}>Log In</Button>}
        </Form>
        {auth?.authenticating && <Loader left="-1rem" />}
        <StyledLink to="/reset" color="#262626" marginTop="15px">
          Forgot Password ?
        </StyledLink>
      </Wrapper>
      <BoxBottom>
        Don't have an account ? <StyledLink to="/signup">Sign up</StyledLink>
      </BoxBottom>
      <div></div>
    </AuthComponents>
  );
};

export default Signin;

export const Error = styled.div`
  text-align: center;
  width: 100%;
  position: relative;
  color: red;
  font-size: 14px;
  margin: -18px auto 11px;
  display: ${({ none }) => none || 'block'};
`;
