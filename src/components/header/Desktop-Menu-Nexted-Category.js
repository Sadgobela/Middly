import React from 'react';
import Link from 'next/link';
import { connect } from 'react-redux';

import { COMMAND_SET_DESKTOPSELECTED_1_LEVEL_CATEGORY } from '../../reducers/category';
import { SSL_OP_DONT_INSERT_EMPTY_FRAGMENTS } from 'constants';
import MidddlyInterface from '../../models/MidddlyInterface';

import { ICON_ARROW_DOWN } from '../static/Icons';

import { getPerfectUrlCategory } from '../../utils/helpers';

import 'comp-styles/header/FlyoutModal.scss';
import 'comp-styles/header/MobileMenuContent.scss';

class DesktopMenuContentNestedCategory extends React.Component {
  render() {
    const { selectedCategoryId, categories, goBack } = this.props;

    if (selectedCategoryId == null) return null;
    let currentCategories = categories.find(
      (item) => item.id === selectedCategoryId
    );
    let isMobile = MidddlyInterface.isMobile;

    return (
      <ul className="hamburger-content newSubCategoryItem-category">
        {isMobile && (
          <div>
            <Link>
              <a className="newSubCategoryItem-backButton" onClick={goBack}>
                {ICON_ARROW_DOWN}
                Go back to<strong>&nbsp;Categories</strong>
              </a>
            </Link>
            <hr />
            <div className="newSubCategoryItem-heading">
              <h3>{currentCategories.name}</h3>
              <Link href="">
                <a className="btn-link">View All</a>
              </Link>
            </div>
          </div>
        )}
        {currentCategories.children.map((item) => {
          return <CategoryWithNested category={item} />;
        })}
      </ul>
    );
  }
}

class CategoryWithNested extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { category } = this.props;

    return (
      <li className="newSubCategoryItem-group">
        <a href="#" className="newSubCategoryItem">
          <span>{category.name}</span>
        </a>

        <ul className="newSubCategoryItem-section">
          {category.children.map((item, idx) => {
            const sku = getPerfectUrlCategory(item.name);

            return (
              <li>
                <Link
                  href={`/category/${sku}-${item.id}`}
                  className="newSubCategoryItem-name"
                  key={`nestedCategory${idx}`}
                >
                  <span>{item.name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </li>
    );
  }
}

const mapStateToProps = (storeState) => {
  return {
    categories: storeState.category.categories,
    selectedCategoryId: storeState.category.desktopSelected1LevelCategory,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    goBack: () => {
      dispatch(
        COMMAND_SET_DESKTOPSELECTED_1_LEVEL_CATEGORY.createFromPayload(null)
      );
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DesktopMenuContentNestedCategory);
