import styled from 'styled-components';
import {mainBlackColor, primaryColor} from '../../../../constants/colors';
import {FlexContainer} from '../../../../globalStyles';

export const CategoriesWrapper = styled(FlexContainer)`
  height: 94px;
`;

export const CategoryItem = styled.div`
  font-size: 16px;
  color: ${mainBlackColor};
  margin-right: 49px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  letter-spacing: 0;

  &:hover {
    color: ${primaryColor};
  }
`;
