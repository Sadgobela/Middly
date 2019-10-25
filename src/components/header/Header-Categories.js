import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import PerfectScrollbar from 'react-perfect-scrollbar';

import Spinner from '../general/Spinner';

import { getPerfectUrlCategory } from '../../utils/helpers';

import 'comp-styles/header/Header-Categories.scss';

export default class Categories extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mobile: this.props.mobile,
      show: this.props.show,
    };
  }

  render() {
    const {
      categories,
      fetchCategories,
      device,
      withPerfectScroll,
    } = this.props;

    const { mobile, show } = this.state;

    return categories ? (
      fetchCategories ? (
        <Spinner className={device ? '_' + device : ''} />
      ) : (
        <div
          className={
            mobile
              ? 'container mobile-categories'
              : 'categories container' + (device ? ' _' + device : '')
          }
        >
          {withPerfectScroll ? (
            <PerfectScrollbar>
              <nav
                className={show ? 'categories-wrapper' : 'categories-hidden'}
              >
                <ul className="categories-list">
                  {categories.map((category, index) => {
                    const thumb = '../static/images/cat' + (index + 1) + '.png';
                    const sku = getPerfectUrlCategory(category.name);

                    return (
                      <li key={category.id} className="categories-list__item">
                        <Link href={`/category/${sku}-${category.id}`}>
                          <a>
                            <span>{category.name}</span>
                            <span
                              className="categories-list__item-thumb"
                              style={{ backgroundImage: 'url(' + thumb + ')' }}
                            />
                          </a>
                        </Link>
                      </li>
                    );
                  })}
                  <li className="categories-list__item btn">
                    <Link href="/">
                      <a>Sell with us!</a>
                    </Link>
                  </li>
                  <li className="perfect-scroll-bar__separator" />
                </ul>
              </nav>
            </PerfectScrollbar>
          ) : (
            <nav className={show ? 'categories-wrapper' : 'categories-hidden'}>
              <ul className="categories-list">
                {categories.map((category) => {
                  const sku = getPerfectUrlCategory(category.name);
                  const childrens = category.children
                    ? category.children.map((children) => {
                        const skuChildren = getPerfectUrlCategory(
                          children.name
                        );

                        const childrensLevel2 = children.children
                          ? children.children.map((childrenLevel2) => {
                              const skuChildren2 = getPerfectUrlCategory(
                                childrenLevel2.name
                              );

                              return (
                                <li
                                  key={childrenLevel2.id}
                                  className="categories-sublist__col-list__item"
                                >
                                  <Link
                                    href={`/category/${skuChildren2}-${childrenLevel2.id}`}
                                  >
                                    {childrenLevel2.name}
                                  </Link>
                                </li>
                              );
                            })
                          : [];
                        return (
                          <div
                            key={children.id}
                            className="categories-sublist__col"
                          >
                            <span className="categories-sublist__col-name">
                              <Link
                                href={`/category/${skuChildren}-${children.id}`}
                              >
                                {children.name}
                              </Link>
                            </span>
                            <ul className="categories-sublist__col-list">
                              {childrensLevel2}
                            </ul>
                          </div>
                        );
                      })
                    : [];
                  return (
                    <li key={category.id} className="categories-list__item">
                      <Link href={`/category/${sku}-${category.id}`}>
                        <a>
                          <span>{category.name}</span>
                        </a>
                      </Link>
                      <div className="categories-sublist">
                        <div className="categories-sublist__inner">
                          {childrens}
                        </div>
                      </div>
                    </li>
                  );
                })}
                <li className="categories-list__item btn">
                  <Link href="/">
                    <a>Sell with us!</a>
                  </Link>
                </li>
              </ul>
            </nav>
          )}
        </div>
      )
    ) : null;
  }
}

Categories.propTypes = {
  device: PropTypes.string,
  mobile: PropTypes.bool,
  show: PropTypes.bool,
  withPerfectScroll: PropTypes.bool,
};
