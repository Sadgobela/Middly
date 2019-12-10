import React from 'react';
import PropTypes from 'prop-types';

import Arrow from 'assets/Arrow';

import {WrapperSubCategory, TitleSubCategory, CustomLink, Header, Back} from './styled';

const SubCategory = ({category, setSubCategoryActive}) => {
  return (
    <WrapperSubCategory>
      <Header>
        <Back onClick={() => setSubCategoryActive(null)}>
          <Arrow color="black" />
        </Back>
        <TitleSubCategory>{category.name}</TitleSubCategory>
      </Header>
      {category.subCategories && category.subCategories.length
        ? category.subCategories.map((item, key) => {
            return (
              <CustomLink key={key}>
                {item.name}
                {item.subCategories && item.subCategories.length > 0 ? <Arrow color="black" /> : null}
              </CustomLink>
            );
          })
        : null}
    </WrapperSubCategory>
  );
};

SubCategory.defaultProps = {
  category: null,
  setSubCategoryActive: () => {}
};

SubCategory.propTypes = {
  category: PropTypes.object,
  setSubCategoryActive: PropTypes.func
};

export default SubCategory;
