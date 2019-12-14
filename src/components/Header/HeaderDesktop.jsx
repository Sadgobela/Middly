import React, {useState, useEffect} from 'react';
import {CSSTransition} from 'react-transition-group';
import Badges from '../Badges';
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
  BarControls,
  AuthControls,
  AuthCreate,
  AuthSign,
  AuthDivider,
} from './styled';
import BurgerIcon from '../../assets/BurgerIcon';

const userType = 'withShop';
const btnText = {
  withShop: 'My Store',
  noShop: 'SELL'
};

const Header = ({isMobile}) => {

  const [isNotificationBar, setBarState] = useState(false);
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const [barContentType, setBarContentType] = useState('');

  function getContentType(ev) {
    if(ev === 'profile'){
      setBarContentType(ev);
      setBarState(true);
      return;
    }
    setBarContentType(ev.target.closest('button').getAttribute('name'));
    setBarState(true);
  }

  return (
    <HeaderWrapper>
      <HeaderContainer>
        <Burger>
          <BurgerIcon />
        </Burger>
        <CSSTransition in={isMenuOpened} timeout={300} classNames={'sideMenu'} unmountOnExit>
          <SideMenu setIsMenuOpened={ setIsMenuOpened } />
        </CSSTransition>
        <LogoContainer to='/'>
          <LogoIcon />
        </LogoContainer>
        <LinksContainer>
          <StyledLink active>Marketplace</StyledLink>
          <StyledLink>Feed</StyledLink>
        </LinksContainer>
        <SearchInput />
        <SellButton>
          <BoxIcon />
          { userType === 'withShop' ? btnText.withShop : btnText.noShop}
        </SellButton>

        <BarControls className='barControls'>
          {
            userType !== 'anonymous'
              ?
              <AvatarContainer onClick={() => getContentType('profile')}>
                <img src={defaultAvatar} alt="avatar" />
                <Name flexDirection="column">
                  <StyledHi>Hi,</StyledHi>
                  <StyledName>Kathryn</StyledName>
                </Name>
              </AvatarContainer>
              :
              <AuthControls>
                <AuthSign to='/sign-in'>Sign In</AuthSign>
                <AuthDivider />
                <AuthCreate to='/sign-up'>Create Account</AuthCreate>
              </AuthControls>
          }

          <BadgesContainer className='badgesContainer'>
            {
              userType !== 'anonymous'
              ?
                <>
                  <Badges action={ getContentType } name='notifications' />
                  <Badges action={ getContentType } name='message' counter='4' />
                  <Badges action={ getContentType } name='cart' />
                </>
              :
                <>
                  <Badges action={ getContentType } counter='1' name='cart' />
                </>
            }
          </BadgesContainer>
        </BarControls>

      </HeaderContainer>

      <CSSTransition
        in={isNotificationBar}
        timeout={300}
        classNames="notificationBar"
        unmountOnExit
      >
        <NotificationBar contentType={barContentType} closeHandler={setBarState} />
      </CSSTransition>
    </HeaderWrapper>
  );
};

export default Header;
