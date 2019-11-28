import React from 'react';
import PropTypes from 'prop-types';

import Tools from 'components/Tools';
import FooterBlock from './components/FooterBlock';

import {
  Wrapper,
  Container,
  Copyright,
  CopyrightLinks,
  CopyrightText,
  FooterArea,
  FooterSocials,
  FooterPay
} from './styled';

import Cash from 'images/icons/Cash.svg';
import Mastercard from 'images/icons/Mastercard.svg';
import Paypall from 'images/icons/Paypall.svg';
import Visa from 'images/icons/Visa.svg';
import Instagram from 'assets/Instagram';
import Twitter from 'assets/Twitter';
import Facebook from 'assets/Facebook';

const Footer = ({isMobile}) => (
  <Wrapper>
    <FooterArea>
      <FooterBlock
        title="Sell"
        links={[
          {url: '/', text: 'Start a shop'},
          {url: '/', text: 'How to sell'},
          {url: '/', text: 'Pricing plans'}
        ]}
      />

      <FooterBlock
        title="Shop"
        links={[
          {url: '/', text: 'How to buy'},
          {url: '/', text: 'Payments'},
          {url: '/', text: 'Returns'}
        ]}
      />

      <FooterBlock
        title="Share & Earn"
        links={[
          {url: '/', text: 'Rate & Earn'},
          {url: '/', text: 'Save to Lists'},
          {url: '/', text: 'Influencer reward'}
        ]}
      />

      <FooterBlock
        title="About"
        links={[
          {url: '/', text: 'About us'},
          {url: '/', text: 'Contact Us'},
          {url: '/', text: 'FAQ'}
        ]}
        width="12.5%"
      />

      <FooterBlock width="32.6%" staticBlock>
        <Tools />

        <FooterSocials>
          <a>
            <Instagram />
          </a>
          <a>
            <Twitter />
          </a>
          <a>
            <Facebook />
          </a>
        </FooterSocials>

        {!isMobile && (
          <FooterPay>
            <img src={Cash} alt="" />
            <img src={Visa} alt="" />
            <img src={Paypall} alt="" />
            <img src={Mastercard} alt="" />
          </FooterPay>
        )}
      </FooterBlock>
    </FooterArea>
    <Copyright>
      <Container>
        <CopyrightLinks>
          <li>
            <a>Privacy Policy</a>
          </li>
          <li>
            <a>Terms of use</a>
          </li>
          <li>
            <a>Help</a>
          </li>
        </CopyrightLinks>

        <CopyrightText>Copywright @ 2018 Middly. All rights reserved</CopyrightText>
      </Container>
    </Copyright>
  </Wrapper>
);

Footer.propTypes = {
  isMobile: PropTypes.bool
};

export default Footer;
