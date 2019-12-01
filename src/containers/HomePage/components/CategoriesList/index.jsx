import React, { Component } from 'react';
import { arrayOf, string } from 'prop-types';
import { CategoryItem, CategoriesWrapper } from './styled';
import { ContentWrapper } from '../../../../globalStyles';

export default class CategoriesList extends Component {
  state = {
    current: 'mail',
  };

  render() {
    const { list } = this.props;

    return (
      <ContentWrapper>
        <CategoriesWrapper justifyContent="flex-start">
          {list.map(category => (
            <CategoryItem className="menu-item"
                          key={category}
            >
              {category}
            </CategoryItem>
          ))}
        </CategoriesWrapper>
      </ContentWrapper>
    );
  }
}

CategoriesList.propTypes = {
  list: arrayOf(string).isRequired
};
