import React from 'react';
import 'comp-styles/header/MobileMenuContent.scss';
import Main from '../../containers/header/HeaderMobileMainContainer';
import Categories from './Header-mobile-categories';
import { connect } from 'react-redux';

class MobileMenuContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categoriesSequence: null,
    };
  }

  goUp = () => {
    if (this.state.categoriesSequence.length == 0) {
      this.setState({
        categoriesSequence: null,
      });
    } else {
      let currentSequence = [...this.state.categoriesSequence];
      currentSequence.splice(currentSequence.length - 1, 1);
      this.setState({
        categoriesSequence: currentSequence,
      });
    }
  };

  goBottom = (index) => {
    if (this.state.categoriesSequence.length > 0) {
      let last = this.state.categoriesSequence[
        this.state.categoriesSequence.length - 1
      ];

      this.setState({
        categoriesSequence: [
          ...this.state.categoriesSequence,
          last.children[index],
        ],
      });
    } else {
      this.setState({
        categoriesSequence: [this.props.categories[index]],
      });
    }
  };

  getCategories() {
    if (this.state.categoriesSequence.length == 0) return this.props.categories;
    var last = this.state.categoriesSequence[
      this.state.categoriesSequence.length - 1
    ];
    return last.children;
  }

  activateCategories = () => {
    this.setState({
      categoriesSequence: [],
    });
  };

  getCurrentName() {
    if (this.state.categoriesSequence.length == 0) return 'Categories';
    return this.state.categoriesSequence[
      this.state.categoriesSequence.length - 1
    ].name;
  }

  render() {
    if (this.props.categories == null) return null;
    return (
      <div className="hamburger-content">
        {this.state.categoriesSequence == null ? (
          <Main
            categoriesButtonVisible={true}
            goto={this.activateCategories}
            closeMenu={this.props.closeMenu}
          />
        ) : (
          <Categories
            goUp={this.goUp}
            goBottom={(index) => {
              this.goBottom(index);
            }}
            categories={this.getCategories()}
            currentTitle={this.getCurrentName()}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = (storeState) => {
  return {
    categories: storeState.category.categories,
  };
};

export default connect(mapStateToProps)(MobileMenuContent);
