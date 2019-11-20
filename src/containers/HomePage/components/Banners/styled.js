import styled from 'styled-components';
import { FlexContainer } from '../../../../globalStyles';
import { mainWhiteColor } from '../../../../constants/colors';

export const Box = styled(FlexContainer)`
  background: ${mainWhiteColor};
  justify-content: center;
  padding: 80px 20px;
`;

export const Image = styled.img`
  &:first-of-type {
    margin-right: 60px;
  }
`;
