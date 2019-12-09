import styled from 'styled-components';
import {FlexContainer} from '../../../../globalStyles';
import {primaryColor} from '../../../../constants/colors';

export const CategoriesWrapper = styled(FlexContainer)`
  position: relative;
  margin: 30px 0 30px -19px;

  @media (max-width: 1260px) {
    margin-left: 25px;
  }
`;

export const CategoryItem = styled.a`
  font-size: 14px;
  line-height: 20px;
  color: #000;
  margin-right: 49px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  letter-spacing: 0;
  padding: 0 19px 6px;

  &:hover {
    color: #000;
    box-shadow: 0 2px 0 0 #000;
  }
`;
