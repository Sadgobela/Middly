import React, {useState, useEffect} from 'react';

import LogoIcon from 'assets/LogoIcon';
import BurgerIcon from 'assets/BurgerIcon';
import ShoppingCart from 'assets/ShoppingCart';
import Search from 'assets/Search';

import {
  HeaderContainer,
  BadgesContainer,
  Burger,
  LogoContainer,
  HeaderWrapper,
  CustomBadge,
  LinksContainer, StyledLink
} from './styled';

const Header = ({isMobile}) => {

  const [isShow, ToggleLinks] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);
  const scrollHandler = ev => {

    console.log(lastScroll, window.pageYOffset);
    if(lastScroll < window.pageYOffset){
      ToggleLinks(true);
      setLastScroll(window.pageYOffset);
    } else {
      ToggleLinks(false);
      setLastScroll(window.pageYOffset);
    }
  };
  window.addEventListener('scroll', scrollHandler);


  return (
    <HeaderWrapper>
      <LinksContainer show={isShow} mobile>
        <StyledLink active>Marketplace</StyledLink>
        <StyledLink>Feed</StyledLink>
      </LinksContainer>
      <HeaderContainer isMobile={isMobile}>
        <Burger isMobile={isMobile}>
          <BurgerIcon />
        </Burger>
        <LogoContainer isMobile={isMobile}>
          <LogoIcon />
        </LogoContainer>

        <BadgesContainer isMobile={isMobile}>
          <CustomBadge count={0} isMobile={isMobile}>
            <Search />
          </CustomBadge>
          <CustomBadge count={1} isMobile={isMobile}>
            <ShoppingCart />
          </CustomBadge>
        </BadgesContainer>
      </HeaderContainer>
    </HeaderWrapper>
  );
};

export default Header;
