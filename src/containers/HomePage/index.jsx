import React from 'react';
import { useWindowSize } from "@reach/window-size";

import { FlexContainer } from "globalStyles";

import Layout from 'containers/Layout';
import HomePageDesktop from './HomePageDesktop';
import HomePageMobile from './HomePageMobile';

import { StyledEmailInput, SubscribeBlock, SubscribeButton, SubscribeTitle } from "./styled";

const HomePage = () => {
  const { width } = useWindowSize();
  const isMobile = width <= 767;

  return (
    <Layout>
      {isMobile ? <HomePageMobile/> : <HomePageDesktop/>}

      <SubscribeBlock>
        <SubscribeTitle>Subscribe to our newsletter</SubscribeTitle>
        <FlexContainer justifyContent="center">
          <StyledEmailInput placeholder="Your e-mail"/>

          <SubscribeButton type="button">Subscribe</SubscribeButton>
        </FlexContainer>
      </SubscribeBlock>
    </Layout>
  )
};

export default HomePage;
