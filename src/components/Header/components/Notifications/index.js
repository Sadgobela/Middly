import React from 'react';
import Div100vh from 'react-div-100vh';
import PropTypes from 'prop-types';

import {notifications} from 'constants/staticData';
import Plus from 'assets/Plus';
import {
  Wrapper,
  Header,
  Title,
  ViewAll,
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

const Notifications = ({setShowHamburger, setShowNotifications}) => {
  return (
    <Wrapper>
      <Header>
        <Title>Notifications</Title>
        <ViewAll
          onClick={() => {
            setShowHamburger(false);
            setShowNotifications(true);
          }}
        >
          View all
        </ViewAll>
      </Header>
      <Div100vh
        style={{
          height: '100vh',
          maxHeight: 'calc(100rvh - 84px - 74px - 54px - 80px)', // 84px (profile), 74px (tabs), 54px (header of section), 80px (navigation in footer)
          overflowX: 'hidden',
          overflowY: 'auto',
          borderTop: '1px solid #EFEFEF',
          borderBottom: '1px solid #EFEFEF'
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
    </Wrapper>
  );
};

Notifications.defaultProps = {
  setShowNotifications: () => {},
  setShowHamburger: () => {}
};

Notifications.propTypes = {
  setShowHamburger: PropTypes.func,
  setShowNotifications: PropTypes.func
};

export default Notifications;
