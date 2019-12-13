import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {Button, Badge} from 'antd';
import {FlexContainer} from 'globalStyles';
import media from 'constants/media';
import {mainWhiteColor, mainBlackColor, primaryColor, headerShadowColor} from 'constants/colors';
import {headerHeight, mobileHeaderHeight} from './constants';

export const HeaderWrapper = styled.div`
  position: relative;
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

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  height: ${({isMobile}) => (isMobile ? mobileHeaderHeight : headerHeight)};
  justify-content: space-between;
  margin: 0 auto;
  padding: 0 70px;
  max-width: 1440px;

  @media (max-width: 1360px) {
    padding: 0 30px;
  }

  @media (max-width: ${media.mobileMax}) {
    padding: 0 16px;
    background: ${mainWhiteColor};
  }
`;

export const StyledLink = styled.a`
  padding: 4px 8px;
  cursor: pointer;
  color: #999;
  border: none;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.4;
  letter-spacing: 0;

  ${({active}) =>
    active
      ? ` 
      color: ${mainBlackColor};
      padding-bottom: 2px;
      font-weight: 700;
      border-bottom: 2px solid ${primaryColor};
      `
      : null};

  @media (max-width: 767px) {
    ${({active}) => (active ? null : 'border-bottom: 2px solid #EFEFEF;')};
  }

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
  &&& {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    height: 30px;
    color: ${mainBlackColor};
    font-weight: 700;
    background: ${mainWhiteColor};
    font-size: 14px;
    padding: 0 16px;
    line-height: 20px;
    border: 1px solid #c3c3c3;
    border-radius: 24px;
    margin: 0 2.4% 0 0;

    & svg {
      margin-right: 6px;
    }

    &:hover {
      color: ${mainBlackColor};
    }

    @media (max-width: 1250px) {
      display: none;
    }
  }
`;

export const AvatarContainer = styled(FlexContainer)`
  max-width: 150px;
  height: 40px;
  margin: 0 3.3% 0 0;
  cursor: pointer;

  img {
    min-width: 32px;
    height: 32px;
    border-radius: 50%;
    margin-right: 16px;
  }

  @media (max-width: 1150px) {
    display: none;
  }
`;

export const StyledName = styled.div`
  font-weight: bold;
  white-space: nowrap;
  width: 70px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Name = styled.div`
  font-size: 14px;
  line-height: 17px;
  color: #000;
`;

export const BarControls = styled.div`
  display: flex;
  align-items: center;
  margin-left: ${({isMobile}) => (isMobile ? 'auto' : '0')};
`;

export const StyledHi = styled.div``;

export const Burger = styled.button`
  position: ${({isMobile}) => (isMobile ? 'absolute' : 'relative')};
  left: ${({isMobile}) => (isMobile ? '18px' : '0')};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0 2.2% 0 0;
  background: none;
  border: none;
  cursor: pointer;
  outline: none;
`;

export const LogoContainer = styled(Link)`
  min-width: 114px;
  padding-top: 6px;
  margin-right: 5.7%;
  ${({isMobile}) =>
    isMobile
      ? `
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    min-width: 91px;
  `
      : ''}
`;

export const LinksContainer = styled.div`
  display: flex;
  align-items: center;
  letter-spacing: 0.6px;
  ${({mobile}) =>
    mobile
      ? `
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background: #fff;
    transition: 0.5s;
    z-index: -1;
    & a {
      width: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 40px;
      margin: 0 !important;
    }
  `
      : null};
  ${({hide}) => (hide ? 'top: -100%;' : null)};
`;

export const BadgesContainer = styled(FlexContainer)`
  position: relative;

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

export const AuthControls = styled.div`
  display: flex;
  align-items: center;
  margin: 0 45px 0 0;
`;

export const AuthSign = styled(Link)`
  font-size: 14px;
  line-height: 20px;
  text-decoration: none;
  outline: none;
  color: #000;
`;

export const AuthCreate = styled(AuthSign)`
  color: #ed494f;
  font-weight: 700;
`;

export const AuthDivider = styled.i`
  width: 2px;
  height: 24px;
  background: #e4e4e4;
  border-radius: 10px;
  margin: 0 16px;
`;
