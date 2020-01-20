import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { arrayOf, object } from 'prop-types';
import { CategoryItem, CategoriesWrapper } from './styled';
import { ContentWrapper } from '../../../../globalStyles';
import SubcategoryPopup from '../SubcategoryPopup';

const CategoriesList = ({ list }) => {
  const [isSubcategoryOpen, toggleSubcategoryOpen] = useState(false);
  const [activeCategory, setActiveCategoty] = useState(null);

  return (
    <ContentWrapper>
      <CategoriesWrapper
        onMouseEnter={() => toggleSubcategoryOpen(!isSubcategoryOpen)}
        onMouseLeave={() => toggleSubcategoryOpen(!isSubcategoryOpen)}
        justifyContent="flex-start">
        {list.map(category => (
          <CategoryItem
            onMouseEnter={() => setActiveCategoty(category.name)}
            key={category.name}
          >
            {category.name}
          </CategoryItem>
        ))}
        <CSSTransition
          in={isSubcategoryOpen}
          timeout={300}
          classNames="subcategory"
          unmountOnExit
        >
          <SubcategoryPopup data={list.find(category => category.name === activeCategory) ? list.find(category => category.name === activeCategory).children : []} />
        </CSSTransition>
      </CategoriesWrapper>
    </ContentWrapper>
  );
};

CategoriesList.propTypes = {
  list: arrayOf(object).isRequired
};

export default CategoriesList;