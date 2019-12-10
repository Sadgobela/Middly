import React from 'react';
import Div100vh from 'react-div-100vh';
import PropTypes from 'prop-types';

import {
  Wrapper,
  Header,
  Title,
  ViewAll,
  Content,
  Message,
  MessageAvatarContainer,
  MessageAvatar,
  MessageOnline,
  MessageContent,
  MessageName,
  MessageText,
  MessageDate,
  MessageCount
} from './styled';
import {messages} from 'constants/staticData';

const Messages = ({setShowHamburger, setShowMessages}) => {
  return (
    <Wrapper>
      <Header>
        <Title>Messages</Title>
        <ViewAll
          onClick={() => {
            setShowHamburger(false);
            setShowMessages(true);
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
          {messages &&
            messages.length &&
            messages.map((message, key) => (
              <Message key={key}>
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
    </Wrapper>
  );
};

Messages.defaultProps = {
  setShowHamburger: () => {},
  setShowMessages: () => {}
};

Messages.propTypes = {
  setShowHamburger: PropTypes.func,
  setShowMessages: PropTypes.func
};

export default Messages;
