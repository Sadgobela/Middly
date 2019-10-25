import React from 'react';
import { Router } from '../../routes';
import SearchDropdown from './Header-SearchDropdown';
import { connect } from 'react-redux';
import Search from '../../models/Search';

import {
  setGlobalSearchData,
  setGlobalSearchPending,
  setSearchRequest,
} from '../../actions/search';
import { loadFilteredProducts } from '../../reducers/product';
import SearchAutocomplete from './SearchAutocomplete';
import { ICON_SEARCH, ICON_SEARCH1 } from '../static/Icons';
import { getGlobalSearchData } from '../../api/searchApiService';
import Helpers from '../../models/Helpers';
import { searchProducts } from '../../api/productApiService';

class HeaderSearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileSearch: false,
      autocompleteActive: false,
      value: '',
    };

    this.filteredRequest = null;
    this.autoCompleteTimeOut = null;
  }

  // componentDidMount() {
  //   this.searchHandleFocus();
  //   window.addEventListener('resize', this.searchHandleFocus)
  // }
  //
  // componentWillUnmount() {
  //   window.removeEventListener('resize', this.searchHandleFocus)
  // }

  handleSearchButton = async (e) => {
    e.preventDefault();
    const { setSearchRequest, loadFilteredProducts, filters } = this.props;

    // const currentFilters = Search.getFilterValues(filters);
    console.log(this.state.autocompleteActive);
    if (this.state.autocompleteActive) {
      this.setState({ autocompleteActive: false });
    }

    if (window.innerWidth <= 640 && this.state.mobileSearch === false) {
      this.setState({
        mobileSearch: true,
        autocompleteActive: true,
      });
      return;
    } else {
      this.setState({
        mobileSearch: false,
      });
    }

    const activeTab = Router.query.tab ? Router.query.tab : 'products';

    Router.pushRoute(
      `/search?tab=${activeTab}&searchType=global&name=${this.search.value}`
    );
  };

  searchHandleFocus = () => {
    if (
      window.innerWidth >= 480 &&
      window.innerWidth >= 480 &&
      this.state.mobileSearch === false
    ) {
      this.setState({
        mobileSearch: true,
        autocompleteActive: true,
      });
    }
  };

  autoComplete = async (e) => {
    const { value } = e.target;
    this.setState({ value: value });
    this.setState({ autocompleteActive: true });
    this.props.setGlobalSearchPending(true);
    if (this.autoCompleteTimeOut) {
      clearTimeout(this.autoCompleteTimeOut);
    }

    this.autoCompleteTimeOut = setTimeout(async () => {
      try {
        // cancel previous request made if available
        if (this.filteredRequest) {
          this.filteredRequest.cancel();
        }
        // create cancelable request to get the last request only
        this.filteredRequest = Helpers.createCancelablePromise(
          getGlobalSearchData({ name: value })
        );

        if (this.filteredRequest) {
          const response = await this.filteredRequest;
          this.props.setGlobalSearchPending(false);
          this.props.setGlobalSearchData(response.data);
        }
        this.filteredRequest = null;
      } catch (e) {
        this.filteredRequest = null;
        this.props.setGlobalSearchPending(false);
        this.props.setGlobalSearchData(null);
        console.log(e);
      }
    }, 300);
  };

  getSearchResult = () => {};

  onSearchInputFocus = () => {
    if (!this.state.autocompleteActive && this.state.value) {
      this.toggleAutocomplete();
    }
  };

  toggleAutocomplete = () => {
    this.setState((prevState) => ({
      autocompleteActive: !prevState.autocompleteActive,
      mobileSearch: false,
    }));
  };

  render() {
    const {
      hideBottomMenu,
      globalSearchData,
      isGlobalSearchPending,
    } = this.props;
    const { dropdownOpened, autocompleteActive, value } = this.state;

    return (
      <div
        className={
          this.state.mobileSearch
            ? 'search mobile-search'
            : 'search' + (hideBottomMenu ? ' is-indent' : '')
        }
      >
        <form onSubmit={this.handleSearchButton} noValidate autocomplete="off">
          <input
            className="search-input"
            value={value}
            onChange={this.autoComplete}
            onFocus={this.onSearchInputFocus}
            ref={(input) => (this.search = input)}
            type="text"
            name="search"
            placeholder="How can we help you today?"
          />
          {/*<input className="search-input-mobile"*/}
          {/*      value={value}*/}
          {/*      onChange={this.autoComplete}*/}
          {/*      onFocus={this.searchHandleFocus}*/}
          {/*      ref={(input) => this.search = input}*/}
          {/*      type="text"*/}
          {/*      name="search"*/}
          {/*      placeholder="SEARCH"/>*/}
          {/*<div className="search-mobile-x" onClick={this.toggleAutocomplete}>×</div>*/}
          {/*<SearchDropdown opened={dropdownOpened}/>*/}
          <button className="search-btn" onClick={this.handleSearchButton}>
            {ICON_SEARCH}
          </button>
        </form>
        {autocompleteActive && (
          <SearchAutocomplete
            isMobile={this.state.mobileSearch}
            onChangeMobile={this.autoComplete}
            q={value}
            globalSearchData={globalSearchData}
            isGlobalSearchPending={isGlobalSearchPending}
            onClose={this.toggleAutocomplete}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    searchValue: state.search.value,
    filters: state.searchFilter,
    globalSearchData: state.search.searchData,
    isGlobalSearchPending: state.search.isPending,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setSearchRequest: (...args) => dispatch(setSearchRequest(...args)),
    setGlobalSearchPending: (value) => dispatch(setGlobalSearchPending(value)),
    setGlobalSearchData: (parmas) => dispatch(setGlobalSearchData(parmas)),
    loadFilteredProducts: (...args) => dispatch(loadFilteredProducts(...args)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderSearchBar);
