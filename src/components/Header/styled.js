import styled from 'styled-components';
import {Button, Badge} from 'antd';
import media from 'constants/media';
import {FlexContainer} from 'globalStyles';
import {mainWhiteColor, disabledLinkColor, mainBlackColor, primaryColor, headerShadowColor} from 'constants/colors';
import {headerHeight, mobileHeaderHeight} from './constants';
import {ItemFollow} from '../../containers/HomePage/components/SearchInput/styled';

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
  margin: 0 auto;
  padding: 0 72px 0 69px;
  max-width: 1440px;
  background: ${mainWhiteColor};
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
  ${({active}) =>
    active
      ? ` 
    color: ${mainBlackColor};
    padding-bottom: 2px;
    border-bottom: 2px solid ${primaryColor};
    `
      : null};

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
    width: 87px;
    height: 28px;
    color: ${mainBlackColor};
    font-weight: 700;
    background: ${mainWhiteColor};
    text-transform: uppercase;
    padding: 0;
    font-size: 14px;
    line-height: 20px;
    border: 1px solid #c3c3c3;
    border-radius: 24px;
    margin: 0 2.4%;

    &:hover {
      color: ${mainBlackColor};
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

export const LogoContainer = styled.a`
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
    }
  `
      : null};
  ${({show}) => (show ? 'top: -100%;' : null)};
`;

export const BadgesContainer = styled(FlexContainer)`
  position: relative;
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

export const NotificationBar = styled.div`
  position: absolute;
  right: 0;
  top: calc(100% + 28px);
  z-index: 999;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: -70vw;
    height: 200vh;
    width: 200vw;
    background: rgba(0, 0, 0, 0.4);
    z-index: -1;
  }
`;

export const BarContainer = styled.div`
  transform: translateX(72px);
  width: 375px;
  height: 500px;
  background: #fff;
`;

export const BarHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 73px;
  border-bottom: 1px solid #e4e4e4;
  padding: 0 24.5px 0 19px;
`;

export const BarHeading = styled.span`
  font-size: 16px;
  line-height: 22px;
  color: #000;
`;

export const BarTitle = styled.span`
  font-size: 14px;
  line-height: 20px;
  color: #000;
`;

export const NotificationsItem = styled.div`
  display: flex;
  align-items: center;
  height: 80px;
  border-bottom: 1px solid #e4e4e4;
  padding: 0 16px;
`;

export const ItemDescription = styled.div`
  margin: 0 0 0 12px;
`;

export const ItemPic = styled.img`
  display: block;
  width: 40px;
  height: 40px;
`;

export const ItemHeading = styled.span`
  display: block;

  &::after {
    ${({info}) =>
      info
        ? `
      content: '${info}';
      font-size: 12px;
      margin: 0 0 0 12px;
    `
        : null}
  }
`;

export const ItemTitle = styled.span`
  display: block;
`;

export const ItemFollowing = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 84px;
  height: 28px;
  background: transparent;
  font-size: 14px;
  line-height: 20px;
  text-decoration: none;
  border-radius: 24px;
  margin: 0 0 0 auto;
  color: #545454;
  border: 1px solid #c3c3c3;
`;
