import styled from 'styled-components';
import {mainWhiteColor, mainBlackColor, transparentTextColor, secondaryTextColor} from '../../constants/colors';
import {FlexContainer} from '../../globalStyles';

export const Card = styled(FlexContainer)`
  position: relative;
  flex-direction: column;
  width: 228px;
  height: 342px;
  background: ${mainWhiteColor};
  cursor: pointer;
  box-shadow: 0px 2px 9px rgba(0, 0, 0, 0.06);
`;

export const Image = styled.img`
  width: 100%;
  height: 214px;
`;

export const CardFooter = styled(FlexContainer)`
  width: 100%;
  height: 128px;
  flex-direction: column;
  letter-spacing: -0.6px;
  padding: 6px 25px 22px 15px;
`;

export const Price = styled.div`
  font-size: 16px;
  color: ${mainBlackColor};
`;

export const OldPrice = styled.span`
  font-size: 12px;
  color: ${transparentTextColor};
  text-decoration: line-through;
  margin-left: 6px;
`;

export const Shipping = styled.div`
  font-size: 12px;
  color: ${transparentTextColor};
`;

export const Title = styled.div`
  width: 100%;
  font-size: 16px;
  margin: 0 0 10px;
  color: ${mainBlackColor};
`;

export const Likes = styled(FlexContainer)`
  font-size: 14px;
`;

export const LikesCount = styled.span`
  color: ${secondaryTextColor};
  margin-left: 6px;
`;
