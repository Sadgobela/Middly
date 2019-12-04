import React, {useState} from 'react';
import {CSSTransition} from 'react-transition-group';
import {NotificationsFeeds} from './NotificationsFeeds/NotificationsFeeds';
import {Messages} from './Messages/Messages';
import {MyCart} from './MyCart/MyCart';
import {SideMenu} from './SideMenu/SideMenu';

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
  Burger
} from './styled';
import BurgerIcon from '../../assets/BurgerIcon';

const Header = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);

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
          <NotificationsFeeds />
          <Messages />
          <MyCart />
        </BadgesContainer>
      </HeaderContainer>
    </HeaderWrapper>
  );
};

export default Header;
