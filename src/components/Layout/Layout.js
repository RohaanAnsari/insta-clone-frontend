import React from 'react';
import { Wrapper } from './styles';
import { Navbar } from '../../components';

const Layout = ({ children }) => {
  return (
    <Wrapper>
      <Navbar />
      {children}
    </Wrapper>
  )
}

export default Layout
