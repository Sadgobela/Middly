import React from 'react';
import PropTypes from 'prop-types';

import Arrow from 'assets/Arrow';

import {Wrapper, Title, CustomLink} from './styled';
import {primaryColor} from 'constants/colors';
import {categories} from 'constants/staticData';

const Categories = ({setSubCategoryActive}) => {
  return (
    <Wrapper>
      <Title>Categories</Title>
      {categories && categories.length
        ? categories.map((category, key) => {
            return (
              <CustomLink key={key} onClick={() => setSubCategoryActive(category)}>
                {category.name}
                {category.subCategories && category.subCategories.length > 0 ? <Arrow color="black" /> : null}
              </CustomLink>
            );
          })
        : null}
      <CustomLink color={primaryColor}>View All</CustomLink>
    </Wrapper>
  );
};

Categories.defaultProps = {
  setSubCategoryActive: () => {}
};

Categories.propTypes = {
  setSubCategoryActive: PropTypes.func
};

export default Categories;
