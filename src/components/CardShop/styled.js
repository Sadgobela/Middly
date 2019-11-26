import styled from 'styled-components';
import {mainWhiteColor, mainBlackColor} from '../../constants/colors';
import {FlexContainer} from '../../globalStyles';

export const Card = styled(FlexContainer)`
  position: relative;
  flex-direction: column;
  width: 172px;
  height: 212px;
  background: ${mainWhiteColor};
  cursor: pointer;
  box-shadow: 0px 2px 9px rgba(0, 0, 0, 0.06);
  margin: 10px;
`;

export const FollowersContainer = styled(FlexContainer)`
  width: 100%;
  margin-bottom: 9px;
`;

export const Image = styled.img`
  width: 100%;
  height: 100px;
`;

export const CardFooter = styled(FlexContainer)`
  width: 100%;
  height: 112px;
  flex-direction: column;
  padding: 9px 15px 15px 15px;
`;

export const Title = styled.div`
  font-size: 14px;
  font-weight: bold;
  color: ${mainBlackColor};
`;
