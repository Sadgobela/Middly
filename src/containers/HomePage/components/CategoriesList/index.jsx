import React from 'react';
import { arrayOf, string } from 'prop-types';
import { CategoryItem, CategoriesWrapper } from './styled';
import { ContentWrapper } from '../../../../globalStyles';

const CategoriesList = ({ list }) => (
  <ContentWrapper>
    <CategoriesWrapper justifyContent="flex-start">
      {list.map(category => (
        <CategoryItem key={category}>{category}</CategoryItem>
      ))}
    </CategoriesWrapper>
  </ContentWrapper>
);

CategoriesList.propTypes = {
  list: arrayOf(string).isRequired
};

export default CategoriesList;
