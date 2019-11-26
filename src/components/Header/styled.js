import styled from 'styled-components';
import {Button, Badge} from 'antd';

import {mainWhiteColor, disabledLinkColor, mainBlackColor, primaryColor} from 'constants/colors';
import {FlexContainer} from 'globalStyles';

export const HeaderWrapper = styled.div`
  background: ${mainWhiteColor};
  box-shadow: 0px 1px 1px rgba(46, 46, 46, 0.06);
`;

export const HeaderContainer = styled(FlexContainer)`
  height: ${({isMobile}) => (isMobile ? '64px' : '80px')};
  max-width: 1218px;
  margin: 0 auto;
  padding: 0 24px;
  justify-content: inherit;
  position: relative;
`;

export const StyledLink = styled.div`
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

export const StyledName = styled.span`
  font-weight: bold;
  white-space: nowrap;
  width: 70px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const AvatarContainer = styled(FlexContainer)`
  width: 110px;
  height: 40px;
  margin-right: 10px;
  cursor: pointer;
  margin-left: 30px;

  img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    margin-right: 5px;
  }
`;

export const StyledHi = styled.div`
  align-self: flex-start;
`;

export const BadgesContainer = styled(FlexContainer)`
  width: ${({isMobile}) => (isMobile ? 'auto' : '120px')};
  margin-left: auto;

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

export const Burger = styled.div`
  cursor: pointer;
  height: 50px;
  width: 50px;
  margin: 0 0 0 -13px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  left: ${({isMobile}) => (isMobile ? '18px' : '-31px')};
  transform: translate(0, -50%);
`;

export const LogoContainer = styled.div`
  padding-top: 6px;

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
  margin-top: -6px;
  margin-left: 97px;
  letter-spacing: 0.6px;
`;

export const Name = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
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
