import React from 'react';
import Link from 'next/link';
import { connect } from 'react-redux';
import { Button } from 'antd';

import HeaderBasket from './Header-Basket';
import Avatar from 'components/general/Avatar';
import ModalTools from '../general/ModalTools';
import User from '../../models/MidddlyUser';

import {
  ICON_SEARCH,
  Location,
  Logout,
  ICON_MASTERCARD,
  ICON_VISA,
  ICON_PAYPAL,
  SettingsIcon,
} from '../static/Icons';

import 'comp-styles/header/MobileMenuContent.scss';

class MobileMenuContent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
      isSettingsModalVisible: false,
      isProfileMenuVisible: false,
    };
  }

  componentDidMount() {
    this.setState({
      isLoggedIn: User.isLoggedIn(),
    });
  }

  logout = () => {
    User.logout();
  };

  showModal = () => {
    this.setState({
      isSettingsModalVisible: true,
    });
  };

  handleOk = () => {
    this.setState({
      isSettingsModalVisible: false,
    });
  };

  handleCancel = () => {
    this.setState({
      isSettingsModalVisible: false,
    });
  };

  switchProfileMenu = () => {
    const { me } = this.props;

    const { isProfileMenuVisible } = this.state;

    this.setState({
      isProfileMenuVisible: me && !me.id ? false : !isProfileMenuVisible,
    });
  };

  backToAccount = () => {
    this.setState({
      isProfileMenuVisible: false,
    });
  };

  render = () => {
    const { children, openSignUp, openLogin, me, currentCountry } = this.props;

    const { isSettingsModalVisible, isProfileMenuVisible } = this.state;

    return (
      <div className="hamburger-content__wrapper">
        <div className="hamburger-content__vertical">
          <div className="hamburger-content__header">
            <div className="user-avatar" onClick={this.switchProfileMenu}>
              {me && me.id > 0 ? (
                <React.Fragment>
                  <Avatar
                    src={me.avatar}
                    name={`${me.firstname} ${me.lastname}`}
                  />
                  <div className="hello-username">
                    Hi,
                    <br />
                    {me.firstname}
                  </div>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  <Avatar src="" name="UU" />
                  <div className="hello-username">
                    Hi,
                    <br />
                    User
                  </div>
                </React.Fragment>
              )}
            </div>
            {/*<Link href="#"><a className="mobile-search">{ICON_SEARCH}</a></Link>*/}
            <HeaderBasket />
          </div>
          <div className="hamburger-content__location">
            <div className="hamburger-location__map">{Location}</div>
            <div className="hamburger-location__city">
              {currentCountry ? currentCountry.name : ''}
            </div>

            <div>
              <a
                className="hamburger-location__change"
                onClick={this.showModal}
              >
                Change
              </a>
              <ModalTools
                visible={isSettingsModalVisible}
                onOk={this.handleOk}
                onCancel={this.handleCancel}
              />
            </div>
          </div>
          <hr />
          {!isProfileMenuVisible && (
            <div>
              <ul className="hamburger-vertical-categories">
                <li className="hamburger-menu__vertical-elements">
                  <Link href="/">
                    <a>Marketplace</a>
                  </Link>
                </li>
                <li className="hamburger-menu__vertical-elements">
                  <Link href="/feed">
                    <a>Feed</a>
                  </Link>
                </li>
              </ul>
              <hr />
            </div>
          )}
          {!isProfileMenuVisible && children != null && children}
          {/*<div className="hamburger-content__viewAll"><a className="btn-link">View All</a></div>*/}
          <hr />
          {me && me.id > 0 && (
            <React.Fragment>
              {isProfileMenuVisible && (
                <div>
                  <ul className="hamburger-vertical-categories notification-list">
                    <li className="hamburger-menu__vertical-elements">
                      <span className="icon-element__info">+90</span>
                      <Link href="#">
                        <a>MidCoints</a>
                      </Link>
                    </li>
                    <li className="hamburger-menu__vertical-elements">
                      <span className="icon-element__info">864</span>
                      <Link href="#">
                        <a>Followers</a>
                      </Link>
                    </li>
                    <li className="hamburger-menu__vertical-elements">
                      <span className="icon-element__info">12</span>
                      <Link href="#">
                        <a>Following</a>
                      </Link>
                    </li>
                    <li className="hamburger-menu__vertical-elements">
                      <span className="icon-element__info">+392</span>
                      <Link href="/messages">
                        <a>Messages</a>
                      </Link>
                    </li>
                  </ul>
                  <hr />
                  <ul className="hamburger-vertical-categories notification-list">
                    <li className="hamburger-menu__vertical-elements">
                      <i className="icon-element-settings" />
                      <Link href="/summary">
                        <a>My profile</a>
                      </Link>
                    </li>
                    <li className="hamburger-menu__vertical-elements">
                      <i className="icon-element-settings" />
                      <Link href="/recently-viewed">
                        <a>Recently viewed</a>
                      </Link>
                    </li>
                    <li className="hamburger-menu__vertical-elements">
                      <i className="icon-element-settings" />
                      <Link href="/">
                        <a>Lists</a>
                      </Link>
                    </li>
                    <li className="hamburger-menu__vertical-elements">
                      <i className="icon-element-settings">{SettingsIcon}</i>
                      <Link href="/">
                        <a>Settings</a>
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
              {!isProfileMenuVisible && (
                <React.Fragment>
                  <hr />
                  <div className="hamburger-vertical-settings">
                    <div className="hamburger-settings__location">
                      {Location}
                      Ukraine
                    </div>
                    <div className="hamburger-settings__item">Eng (US)</div>
                    <div className="hamburger-settings__item">$ (USD)</div>
                  </div>
                  <div className="hamburger-content__paymentMethods">
                    {ICON_VISA}
                    {ICON_PAYPAL}
                    {ICON_MASTERCARD}
                    {ICON_PAYPAL}
                  </div>
                </React.Fragment>
              )}
              {me && me.id > 0 && (
                <ul className="hamburger-vertical-categories">
                  <li
                    className="hamburger-menu__vertical-elements icon-element"
                    onClick={this.logout.bind(this)}
                  >
                    {Logout}
                    <Link href="#!">
                      <a>Log Out</a>
                    </Link>
                  </li>
                </ul>
              )}

              {isProfileMenuVisible && (
                <div className="hamburger-vertical-categories menu-footer">
                  <Button htmlType={'button'} onClick={this.backToAccount}>
                    Back to account
                  </Button>
                </div>
              )}
            </React.Fragment>
          )}
          {me && !me.id && (
            <div className="hamburger-vertical-categories menu-footer">
              <Button type="primary" onClick={openSignUp} htmlType={'button'}>
                Create account
              </Button>
              <Button onClick={openLogin} htmlType={'button'}>
                Log in
              </Button>
            </div>
          )}
        </div>
      </div>
    );
  };
}

const mapStateToProps = (state) => {
  return {
    currentCountry: state.countries.currentCountry,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MobileMenuContent);
