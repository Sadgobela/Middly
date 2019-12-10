import React from 'react';
import Div100vh from 'react-div-100vh';
import PropTypes from 'prop-types';

import {messages} from 'constants/staticData';
import Arrow from 'assets/Arrow';
import SearchIcon from 'assets/Search';
import AddMessage from 'assets/AddMessage';
import {
  WrapperPopup,
  HeaderPopup,
  TitlePopup,
  Back,
  Content,
  Message,
  MessageAvatarContainer,
  MessageAvatar,
  MessageOnline,
  MessageContent,
  MessageName,
  MessageText,
  MessageCount,
  MessageDate,
  SearchContainer,
  Search
} from './styled';

const MessagesPopup = ({showMessages, setShowHamburger, setShowMessages}) => {
  return (
    <WrapperPopup active={showMessages}>
      <HeaderPopup>
        <Back
          onClick={() => {
            setShowHamburger(true);
            setShowMessages(false);
          }}
        >
          <Arrow color="black" />
        </Back>
        <TitlePopup>Messages</TitlePopup>
        <AddMessage
          style={{position: 'absolute', top: 'calc(50% + 3px)', right: 16, transform: 'translate(0, -50%)'}}
        />
      </HeaderPopup>
      <Div100vh
        style={{
          height: '100vh',
          maxHeight: 'calc(100rvh - 57px - 70px)', // 57px (header), 70px (header of the popup)
          overflowX: 'hidden',
          overflowY: 'auto'
        }}
      >
        <Content>
          <SearchContainer>
            <SearchIcon fill="#999999" />
            <Search placeholder="Search in Messages…" />
          </SearchContainer>
          {messages &&
            messages.length &&
            messages.map((message, key) => (
              <Message key={key} notTop={key === 0}>
                <MessageAvatarContainer>
                  <MessageAvatar src={message.avatar} />
                  {message.online && <MessageOnline />}
                </MessageAvatarContainer>

                <MessageContent>
                  <MessageName>{message.name}</MessageName>
                  <MessageText small={message.count && message.count > 0}>{message.text}</MessageText>
                  {message.count && message.count > 0 ? <MessageCount>{message.count}</MessageCount> : null}
                </MessageContent>

                <MessageDate>{message.date}</MessageDate>
              </Message>
            ))}
        </Content>
      </Div100vh>
    </WrapperPopup>
  );
};

MessagesPopup.defaultProps = {
  showMessages: false,
  setShowHamburger: () => {},
  setShowMessages: () => {}
};

MessagesPopup.propTypes = {
  showMessages: PropTypes.bool,
  setShowHamburger: PropTypes.func,
  setShowMessages: PropTypes.func
};

export default MessagesPopup;
