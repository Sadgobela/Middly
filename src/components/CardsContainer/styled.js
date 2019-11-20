import styled from 'styled-components';
import { FlexContainer } from '../../globalStyles';
import {
  primaryColor,
  mainBlackColor,
  mainWhiteColor
} from '../../constants/colors';

export const Header = styled(FlexContainer)`
  justify-content: flex-start;
  border-bottom: 2px ${primaryColor} solid;
  margin-bottom: 26px;
`;

export const Title = styled.div`
  font-size: 32px;
  color: ${mainBlackColor};
  font-weight: bold;
`;

export const Wrapper = styled.div`
  width: 100%;
  padding-top: ${({ paddingTop }) => paddingTop || 0}px;
  padding-bottom: 60px;
  background: ${mainWhiteColor};
`;
