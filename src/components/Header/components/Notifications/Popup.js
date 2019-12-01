import React from 'react';
import Div100vh from 'react-div-100vh';
import PropTypes from 'prop-types';

import {notifications} from 'constants/staticData';
import Plus from 'assets/Plus';
import Arrow from 'assets/Arrow';
import {
  WrapperPopup,
  HeaderPopup,
  TitlePopup,
  Back,
  Content,
  Notification,
  NotificationAvatar,
  NotificationContent,
  NotificationName,
  NotificationText,
  NotificationDate,
  NotificationInfo,
  NotificationThumb,
  NotificationFollow
} from './styled';

const NotificationsPopup = ({showNotifications, setShowHamburger, setShowNotifications}) => {
  return (
    <WrapperPopup active={showNotifications}>
      <HeaderPopup>
        <Back
          onClick={() => {
            setShowHamburger(true);
            setShowNotifications(false);
          }}
        >
          <Arrow color="black" />
        </Back>
        <TitlePopup>Notifications</TitlePopup>
      </HeaderPopup>
      <Div100vh
        style={{
          height: '100vh',
          maxHeight: 'calc(100rvh - 134px)',
          overflowX: 'hidden',
          overflowY: 'auto',
          borderTop: '1px solid #EFEFEF'
        }}
      >
        <Content>
          {notifications &&
            notifications.length &&
            notifications.map((notification, key) => (
              <Notification key={key}>
                <NotificationAvatar src={notification.avatar} />

                <NotificationContent>
                  <NotificationInfo>
                    <NotificationName>{notification.name}</NotificationName>
                    <NotificationDate>{notification.date}</NotificationDate>
                    <NotificationText>{notification.text}</NotificationText>
                  </NotificationInfo>
                  {notification.thumb && <NotificationThumb src={notification.thumb} />}
                  {notification.follow === true || notification.follow === false ? (
                    <NotificationFollow active={notification.follow === true}>
                      {notification.follow === true ? null : <Plus fill="#fff" />}
                      {notification.follow === true ? 'Following' : 'Follow'}
                    </NotificationFollow>
                  ) : null}
                </NotificationContent>
              </Notification>
            ))}
        </Content>
      </Div100vh>
    </WrapperPopup>
  );
};

NotificationsPopup.defaultProps = {
  showNotifications: false,
  setShowHamburger: () => {},
  setShowNotifications: () => {}
};

NotificationsPopup.propTypes = {
  showNotifications: PropTypes.bool,
  setShowHamburger: PropTypes.func,
  setShowNotifications: PropTypes.func
};

export default NotificationsPopup;
