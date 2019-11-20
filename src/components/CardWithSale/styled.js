import styled from 'styled-components';
import {
  mainWhiteColor,
  mainBlackColor,
  secondaryColor,
  secondaryTextColor
} from '../../constants/colors';
import { FlexContainer } from '../../globalStyles';

export const Card = styled(FlexContainer)`
  position: relative;
  flex-direction: column;
  width: 268px;
  height: 396px;
  background: ${mainWhiteColor};
  cursor: pointer;
  box-shadow: 0px 2px 9px rgba(0, 0, 0, 0.06);
  margin: 10px;
`;

export const Image = styled.img`
  width: 100%;
  height: 304px;
`;

export const CardFooter = styled(FlexContainer)`
  width: 100%;
  height: 100px;
  flex-direction: column;
  padding: 22px 12px 12px 8px;
`;

export const Title = styled.div`
  font-size: 14px;
  font-weight: bold;
  color: ${mainBlackColor};
`;

export const Price = styled.div`
  font-size: 18px;
  color: ${mainBlackColor};
`;

export const Views = styled.div`
  font-size: 14px;
  align-self: flex-start;
  color: ${secondaryTextColor};
`;

export const Sale = styled(FlexContainer)`
  position: absolute;
  justify-content: center;
  top: 2px;
  right: 2px;
  width: 40px;
  height: 40px;
  background: ${secondaryColor};
  border-radius: 2px;
  color: ${mainWhiteColor};
  font-size: 12px;
`;
