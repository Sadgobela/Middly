import React, { Component } from 'react';

import { NotificationsFeeds } from './NotificationsFeeds/NotificationsFeeds';
import { Messages } from "./Messages/Messages";
import { MyCart } from "./MyCart/MyCart";
import { SideMenu } from "./SideMenu/SideMenu";

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
  Name
} from './styled';

export default class Header extends Component {
  render() {
    return (
      <HeaderWrapper>
        <HeaderContainer>
          <SideMenu />
          <LogoContainer href="#">
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
            <NotificationsFeeds/>
            <Messages/>
            <MyCart/>
          </BadgesContainer>
        </HeaderContainer>
      </HeaderWrapper>
    );
  }
}
