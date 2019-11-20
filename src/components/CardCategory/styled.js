import styled from 'styled-components';
import { mainWhiteColor, mainBlackColor } from '../../constants/colors';
import { FlexContainer } from '../../globalStyles';

export const Card = styled(FlexContainer)`
  position: relative;
  flex-direction: column;
  width: 268px;
  height: 230px;
  background: ${mainWhiteColor};
  cursor: pointer;
  box-shadow: 0px 2px 9px rgba(0, 0, 0, 0.06);
  margin: 10px;
`;

export const Image = styled.img`
  width: 100%;
  height: 164px;
`;

export const CardFooter = styled(FlexContainer)`
  width: 100%;
  height: 66px;
  padding: 8px;
`;

export const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: ${mainBlackColor};
`;
