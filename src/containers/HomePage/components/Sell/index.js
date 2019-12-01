import React from 'react';
import PropTypes from 'prop-types';

import {Wrapper, Content, Title, Description, Links} from './styled';
import sell from 'images/sell.png';
import appStore from 'images/appStore.png';
import googlePlay from 'images/googlePlay.png';

// TODO: switch 'a' tag to Link form react-router-dom
const Sell = ({background, title, description, iosLink, androidLink}) => {
  return (
    <Wrapper background={background}>
      <Content>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <Links>
          <a href={iosLink}>
            <img src={appStore} alt="App Store" />
          </a>
          <a href={androidLink}>
            <img src={googlePlay} alt="Google Play" />
          </a>
        </Links>
      </Content>
    </Wrapper>
  );
};

Sell.defaultProps = {
  background: sell,
  title: 'Sell | Shop | Share | Earn Explore & connect on the go.',
  description: 'Follow favorite stores, Save to lists, share your style, it couldnt be easier.',
  iosLink: '/',
  androidLink: '/'
};

Sell.propTypes = {
  background: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  iosLink: PropTypes.string,
  androidLink: PropTypes.string
};

export default Sell;
