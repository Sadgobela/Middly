import React from 'react';
import appStore from '../../../../images/appStore.png';
import bagImage from '../../../../images/bagImage.png';
import googlePlay from '../../../../images/googlePlay.png';
import {
  MainImage,
  Wrapper,
  Container,
  ContentBlock,
  Title,
  Description,
  Tags
} from './styled';

const SingleImageBanner = () => (
  <Wrapper>
    <Container>
      <MainImage src={bagImage} alt="Product" />
      <ContentBlock>
        <Title>Sell | Shop | Share |Earn Explore & connect on the go.</Title>
        <Description>
          Follow favorite stores, Save to lists ,share your style, it couldnt be
          easier.
        </Description>
        <Tags>
          <img src={appStore} alt="App Store" />
          <img src={googlePlay} alt="Google Play" />
        </Tags>
      </ContentBlock>
    </Container>
  </Wrapper>
);

export default SingleImageBanner;
