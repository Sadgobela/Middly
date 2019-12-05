import styled from 'styled-components';
import {Button, Badge} from 'antd';
import media from 'constants/media';
import {FlexContainer} from 'globalStyles';
import {mainWhiteColor, disabledLinkColor, mainBlackColor, primaryColor, headerShadowColor} from 'constants/colors';
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
  margin: 0 auto;
  padding: 0 72px 0 69px;
  max-width: 1440px;
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
  max-height: calc(100vh - 80px);
  overflow-y: auto;
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
  position: relative;
  display: flex;
  align-items: center;
  min-height: 80px;
  border-bottom: 1px solid #efefef;
  padding: 16px;
`;

export const ItemDescription = styled.div`
  margin: 0 0 0 12px;
`;

export const ItemPic = styled.img`
  display: block;
  width: 40px;
  height: 40px;
`;

export const MessageDate = styled.span`
  position: absolute;
  right: 17.5px;
  top: 16px;
  font-size: 14px;
  line-height: 16px;
  color: #999;
`;

export const ItemHeading = styled.span`
  display: block;
  font-size: 14px;
  line-height: 17px;
  font-weight: 400;
  color: #000;
  &::after {
    ${({info}) =>
      info
        ? `
      content: '${info}';
      margin: 0 0 0 12px;
      font-size: 14px;
      line-height: 17px;
      color: #999999;
    `
        : null}
  }
`;

export const ItemTitle = styled.span`
  display: block;
  max-width: 227px;
  font-size: 14px;
  line-height: 16px;
  color: #000;
  color: ${({gray}) => (gray ? '#999' : '#000')};
`;

export const PostTitle = styled.span`
  max-width: 227px;
  font-size: 14px;
  line-height: 17px;
  color: #999;
  margin: 0 4px 0 0;
`;

export const ItemFollowing = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 84px;
  height: 28px;
  font-size: 12px;
  line-height: 14px;
  text-decoration: none;
  border-radius: 24px;
  color: #fff;
  margin: 0 0 0 auto;
  background: #ed484f;
  text-transform: capitalize;

  &::before {
    content: '+';
    color: #fff;
    margin-right: 10px;
  }

  ${({type}) =>
    type === 'following'
      ? `
    background: transparent;
    color: #666;
    border: 1px solid #666;
    &::before{
      content: none;
    }
    `
      : null};
`;

export const ItemReplied = styled.img`
  display: block;
  max-width: 100%;
`;

export const Cart = styled.div``;

export const CartHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 73px;
  padding: 0 0 0 16px;
  border-bottom: 1px solid #e4e4e4;
`;

export const CartHeading = styled.span`
  display: block;
  font-size: 16px;
  line-height: 22px;
  color: #000;
`;

export const CartCounter = styled.span`
  display: block;
`;

export const Quantity = styled.div`
  display: flex;
  align-items: center;
`;

export const QuantityTitle = styled.span`
  margin: 0 16px 0 0;
`;

export const QuantityCounter = styled.input`
  display: inline-flex;
  background: transparent;
  border: none;
  margin: 0 11px;
  width: 7px;
`;

export const QuantityAdd = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 21px;
  background: #efefef;
  border: none;
  border-radius: 2px;
  outline: none;

  &::before {
    content: '+';
  }
`;

export const QuantityRemove = styled(QuantityAdd)`
  &::before {
    content: '-';
  }
`;
