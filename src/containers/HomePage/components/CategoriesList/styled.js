import styled from 'styled-components';
import { mainBlackColor, primaryColor } from '../../../../constants/colors';
import { FlexContainer } from '../../../../globalStyles';

export const CategoriesWrapper = styled(FlexContainer)`
  height: 100px;
`;

export const CategoryItem = styled.div`
  font-size: 16px;
  color: ${mainBlackColor};
  margin-right: 48px;
  font-weight: normal;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    color: ${primaryColor};
  }
`;
