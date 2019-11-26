import styled from 'styled-components';
import {mainWhiteColor, mainBlackColor, secondaryColor, secondaryTextColor} from '../../constants/colors';
import {FlexContainer} from '../../globalStyles';

export const Card = styled(FlexContainer)`
  position: relative;
  flex-direction: column;
  width: 228px;
  background: ${mainWhiteColor};
  cursor: pointer;
  box-shadow: 0px 2px 9px rgba(0, 0, 0, 0.06);
  border-radius: 4px;
  margin: 0;
`;

export const Image = styled.img`
  width: 100%;
  height: 263px;
`;

export const CardFooter = styled(FlexContainer)`
  width: 100%;
  flex-direction: column;
  padding: 13px 9px 9px 8px;
`;

export const Title = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${mainBlackColor};
`;

export const Price = styled.div`
  font-size: 16px;
  color: ${mainBlackColor};
`;

export const Views = styled.div`
  font-size: 14px;
  margin-top: 15px;
  align-self: flex-start;
  color: ${secondaryTextColor};
`;

export const Sale = styled(FlexContainer)`
  position: absolute;
  justify-content: center;
  top: 3px;
  right: 3px;
  width: 35px;
  height: 35px;
  background: ${secondaryColor};
  border-radius: 2px;
  color: ${mainWhiteColor};
  font-size: 12px;
`;
