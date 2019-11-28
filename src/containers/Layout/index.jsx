import React from 'react';
import { useWindowSize } from "@reach/window-size";

import Header from 'components/Header';
import Footer from 'components/Footer';

import { Wrapper } from './styled'

const Layout = ({ children }) => {
  const { width } = useWindowSize();
  const isMobile = width <= 767;

  return (
    <Wrapper>
      <Header isMobile={isMobile}/>

      {children}

      <Footer isMobile={isMobile}/>
    </Wrapper>
  )
};

export default Layout;
