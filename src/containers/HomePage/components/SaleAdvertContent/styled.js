import styled from 'styled-components';
import {Button} from 'antd';
import {secondaryColor, mainWhiteColor, mainBlackColor} from '../../../../constants/colors';

export const Wrapper = styled.div`
  width: 60%;
`;

export const Title = styled.div`
  color: ${mainBlackColor};
  font-size: 42px;
  letter-spacing: 0.3px;
  font-weight: 500;
  text-transform: uppercase;
  margin-bottom: 5px;
  margin-top: 15px;
`;

export const Description = styled.div`
  max-width: 310px;
  font-size: 18px;
  margin-top: 14px;
  line-height: 1.2;
  margin-bottom: 33px;
  color: ${mainBlackColor};
`;

export const BuyButton = styled(Button)`
  background: ${secondaryColor}!important;
  padding: 0 !important;
  color: ${mainWhiteColor}!important;
  text-transform: uppercase;
  border: none !important;
  line-height: 32px;
  height: 32px !important;
  width: 142px;
  border-radius: 24px !important;

  span {
    font-size: 14px;
    font-weight: 700;
    letter-spacing: 0px;
  }
`;
