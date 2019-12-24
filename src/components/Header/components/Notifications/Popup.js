import React, {useRef} from 'react';
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
  const wrapper = useRef(null);
  let movedX = null,
    startX = null,
    moving = false;

  const touchStart = (e) => {
    startX = e.targetTouches[0].clientX;

    if (wrapper && wrapper.current && wrapper.current.contains(e.target)) {
      moving = true;
    }
  };

  const touchMove = (e) => {
    const diffX = e.changedTouches[0].clientX - startX;

    if (diffX > 0 && moving && wrapper && wrapper.current && wrapper.current.contains(e.target)) {
      movedX = diffX;
      wrapper.current.style.transform = `translate(${movedX}px, 0)`;
    }
  };

  const touchEnd = (e) => {
    if (wrapper && wrapper.current && wrapper.current.contains(e.target)) {
      const diffX = e.changedTouches[0].clientX - startX;

      if (diffX >= 40 && moving) {
        setShowHamburger(true);
        setShowNotifications(false);
        movedX = null;
        moving = false;
        wrapper.current.style = '';
      } else {
        movedX = null;
        moving = false;
        wrapper.current.style.transform = 'translate(0, 0)';
      }
    }
  };

  return (
    <WrapperPopup
      active={showNotifications}
      ref={wrapper}
      onTouchStart={(e) => touchStart(e)}
      onTouchMove={(e) => touchMove(e)}
      onTouchEnd={(e) => touchEnd(e)}
    >
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
          maxHeight: 'calc(100rvh - 57px - 70px)', // 57px (header), 70px (header of the popup)
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
