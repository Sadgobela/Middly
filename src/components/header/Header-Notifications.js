import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Link from 'next/link';
import isEmpty from 'lodash/isEmpty';
import { Notification } from '../static/Icons';

import { headerReducer } from '../../reducers/Header';
import { openCloseAction } from '../../actions/HeaderActions';
import NotificationItem from './NotificationItem';

import 'comp-styles/header/Header-Notifications.scss';

export default class Notifications extends React.Component {
  static propTypes = {
    notifications: PropTypes.arrayOf(PropTypes.shape({})),
    user: PropTypes.shape({}),
    open: PropTypes.bool,
    // maximum notifications will be shown in `HeaderNotifications`
    maxNotifications: PropTypes.number,
  };

  static defaultProps = {
    notifications: [],
    user: {},
    open: false,
    maxNotifications: 3,
  };

  constructor(props) {
    super(props);
    this.state = {
      isOpen: props.open,
    };

    const that = this;
    headerReducer.subscribe(() => {
      const state = headerReducer.getState();
      console.log('subscribed Basket ', state);

      if (state.area && state.area !== 'notifications' && that.state.isOpen) {
        // some other area was opened and we are open
        that.openClose(null);
      }
    });
  }

  openClose = (event) => {
    const { isOpen } = this.state;

    this.setState({
      isOpen: !isOpen,
    });

    // if we are opening , tell others to close
    if (event) {
      headerReducer.dispatch(openCloseAction('notifications'));
    }
  };

  render() {
    const { notifications, maxNotifications, user } = this.props;
    const { isOpen } = this.state;

    const showAllNotificationsLink = notifications.length > maxNotifications;

    return (
      <div className={classNames('notifications', { open: isOpen })}>
        <span
          onClick={this.openClose}
          className="notifications-control"
          role="presentation"
        >
          {Notification}
        </span>
        <div className="notifications-dropdown">
          <div className="dropdown-triangle-up">▲</div>
          <div className="notifications-dropdown__wrapper">
            {isEmpty(notifications) && <p>No notifications available</p>}
            {showAllNotificationsLink && (
              <div className="notifications-dropdown__link">
                <Link href="/profile/notifications">
                  <div>View All Notifications</div>
                </Link>
              </div>
            )}
            {notifications.slice(0, maxNotifications).map((notification) => (
              <NotificationItem
                key={notification.id}
                type={notification.type}
                object={notification.object}
                actor={notification.actor}
                timestamp={notification.timestamp}
                user={user}
              />
            ))}
          </div>
        </div>
        <div
          className="header__popup-close"
          onClick={this.openClose}
          role="presentation"
        >
          <span className="mobile-x-alignment">×</span>
        </div>
      </div>
    );
  }
}
