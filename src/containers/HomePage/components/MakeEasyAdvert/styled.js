import styled from 'styled-components';
import {FlexContainer} from '../../../../globalStyles';
import {mainWhiteColor, primaryColor, mainBlackColor} from '../../../../constants/colors';

export const Box = styled(FlexContainer)`
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  width: 500px;
  height: 346px;
  padding: 50px;
  background: ${mainWhiteColor};
`;

export const WideTitle = styled.div`
  font-weight: bold;
  font-size: 28px;
  line-height: 1.2;
  color: ${mainBlackColor};
  margin-bottom: 30px;
  letter-spacing: -0.55px;
`;

export const SecondaryText = styled.div`
  font-size: 16px;
  letter-spacing: 0.2px;
  color: ${mainBlackColor};
`;

export const Link = styled.span`
  color: ${primaryColor};
  cursor: pointer;
  text-decoration: underline;
`;
