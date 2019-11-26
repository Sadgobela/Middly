import React from 'react';
import {Badge} from 'antd';

import LogoIcon from 'assets/LogoIcon';
import BurgerIcon from 'assets/BurgerIcon';
import SearchInput from 'containers/HomePage/components/SearchInput';
import BoxIcon from 'assets/BoxIcon';
import defaultAvatar from 'images/defaultAvatar.png';
import BellIcon from 'assets/BellIcon';
import LetterIcon from 'assets/LetterIcon';
import ShoppingCart from 'assets/ShoppingCart';

import {
  HeaderContainer,
  StyledLink,
  SellButton,
  AvatarContainer,
  StyledName,
  StyledHi,
  BadgesContainer,
  Burger,
  LogoContainer,
  LinksContainer,
  HeaderWrapper,
  Name
} from './styled';

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <Burger>
          <BurgerIcon />
        </Burger>
        <LogoContainer>
          <LogoIcon />
        </LogoContainer>
        <LinksContainer>
          <StyledLink>Marketplace</StyledLink>
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
          <Badge count={0}>
            <BellIcon />
          </Badge>
          <Badge count={1}>
            <LetterIcon />
          </Badge>
          <Badge count={0}>
            <ShoppingCart />
          </Badge>
        </BadgesContainer>
      </HeaderContainer>
    </HeaderWrapper>
  );
};

export default Header;
