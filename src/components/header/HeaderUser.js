import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import 'comp-styles/header/Header-User.scss';
import Link from 'next/link';

import Avatar from 'components/general/Avatar';
import { ICON_USER_ARROW } from '../static/Icons';

import { headerReducer } from '../../reducers/Header';
import { openCloseAction } from '../../actions/HeaderActions';

export default class HeaderUser extends React.Component {
  static propTypes = {
    user: PropTypes.shape({}),
    open: PropTypes.bool,
    onLogout: PropTypes.func,
  };

  static defaultProps = {
    user: {},
    open: false,
    onLogout: () => console.debug('Unhandled `onLogout` event on HeaderUser'),
  };

  constructor(props) {
    super(props);
    this.state = {
      isOpen: props.open,
    };

    this.subscribeToHeader();
  }

  openUser = (event) => {
    const { isOpen } = this.state;
    this.setState({
      isOpen: !isOpen,
    });

    // if we are opening , thell others to close
    if (event) {
      headerReducer.dispatch(openCloseAction('user'));
    }
  };

  subscribeToHeader() {
    headerReducer.subscribe(() => {
      const { isOpen } = this.state;
      const state = headerReducer.getState();

      if (state.area && state.area !== 'user' && isOpen) {
        // some other area was opened and we are open
        this.openUser(null);
      }
    });
  }

  render() {
    const { user, onLogout } = this.props;
    const { isOpen } = this.state;

    return (
      <div className={classNames('user', { open: isOpen })}>
        <div
          className="user__preview"
          onClick={this.openUser}
          role="presentation"
        >
          <div className="user-avatar">
            <Avatar
              src={user.avatar}
              name={`${user.firstname} ${user.lastname}`}
            />
          </div>
          <div className="hello-username">
            <div className="greet">Hi,</div>
            <div className="username">{user.firstname}</div>
          </div>
          <div className="arrow">{ICON_USER_ARROW}</div>
        </div>
        <div className="user-dropdown">
          <div className="user-dropdown__wrapper">
            <ul className={`user-dropdown__top`}>
              <li>
                <Link href={`/profile/followers`}>Followers</Link>
                <span className={`value`}>{user.followers}</span>
                <span className={`title`}>Followers</span>
              </li>
              <li>
                <Link href={`/profile/following`}>Following</Link>
                <span className={`value`}>{user.following}</span>
                <span className={`title`}>Following</span>
              </li>
            </ul>
            <span className={`user-dropdown__divider`} />
            <ul className={`user-dropdown__bottom`}>
              <li>
                <Link href={`/profile/edit`}>My profile</Link>
                <span className={`value`} />
                <span className={`title`}>My profile</span>
              </li>
              <li>
                <Link href={`/recently-viewed`}>Recently viewed</Link>
                <span className={`value`} />
                <span className={`title`}>Recently viewed</span>
              </li>
              <li>
                {/*<Link href={"/profile/lists/wishlist"}>Whishlist</Link>*/}
                <span className={`value`} />
                <span className={`title`}>Whishlist</span>
              </li>
              {user && user.is_seller && (
                <li>
                  <Link href={`/shop/${user && user.shop.shop_url}`}>
                    My shop
                  </Link>
                  <span className={`value`} />
                  <span className={`title`}>My shop</span>
                </li>
              )}
              <li onClick={onLogout}>
                <span className={`value`} />
                <span className={`title`}>Log Out</span>
              </li>
            </ul>
          </div>
          {/*<div className="dropdown-triangle-up">▲</div>
          <div className="user-dropdown__wrapper">
            <div className="user-dropdown__user-avatar">
              <Avatar src={user.avatar} name={`${user.firstname} ${user.lastname}`} />
            </div>
            <div className="user-dropdown__name">
              {`${user.firstname} ${user.lastname}`}
            </div>
            <div className="user-dropdown__follow">
              <div className="user-dropdown__following">
                <p>Following</p>
                <p className="user-dropdown__following-amount" data-nfollowing={user.following}>
                  {user.following}
                </p>
              </div>
              <div className="user-dropdown__following">
                <p>Followers</p>
                <p className="user-dropdown__following-amount" data-nfollowers={user.followers}>
                  {user.followers}
                </p>
              </div>
            </div>*/}
          {/*<ul className="user-dropdown__menu">
              <li>Summary</li>
              <li>Recently Viewed</li>
              <li>Bids/Offers</li>
              <li><Link href="/profile/lists/wishlist"><div>WishList</div></Link></li>
              <li>Purchase History</li>
               <li><Link href="#"><div>Selling</div></Link></li>
              <li><Link prefetch href="/profile/edit"><div>Edit Profile</div></Link></li>
              <li onClick={onLogout} role="presentation">Exit</li>
            </ul>*/}
        </div>
        {/*<div className="header__popup-close" onClick={this.openUser} role="presentation">
            <span className="mobile-x-alignment">×</span>
          </div>*/}
      </div>
    );
  }
}
