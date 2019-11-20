import React from 'react';
import { Badge } from 'antd';
import { FlexContainer } from '../../globalStyles';
import LogoIcon from '../../assets/LogoIcon';
import BurgerIcon from '../../assets/BurgerIcon';
import {
  HeaderContainer,
  StyledLink,
  SellButton,
  AvatarContainer,
  StyledName,
  StyledHi,
  BadgesContainer,
  WithPointer
} from './styled';
import SearchInput from '../../containers/HomePage/components/SearchInput';
import BoxIcon from '../../assets/BoxIcon';
import defaultAvatar from '../../images/defaultAvatar.png';
import BellIcon from '../../assets/BellIcon';
import LetterIcon from '../../assets/LetterIcon';
import ShoppingCart from '../../assets/ShoppingCart';

const Header = () => (
  <HeaderContainer>
    <WithPointer>
      <BurgerIcon />
    </WithPointer>
    <LogoIcon />
    <FlexContainer>
      <StyledLink>Marketplace</StyledLink>
      <StyledLink>Feed</StyledLink>
    </FlexContainer>
    <SearchInput />
    <SellButton>
      <BoxIcon />
      Sell
    </SellButton>
    <AvatarContainer>
      <img src={defaultAvatar} alt="avatar" />
      <FlexContainer flexDirection="column">
        <StyledHi>Hi,</StyledHi>
        <StyledName>Kathryn</StyledName>
      </FlexContainer>
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
);

export default Header;
