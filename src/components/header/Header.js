import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/comp-styles/header/Header.scss';
import Categories from './Header-Categories';
import Basket from './Header-Basket';
// import Language from './Header-Language';
import MobileMenuContent from './Mobile-Menu-Content';
import DesktopMenuContent from './Desktop-Menu-Content-level1';
import DesktopMenuContentNested from './Desktop-Menu-Nexted-Category';
import { ICON_BASKET, MIDDDLY_LOGO_NEW } from '../static/Icons';
// import MidddlyInterface from '../../models/MidddlyInterface';
import HeaderAccount from './Header-Account';
import HeaderSearchBar from './Header-Search-Bar';
import SellerButton from './SellerButton';
import HeaderBasket from './Header-Basket';
import cookie from 'react-cookies';
import {
  CART_QUOTE_ID_COOKIE_NAME,
  getCartList,
  initCart,
} from '../../api/checkoutApiService';
// import { connect } from 'react-redux';
// import { syncCartItemsFromBackend } from '../../reducers/productCart';

class Header extends React.Component {
  state = {
    expanded: false,
    hideBottomMenu: false,
  };

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
    // MidddlyInterface.setMobile(window.innerWidth < 768);

    // Create cart in magento
    this.createCart();

    // Load cart items from magento
    this.loadCartItems();
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  /**
   * Create cart if not exist
   * @returns {Promise<void>}
   */
  createCart = async () => {
    if (cookie.load(CART_QUOTE_ID_COOKIE_NAME)) {
      return;
    }
    try {
      const response = await initCart();
      console.log(response.data);
      cookie.save(CART_QUOTE_ID_COOKIE_NAME, response.data.data.cartId);
    } catch (e) {
      console.log(e);
    }
  };

  loadCartItems = async () => {
    try {
      const response = await getCartList();
      let items = [];
      if (response.data.data && response.data.data.cartId) {
        items = response.data.data.cartId.items;
      }
      // this.props.syncCartItemsFromBackend(items);
    } catch (e) {
      console.log(e);
    }
  };

  handleClickOutside = (event) => {
    if (
      this.wrapperRef &&
      !this.wrapperRef.contains(event.target) &&
      window.innerWidth <= 1080 &&
      event.target.className === 'mobile-background'
    ) {
      this.setState({
        expanded: false,
      });
    }
  };

  handleOpenMenu() {
    this.setState((prevState) => {
      return {
        expanded: !prevState.expanded,
      };
    });
  }

  setWrapperRef = (node) => {
    this.wrapperRef = node;
  };

  //TODO: We will separeta it soon, now it is problem with very coupled styles.
  renderLogoLeftSideBar = (isMobile) => {
    const { selectedCategoryId } = this.props;

    const { expanded } = this.state;

    return [
      <div className="hamburger-menu mobile-hamburger" key={'hamburger'}>
        {expanded && (
          <div ref={this.setWrapperRef} className="hamburger-menu__less-640">
            <div>
              {isMobile && selectedCategoryId ? (
                <MobileMenuContent />
              ) : (
                <DesktopMenuContent />
              )}
            </div>
            {
              <div
                className={isMobile ? '' : 'hamburger-menu__desktop-submenu'}
              >
                <DesktopMenuContentNested />
              </div>
            }
          </div>
        )}

        <span
          className="icon-bar"
          role="button"
          style={{ left: null }}
          onClick={(event) => {
            this.handleOpenMenu(event);
          }}
        >
          <span />
        </span>
        <div
          className="mobile-background"
          onClick={(event) => {
            this.handleOpenMenu(event);
          }}
        />
      </div>,
      <div className="logo" key={'logo'}>
        <Link to="/">
          <a>{MIDDDLY_LOGO_NEW}</a>
        </Link>
      </div>,
    ];
  };

  render() {
    let isMobile = MidddlyInterface.isMobile;

    const {
      categories,
      fetchCategories,
      // hideBottomMenu,
      mobileScrolled,
      marketplace,
      feed,
      show,
      page,
    } = this.props;

    const { expanded, hideBottomMenu } = this.state;

    const menu = (
      <nav className="top">
        <ul className="top-menu">
          <li
            className={
              'top-menu__element ' +
              (mobileScrolled || marketplace ? 'active' : '')
            }
          >
            <Link to="/">
              <a>
                <strong>Marketplace</strong>
              </a>
            </Link>
          </li>
          <li className={'top-menu__element feed ' + (feed ? 'active' : '')}>
            <Link to="/feed">
              <a>Feed</a>
            </Link>
          </li>
        </ul>
      </nav>
    );

    return (
      <header className={expanded ? 'mobile-opened' : null}>
        <div className={'header-menu'}>
          <div className="menu-box-shadow">
            <div className="container">
              {this.renderLogoLeftSideBar(isMobile)}
              {!hideBottomMenu ? menu : !isMobile && menu}
              {isMobile && <HeaderBasket />}
              <HeaderSearchBar hideBottomMenu={hideBottomMenu} />
              <div className="top-buttons">
                <SellerButton />
                <HeaderAccount />
                <div className="site-related">
                  <Basket />
                  {/*<Language />*/}
                </div>
              </div>
            </div>
          </div>
          <Categories
            show={show}
            page={page}
            device={'desktop'}
            fetchCategories={fetchCategories}
            categories={categories}
          />
        </div>
      </header>
    );
  }
}
//
// const mapDispatchToProps = (dispatch) => {
//   return {
//     syncCartItemsFromBackend: (items) => {
//       dispatch(syncCartItemsFromBackend(items));
//     },
//   };
// };

export default Header;
// (
//   null,
//   mapDispatchToProps
// )(Header);
