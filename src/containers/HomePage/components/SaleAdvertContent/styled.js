import styled from 'styled-components';
import { Button } from 'antd';
import { secondaryColor, mainWhiteColor, mainBlackColor } from '../../../../constants/colors';

export const Wrapper = styled.div`
  width: 60%;
`;

export const Title = styled.div`
  font-size: 48px;
  font-weight: bold;
  text-transform: uppercase;
  color: ${mainBlackColor};
  margin-bottom: 20px;
`;

export const Description = styled.div`
  font-size: 14px;
  margin-bottom: 40px;
  color: ${mainBlackColor};
`;

export const BuyButton = styled(Button)`
  background: ${secondaryColor}!important;
  padding: 10px 25px !important;
  color: ${mainWhiteColor}!important;
  text-transform: uppercase;
  border: none!important;
  height: auto!important;
`;
