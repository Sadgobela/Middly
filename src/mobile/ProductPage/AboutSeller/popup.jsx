import React, { useEffect } from 'react';
import Div100vh from 'react-div-100vh';
import { string, bool, func } from 'prop-types';

import avatar from 'images/avatar.png'

import Icon from 'components/Icon';

import {
  PopupWrapper,
  IconWrapper,
  Header,
  Title,
  FollowerWrapper,
  FollowerAvatar,
  FollowerName,
  FollowerUserName,
  FollowerButton
} from './styled';

const Popup = ({ showPopup, setShowPopup }) => {
  useEffect(() => {
    if(showPopup) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [showPopup]);

  return <PopupWrapper active={showPopup}>
    <Header>
      <Title>Followers</Title>

      <IconWrapper onClick={() => setShowPopup(false)}>
        <Icon
          type="arrowBack"
          svgStyle={{ width: 9, height: 9, color: '#1A1A1A' }}
        />
      </IconWrapper>
    </Header>

    <Div100vh
      style={{
        height: '100vh',
        padding: '0',
        maxHeight: 'calc(100rvh - 70px)',
        overflowX: 'hidden',
        overflowY: 'auto'
      }}
    >
      <FollowerWrapper>
        <FollowerAvatar src={avatar}/>
        <FollowerName>
          Nika Pink
          <FollowerUserName>@username </FollowerUserName>
        </FollowerName>
        <FollowerButton>
          <Icon type="plus" svgStyle={{fill: '#fff'}}/>
          Follow
        </FollowerButton>
      </FollowerWrapper>

      <FollowerWrapper>
        <FollowerAvatar src={avatar}/>
        <FollowerName>
          Nika Pink
          <FollowerUserName>@username </FollowerUserName>
        </FollowerName>
        <FollowerButton active>
          Following
        </FollowerButton>
      </FollowerWrapper>

      <FollowerWrapper>
        <FollowerAvatar src={avatar}/>
        <FollowerName>
          Nika Pink
          <FollowerUserName>@username </FollowerUserName>
        </FollowerName>
        <FollowerButton active>
          Following
        </FollowerButton>
      </FollowerWrapper>

      <FollowerWrapper>
        <FollowerAvatar src={avatar}/>
        <FollowerName>
          Nika Pink
          <FollowerUserName>@username </FollowerUserName>
        </FollowerName>
        <FollowerButton>
          <Icon type="plus" svgStyle={{fill: '#fff'}}/>
          Follow
        </FollowerButton>
      </FollowerWrapper>

      <FollowerWrapper>
        <FollowerAvatar src={avatar}/>
        <FollowerName>
          Nika Pink
          <FollowerUserName>@username </FollowerUserName>
        </FollowerName>
        <FollowerButton active>
          Following
        </FollowerButton>
      </FollowerWrapper>

      <FollowerWrapper>
        <FollowerAvatar src={avatar}/>
        <FollowerName>
          Nika Pink
          <FollowerUserName>@username </FollowerUserName>
        </FollowerName>
        <FollowerButton active>
          Following
        </FollowerButton>
      </FollowerWrapper>

      <FollowerWrapper>
        <FollowerAvatar src={avatar}/>
        <FollowerName>
          Nika Pink
          <FollowerUserName>@username </FollowerUserName>
        </FollowerName>
        <FollowerButton active>
          Following
        </FollowerButton>
      </FollowerWrapper>

      <FollowerWrapper>
        <FollowerAvatar src={avatar}/>
        <FollowerName>
          Nika Pink
          <FollowerUserName>@username </FollowerUserName>
        </FollowerName>
        <FollowerButton active>
          Following
        </FollowerButton>
      </FollowerWrapper>

      <FollowerWrapper>
        <FollowerAvatar src={avatar}/>
        <FollowerName>
          Nika Pink
          <FollowerUserName>@username </FollowerUserName>
        </FollowerName>
        <FollowerButton active>
          Following
        </FollowerButton>
      </FollowerWrapper>

      <FollowerWrapper>
        <FollowerAvatar src={avatar}/>
        <FollowerName>
          Nika Pink
          <FollowerUserName>@username </FollowerUserName>
        </FollowerName>
        <FollowerButton active>
          Following
        </FollowerButton>
      </FollowerWrapper>
    </Div100vh>
  </PopupWrapper>
};

Popup.defaultProps = {
  title: 'Returns & Exchanges',
  showPopup: false,
  setShowPopup: () => {}
};

Popup.propTypes = {
  title: string,
  showPopup: bool,
  setShowPopup: func
};

export default Popup;