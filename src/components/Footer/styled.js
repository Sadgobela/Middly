import styled from 'styled-components';
import {grayTextColor, transparentTextColor, primaryColor} from 'constants/colors';
import media from 'constants/media';

import {ContentWrapper} from 'globalStyles';

export const Wrapper = styled.div`
  width: 100%;
  box-shadow: inset 0px 1px 0px rgba(0, 0, 0, 0.16);
  margin-top: 86px;

  @media (max-width: ${media.mobileMax}) {
    margin-top: 24px;
  }
  margin-top: 127px;
`;

export const FooterArea = styled(ContentWrapper)`
  width: 100%;
  max-width: 1440px;
  display: flex;
  flex-wrap: wrap;
  padding: 44px 118px 55px 132px;
  background: #fefefe;
  box-shadow: inset 0px 1px 0px rgba(0, 0, 0, 0.16);

  @media (max-width: ${media.mobileMax}) {
    padding: 18px 32px 0;
  }
`;

export const FooterSocials = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 50px;
  margin-left: auto;

  a {
    margin-left: 50px;

    &:first-child {
      margin-left: auto;
    }
  }

  svg {
    cursor: pointer;
    transition: all 0.3s ease;
    fill: ${transparentTextColor};

    &:hover {
      fill: ${primaryColor};
    }
  }

  @media (max-width: ${media.mobileMax}) {
    order: 1;
    width: 100%;
    margin: 6px auto 26px;
    max-width: 300px;

    a {
      margin: 0 auto;
    }
  }
`;

export const FooterPay = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-left: 11px;

  img {
    margin-left: 44px;

    &:first-child {
      margin-left: auto;
      margin-top: 3px;
    }
  }
`;

export const Copyright = styled.div`
  background: #fafafa;
  box-shadow: inset 0px 1px 0px rgba(0, 0, 0, 0.16);
  padding: 24px 0;

  @media (max-width: ${media.mobileMax}) {
    padding: 24px 0 0;
    box-shadow: none;
    background: transparent;
  }
`;

export const CopyrightLinks = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: inline-flex;
  align-items: center;

  li {
    margin-right: 25px;
  }

  a {
    color: #000000;
  }

  @media (max-width: ${media.mobileMax}) {
    padding: 0 24px 24px;
    text-align: center;
    width: 100%;
    max-width: 400px;
    margin: 0 auto;

    li {
      font-size: 14px;
      line-height: 17px;
      color: #000000;
      margin: 0 auto;

      a {
        font-size: inherit;
        line-height: inherit;
        color: inherit;
      }
    }
  }
`;

export const CopyrightText = styled.span`
  margin-left: auto;
  font-size: 12px;
  line-height: 14px;
  text-align: right;
  color: ${grayTextColor};

  @media (max-width: ${media.mobileMax}) {
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
    color: #666666;
    margin: 0 auto;
    padding: 13px 20px;
    background: #efefef;
    width: 100%;
    text-align: center;
  }
`;

export const Container = styled(ContentWrapper)`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;
