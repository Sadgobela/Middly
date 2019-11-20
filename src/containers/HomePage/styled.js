import styled from 'styled-components';
import { Input, Button } from 'antd';
import { FlexContainer } from '../../globalStyles';
import {
  primaryColor,
  mainWhiteColor,
  mainBlackColor,
  headerShadowColor
} from '../../constants/colors';

export const MainColor = styled.span`
  color: ${primaryColor};
`;

export const BoldText = styled.strong`
  margin-left: 10px;
`;

export const ShopsWrapper = styled.div`
  margin-top: 50px;
  padding-top: 90px;
  padding-bottom: 50px;
  background: ${mainWhiteColor};
`;

export const SubscribeBlock = styled(FlexContainer)`
  flex-direction: column;
  justify-content: center;
  padding-bottom: 89px;
  padding-top: 89px;
`;

export const SubscribeTitle = styled.div`
  font-size: 22px;
  color: ${mainBlackColor};
  margin-bottom: 24px;
`;

export const StyledEmailInput = styled(Input)`
  width: 293px !important;
  height: 46px !important;
  background: ${mainWhiteColor}!important;
  border: 1px solid ${headerShadowColor} !important;
  border-right-width: 0;
  border-radius: 4px 0 0 4px !important;
  &:focus {
    box-shadow: none !important;
  }
`;

export const SubscribeButton = styled(Button)`
  min-width: 40px !important;
  height: 48px !important;
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
  padding: 6px 20px !important;
  font-size: 16px !important;
  text-transform: uppercase;
  color: ${mainWhiteColor}!important;
  background: ${primaryColor}!important;
  border: 0;
  border-radius: 0 4px 4px 0 !important;
`;
