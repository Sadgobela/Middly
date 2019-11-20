import styled from 'styled-components';
import { Button } from 'antd';
import {
  mainWhiteColor,
  headerShadowColor,
  disabledLinkColor,
  mainBlackColor,
  primaryColor
} from '../../constants/colors';
import { FlexContainer } from '../../globalStyles';

export const HeaderContainer = styled(FlexContainer)`
  height: 80px;
  background: ${mainWhiteColor};
  box-shadow: inset 0px -1px 0px ${headerShadowColor};
  padding: 0 64px;
`;

export const StyledLink = styled.div`
  padding: 4px 8px;
  cursor: pointer;
  color: ${disabledLinkColor};
  border: none;
  &:hover {
    color: ${mainBlackColor};
    padding-bottom: 2px;
    border-bottom: 2px solid ${primaryColor};
  }
`;

export const SellButton = styled(Button)`
  width: 95px !important;
  height: 36px !important;
  border: 1px solid #c3c3c3 !important;
  border-radius: 24px !important;
  background: ${mainWhiteColor}!important;
  text-transform: uppercase;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${mainBlackColor}!important;
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
  width: 130px;
  span {
    cursor: pointer;
  }
`;

export const WithPointer = styled.div`
  cursor: pointer;
`;
