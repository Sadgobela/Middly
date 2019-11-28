import React from 'react';

import LogoIcon from 'assets/LogoIcon';
import BurgerIcon from 'assets/BurgerIcon';
import ShoppingCart from 'assets/ShoppingCart';
import Search from 'assets/Search';

import {HeaderContainer, BadgesContainer, Burger, LogoContainer, HeaderWrapper, CustomBadge} from './styled';

const Header = ({isMobile}) => {
  return (
    <HeaderWrapper>
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
