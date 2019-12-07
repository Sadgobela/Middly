import React, {useState} from 'react';
import {CSSTransition} from 'react-transition-group';
import Badges from './Badges';
import {SideMenu} from './SideMenu/SideMenu';
import NotificationBar from '../NotificationBar';
import LogoIcon from 'assets/LogoIcon';
import SearchInput from 'containers/HomePage/components/SearchInput';
import BoxIcon from 'assets/BoxIcon';
import defaultAvatar from 'images/defaultAvatar.png';

import {
  HeaderContainer,
  StyledLink,
  SellButton,
  AvatarContainer,
  StyledName,
  StyledHi,
  BadgesContainer,
  LogoContainer,
  LinksContainer,
  HeaderWrapper,
  Name,
  Burger,
} from './styled';
import BurgerIcon from '../../assets/BurgerIcon';

const Header = () => {

  const [isNotificationBar, setBarState] = useState(false);
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const [barContentType, setBarContentType] = useState('');

  function getContentType(ev) {
    setBarContentType(ev.target.closest('button').getAttribute('name'));
    setBarState(true);
  }

  return (
    <HeaderWrapper>
      <HeaderContainer>
        <Burger onClick={() => setIsMenuOpened(!isMenuOpened)}>
          <BurgerIcon />
        </Burger>
        <CSSTransition in={isMenuOpened} timeout={300} classNames={'sideMenu'} unmountOnExit>
          <SideMenu setIsMenuOpened={ setIsMenuOpened } />
        </CSSTransition>
        <LogoContainer href="#">
          <LogoIcon />
        </LogoContainer>
        <LinksContainer>
          <StyledLink active>Marketplace</StyledLink>
          <StyledLink>Feed</StyledLink>
        </LinksContainer>
        <SearchInput />
        <SellButton>
          <BoxIcon />
          Sell
        </SellButton>
        <AvatarContainer>
          <img src={defaultAvatar} alt="avatar" />
          <Name flexDirection="column">
            <StyledHi>Hi,</StyledHi>
            <StyledName>Kathryn</StyledName>
          </Name>
        </AvatarContainer>

        <BadgesContainer>
          <Badges barToggle={ getContentType } name='notifications' />
          <Badges barToggle={ getContentType } name='message' counter='4' />
          <Badges barToggle={ getContentType } name='cart' />

        </BadgesContainer>
      </HeaderContainer>

      <CSSTransition
        in={isNotificationBar}
        timeout={300}
        classNames="notificationBar"
        unmountOnExit
      >
        <NotificationBar contentType={barContentType} closeHandler={setBarState}>

        </NotificationBar>
      </CSSTransition>
    </HeaderWrapper>
  );
};

export default Header;
