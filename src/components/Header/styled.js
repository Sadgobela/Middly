import styled from 'styled-components';
import {Button, Badge} from 'antd';

import media from 'constants/media';
import {headerHeight, mobileHeaderHeight} from './constants';

import {mainWhiteColor, disabledLinkColor, mainBlackColor, primaryColor, headerShadowColor} from 'constants/colors';

import {FlexContainer} from 'globalStyles';

export const HeaderWrapper = styled.div`
  background: ${mainWhiteColor};
  box-shadow: inset 0px -1px 1px ${headerShadowColor};

  @media (max-width: ${media.mobileMax}) {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
  }
`;

export const HeaderContainer = styled(FlexContainer)`
  height: ${({isMobile}) => (isMobile ? mobileHeaderHeight : headerHeight)};
  margin: 0 auto;
  padding: 0 15px;
  justify-content: center;
  max-width: 1200px;
`;

export const StyledLink = styled.a`
  padding: 4px 8px;
  cursor: pointer;
  color: ${disabledLinkColor};
  border: none;
  font-weight: bold;
  font-size: 14px;
  line-height: 1.4;
  letter-spacing: 0;

  &:not(:last-child) {
    margin-right: 26px;
  }

  &:hover {
    color: ${mainBlackColor};
    padding-bottom: 2px;
    border-bottom: 2px solid ${primaryColor};
  }
`;

export const SellButton = styled(Button)`
  width: 87px !important;
  height: 36px !important;
  border: 1px solid #c3c3c3 !important;
  border-radius: 24px !important;
  background: ${mainWhiteColor}!important;
  text-transform: uppercase;
  font-weight: bold;
  display: inline-flex !important;
  justify-content: space-between;
  align-items: center;
  color: ${mainBlackColor}!important;
  margin-left: 37px;
  font-weight: 700 !important;
  padding: 0 13px 0 15px !important;
  line-height: 32px !important;

  &:hover {
    color: ${mainBlackColor}!important;
  }
`;

export const StyledName = styled.div`
  font-weight: bold;
  white-space: nowrap;
  width: 70px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const AvatarContainer = styled(FlexContainer)`
  max-width: 150px;
  height: 40px;
  margin-right: 10px;
  cursor: pointer;
  margin-left: 30px;

  img {
    min-width: 32px;
    height: 32px;
    border-radius: 50%;
    margin-right: 5px;
  }
`;

export const StyledHi = styled.div``;

export const BadgesContainer = styled(FlexContainer)`
  width: ${({isMobile}) => (isMobile ? 'auto' : '120px')};
  margin-left: ${({isMobile}) => (isMobile ? 'auto' : '0')};

  span {
    cursor: pointer;
  }

  .ant-badge-count {
    width: 16px;
    height: 16px;
    font-size: 12px;
    line-height: 16px;
    border-radius: 50%;
    padding: 0;
    min-width: 16px;
  }
`;

export const Burger = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  height: 50px;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  left: ${({isMobile}) => (isMobile ? '18px' : '0')};
  position: ${({isMobile}) => (isMobile ? 'absolute' : 'relative')};
`;

export const LogoContainer = styled.a`
  padding-top: 6px;
  margin-left: 20px;

  ${({isMobile}) =>
    isMobile
      ? `
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `
      : ''}
`;

export const LinksContainer = styled.div`
  display: flex;
  align-items: center;
  letter-spacing: 0.6px;
  margin-left: 40px;
`;

export const Name = styled.div`
  font-size: 14px;
  line-height: 17px;
  margin-left: 10px;
  color: #000;
`;

export const CustomBadge = styled(Badge)`
  ${({isMobile}) =>
    isMobile
      ? `
    width: 40px;
    height: 40px;
    display: flex !important;
    align-items: center;
    justify-content: center;
    
    .ant-badge-count {
      top: 50%;
      left: 50%;
      transform: translate(calc(-50% + 10px ), calc(-50% - 10px));
    }
  `
      : ''}
`;
