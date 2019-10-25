import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import isNil from 'lodash/isNil';
import { fetchNotifications } from 'reducers/userProfile';
import { userNotificationsSelector } from 'selectors/notifications';
import { logout } from 'reducers/auth';
import Notifications from './Header-Notifications';
import Mail from './Header-Mail';
import HeaderUser from './HeaderUser';
import Login from '../../containers/header/HeaderLoginContainer';
import { toggleInterestsModal } from '../../reducers/userProfile';

class UserAccount extends React.Component {
  static propTypes = {
    user: PropTypes.shape({}),
    isLoggedIn: PropTypes.bool,
    notifications: PropTypes.arrayOf(PropTypes.shape({})),
    onFetchNotifications: PropTypes.func.isRequired,
    onLogout: PropTypes.func.isRequired,
  };

  static defaultProps = {
    user: {},
    isLoggedIn: false,
    notifications: [],
  };

  componentDidMount() {
    const { onFetchNotifications } = this.props;
    onFetchNotifications();
  }

  componentDidUpdate(prevProps) {
    const { isLoggedIn, onFetchNotifications, user } = this.props;

    // if user is loggedin, try to fetch the notifications again
    if (
      isLoggedIn.toString() !== prevProps.isLoggedIn.toString() &&
      isLoggedIn
    ) {
      onFetchNotifications();
    }
  }

  render() {
    const { user, notifications, isLoggedIn, onLogout } = this.props;

    return (
      <div className="user-related">
        {isLoggedIn ? (
          <React.Fragment>
            <HeaderUser user={user} onLogout={onLogout} />
            <Notifications notifications={notifications} user={user} />
            <Mail />
          </React.Fragment>
        ) : (
          <Login />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  // use cached data while the browser is still fetching user data
  user: state.auth.me,
  notifications: userNotificationsSelector(state),
  isLoggedIn: state.auth.isLoggedIn,
});

const mapDispatchToProps = (dispatch) => ({
  onFetchNotifications() {
    dispatch(fetchNotifications());
  },
  onLogout() {
    dispatch(logout());
  },
  toggleInterestsModal() {
    dispatch(toggleInterestsModal());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserAccount);
