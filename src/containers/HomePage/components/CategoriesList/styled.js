import styled from 'styled-components';
import {FlexContainer} from '../../../../globalStyles';
import {mainBlackColor, primaryColor} from '../../../../constants/colors';

export const CategoriesWrapper = styled(FlexContainer)`
  padding: 0 15px;
`;

export const CategoryItem = styled.a`
  font-size: 16px;
  color: ${mainBlackColor};
  margin-right: 49px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  letter-spacing: 0;
  padding: 26px 24px
  
  &:hover {
    color: ${primaryColor};
  }
`;
