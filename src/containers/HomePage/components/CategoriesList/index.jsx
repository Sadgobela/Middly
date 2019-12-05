import React, { Component, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { arrayOf, string } from 'prop-types';
import { CategoryItem, CategoriesWrapper } from './styled';
import { ContentWrapper } from '../../../../globalStyles';
import SubcategoryPopup from '../SubcategoryPopup';

const CategoriesList = ({list})=> {
  const [isSubcategoryOpen, toggleSubcategoryOpen] = useState(false);

  return (
    <ContentWrapper>
      <CategoriesWrapper
        onMouseEnter={()=>toggleSubcategoryOpen(!isSubcategoryOpen)}
        onMouseLeave={()=>toggleSubcategoryOpen(!isSubcategoryOpen)}
        justifyContent="flex-start">
        {list.map(category => (
          <CategoryItem key={category} >
            {category}
          </CategoryItem>
        ))}
        <CSSTransition
          in={isSubcategoryOpen}
          timeout={300}
          classNames={'subcategory'}
        >
          <SubcategoryPopup/>
        </CSSTransition>
      </CategoriesWrapper>
    </ContentWrapper>
  );
};

CategoriesList.propTypes = {
  list: arrayOf(string).isRequired
};

export default CategoriesList;