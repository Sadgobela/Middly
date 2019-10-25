import React from 'react';
import Link from 'next/link';

import MidddlyInterface from '../../models/MidddlyInterface';
import Spinner from '../general/Spinner';

import { getPerfectUrlCategory } from '../../utils/helpers';

import { ICON_ARROW_DOWN } from '../static/Icons';

import 'comp-styles/header/MobileMenuContent.scss';

export default class MobileMenuContentCategories extends React.Component {
  state = {
    currentCategories: this.props.categories || null,
    breadcrumbsArray: [],
    fetching: false,
  };

  onChangeLevel = (category) => {
    const { breadcrumbsArray } = this.state;

    let newBreadcrumbsArray = breadcrumbsArray;
    newBreadcrumbsArray.push(category);

    this.setState({
      breadcrumbsArray: newBreadcrumbsArray,
      currentCategories: category.children,
    });
  };

  componentDidUpdate() {
    const { categories } = this.props;

    const { currentCategories, fetching } = this.state;

    if (!fetching && categories !== currentCategories) {
      this.setState({
        fetching: true,
        currentCategories: categories,
      });
    }
  }

  onGoBack = () => {
    const { categories } = this.props;

    const { breadcrumbsArray } = this.state;

    let newBreadcrumbsArray = breadcrumbsArray;
    newBreadcrumbsArray.splice(-1, 1);

    newBreadcrumbsArray.length > 0
      ? this.setState({
          breadcrumbsArray: newBreadcrumbsArray,
          currentCategories:
            newBreadcrumbsArray[newBreadcrumbsArray.length - 1].children,
        })
      : this.setState({ breadcrumbsArray: [], currentCategories: categories });
  };

  render = () => {
    const { categories, goBottom, currentTitle } = this.props;

    const { currentCategories, breadcrumbsArray } = this.state;

    let isMobile = MidddlyInterface.isMobile;

    if (isMobile) {
      return (
        <div className="hamburger-content__wrapper hamburger-content__innerLevel">
          <div className="hamburger-content__vertical">
            {currentCategories.length === 0 ? (
              <Spinner />
            ) : (
              <ul
                className={`hamburger-vertical-categories ${
                  breadcrumbsArray.length ? 'is-active' : ''
                }`}
              >
                {breadcrumbsArray && breadcrumbsArray.length > 0 && (
                  <li
                    className="hamburger-menu__back"
                    onClick={() => this.onGoBack()}
                  >
                    {ICON_ARROW_DOWN}
                    Go back to&nbsp;
                    {breadcrumbsArray.length > 0 && breadcrumbsArray.length > 1
                      ? breadcrumbsArray[breadcrumbsArray.length - 2].name
                      : currentTitle}
                  </li>
                )}
                <li className="hamburger-menu__vertical-header">
                  {breadcrumbsArray.length ? (
                    <React.Fragment>
                      {breadcrumbsArray[breadcrumbsArray.length - 1].name}{' '}
                      <Link
                        href={`/category/${getPerfectUrlCategory(
                          breadcrumbsArray[breadcrumbsArray.length - 1].name
                        )}-${breadcrumbsArray[breadcrumbsArray.length - 1].id}`}
                      >
                        View all
                      </Link>
                    </React.Fragment>
                  ) : (
                    currentTitle
                  )}
                </li>
                {currentCategories.map((item, idx) => {
                  let hastChilds = item.children.length === 0;

                  return (
                    <li
                      className="hamburger-menu__vertical-elements"
                      key={`menuCategory${idx}`}
                      onClick={() => !hastChilds && this.onChangeLevel(item)}
                    >
                      {!hastChilds ? (
                        <a href="#" className="subCategory">
                          {item.name}
                        </a>
                      ) : (
                        <Link
                          href={`/category/${getPerfectUrlCategory(
                            item.name
                          )}  -${item.id}`}
                        >
                          <a className="subCategory">{item.name}</a>
                        </Link>
                      )}
                      {!hastChilds && ICON_ARROW_DOWN}
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        </div>
      );
    } else {
      return (
        <div className="hamburger-content__wrapper hamburger-content__innerLevel">
          <div className="hamburger-content__vertical">
            <ul className="hamburger-vertical-categories">
              <li className="hamburger-menu__vertical-header">
                {currentTitle}
              </li>
              {categories.map((item, idx) => {
                let isBottom = item.children.length === 0;

                return (
                  <li
                    className="hamburger-menu__vertical-elements"
                    key={`menuCategory${idx}`}
                    onClick={() => {
                      if (isMobile && !isBottom) {
                        goBottom(idx);
                      }
                    }}
                    onMouseOver={() => {
                      if (!isMobile && !isBottom) {
                        goBottom(idx);
                      }
                    }}
                  >
                    {item.href !== undefined && (
                      <Link href={`${item.href}`}>
                        <a className="subCategory">{item.name}</a>
                      </Link>
                    )}
                    {!item.href && (
                      <a href="#!" className="subCategory">
                        {item.name}
                      </a>
                    )}
                    {!isBottom && ICON_ARROW_DOWN}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      );
    }
  };
}
