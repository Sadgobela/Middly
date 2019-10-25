import React from 'react';
import 'comp-styles/header/MobileMenuContent.scss';
import Main from '../../containers/header/HeaderMobileMainContainer';
import Categories from './Header-mobile-categories';
import { connect } from 'react-redux';

class DesktopMenuContentLevel1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showList: true,
    };
  }

  onCategory1LevelClick = (index) => {
    let category = this.props.categories[index];
    this.props.onCategory1LevelClick(category.id);
  };

  getCategories() {
    if (this.state.showList) return this.props.categories;
    return null;
  }

  activateCategories = () => {
    this.setState({
      showList: true,
    });
  };

  componentWillUnmount() {
    this.props.onCategory1LevelClick(null);
  }

  deactivateCategories = () => {
    this.setState(
      {
        showList: false,
      },
      () => {
        this.props.onCategory1LevelClick(null);
      }
    );
  };

  getCurrentName() {
    if (this.props.currentLevel1Category == null) return 'Categories';
    return null;
  }

  render() {
    if (MidddlyInterface.isMobile && this.props.selectedCategoryId != null)
      return null;
    let getCategories = this.getCategories();
    return (
      <div className="hamburger-content">
        <Main
          categoriesButtonVisible={getCategories == null}
          goto={this.activateCategories}
        >
          {getCategories != null && (
            <Categories
              goUp={this.deactivateCategories}
              goBottom={this.onCategory1LevelClick}
              categories={getCategories}
              currentTitle={this.getCurrentName()}
            />
          )}
        </Main>
      </div>
    );
  }
}

const mapStateToProps = (storeState) => {
  return {
    categories: storeState.category.categories,
    selectedCategoryId: storeState.category.desktopSelected1LevelCategory,
  };
};
import { COMMAND_SET_DESKTOPSELECTED_1_LEVEL_CATEGORY } from '../../reducers/category';
import MidddlyInterface from '../../models/MidddlyInterface';

const mapDispatchToProps = (dispatch, props) => {
  return {
    onCategory1LevelClick: (id) => {
      dispatch(
        COMMAND_SET_DESKTOPSELECTED_1_LEVEL_CATEGORY.createFromPayload(id)
      );
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DesktopMenuContentLevel1);
