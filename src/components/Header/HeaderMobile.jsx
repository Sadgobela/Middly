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

  const [isHide, ToggleLinks] = useState(false);
  const [lastScroll, setLastScroll] = useState(0);
  const scrollHandler = ev => {

    if(lastScroll > 0 && lastScroll < window.pageYOffset){
      ToggleLinks(true);
      setLastScroll(window.pageYOffset);
    } else {
      ToggleLinks(false);
      setLastScroll(window.pageYOffset);
    }
  };
  setTimeout(()=>{
    window.addEventListener('scroll', scrollHandler);
  }, 1000);


  return (
    <HeaderWrapper>
      <LinksContainer className='testLinksContainer' hide={isHide} mobile>
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
