import styled from 'styled-components';
import { FlexContainer } from '../../globalStyles';
import { primaryColor, mainBlackColor } from '../../constants/colors';

export const Header = styled(FlexContainer)`
  border-bottom: 2px ${primaryColor} solid;
`;

export const Title = styled.div`
  font-size: 32px;
  color: ${mainBlackColor};
  font-weight: bold;
`;

export const Thumb = styled.div`
  font-size: 16px;
  cursor: pointer;
  img {
    margin-left: 10px;
  }
`;

export const SliderWrapper = styled.div`
  padding: 36px 0;
  width: 100%;
  margin-bottom: 40px;
`;

export const SeeMoreButton = styled(FlexContainer)`
  cursor: pointer;
  width: 100%;
  flex-direction: column;
  display: flex !important;
  justify-content: center;
`;

export const CircleWrapper = styled(FlexContainer)`
  justify-content: center;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  border: 2px ${primaryColor} solid;
  margin-bottom: 10px;
`;

export const ButtonText = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: ${mainBlackColor};
`;
