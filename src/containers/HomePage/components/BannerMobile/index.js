import React from 'react';
import PropTypes from 'prop-types';

import bannerMobile from 'images/bannerMobile.jpg';
import {Wrapper, WrapperContent, Background, Title, Description, ButtonLink} from './styled';

const BannerMobile = ({background}) => {
  return (
    <Wrapper>
      <Background background={background}>
        <WrapperContent>
          <Title>New VS collection</Title>
          <Description>We made a new update for you and your friends</Description>
          <ButtonLink>Get 20% OFF</ButtonLink>
        </WrapperContent>
      </Background>
    </Wrapper>
  );
};

BannerMobile.defaultProps = {
  background: bannerMobile
};

BannerMobile.propTypes = {
  background: PropTypes.string
};

export default BannerMobile;
