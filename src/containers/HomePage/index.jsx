import React from 'react';
import { useWindowSize } from "@reach/window-size";

import { FlexContainer } from "globalStyles";

import Header from 'components/Header';
import Footer from 'components/Footer';
import HomePageDesktop from './HomePageDesktop';
import HomePageMobile from './HomePageMobile';

import { StyledEmailInput, SubscribeBlock, SubscribeButton, SubscribeTitle } from "./styled";

const HomePage = () => {
  const { width } = useWindowSize();
  const isMobile = width <= 767;

  return (
    <>
      <Header isMobile={isMobile}/>

      {isMobile ? <HomePageMobile/> : <HomePageDesktop/>}

      <SubscribeBlock>
        <SubscribeTitle>Subscribe to our newsletter</SubscribeTitle>
        <FlexContainer justifyContent="center">
          <StyledEmailInput placeholder="Your e-mail"/>

          <SubscribeButton type="button">Subscribe</SubscribeButton>
        </FlexContainer>
      </SubscribeBlock>

      <Footer isMobile={isMobile}/>
    </>
  )
};

export default HomePage;
