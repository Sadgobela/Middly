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
  Burger,
  NotificationBar,
  BarContainer,
  BarHeader,
  BarHeading,
  BarTitle,
  NotificationsItem,
  ItemPic,
  ItemDescription,
  ItemHeading,
  ItemTitle,
  ItemFollowing,
} from './styled';
import BurgerIcon from '../../assets/BurgerIcon';

function getItem(name){
	if(name === 'notifications'){
		return (
		  <>
			<NotificationsItem>
				<ItemPic src={defaultAvatar} />
				<ItemDescription>
					<ItemHeading info='3min' >Kevin Baltimorian</ItemHeading>
					<ItemTitle>started following you.</ItemTitle>
				</ItemDescription>
				<ItemFollowing>Following</ItemFollowing>
			</NotificationsItem>

        <NotificationsItem>
          <ItemPic src={defaultAvatar} />
          <ItemDescription>
            <ItemHeading info='3min' >Kevin Baltimorian</ItemHeading>
            <ItemTitle>started following you.</ItemTitle>
          </ItemDescription>
          <ItemFollowing>Following</ItemFollowing>
        </NotificationsItem>
        <NotificationsItem>
          <ItemPic src={defaultAvatar} />
          <ItemDescription>
            <ItemHeading info='3min' >Kevin Baltimorian</ItemHeading>
            <ItemTitle>started following you.</ItemTitle>
          </ItemDescription>
          <ItemFollowing>Following</ItemFollowing>
        </NotificationsItem>
        </>
		)
	}
}

const Header = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const [isNotificationBar, toggleNotificationBar] = useState(false);

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

        <BadgesContainer onClick={()=> toggleNotificationBar(!isNotificationBar)}>
          <NotificationsFeeds />
          <Messages counter={1} />
          <MyCart />
          {
            isNotificationBar ?
              <NotificationBar>
                <BarContainer>
                  <BarHeader>
                    <BarHeading>Notifications</BarHeading>
                    <BarTitle>View All</BarTitle>
                  </BarHeader>
                  {getItem('notifications')}
                </BarContainer>
              </NotificationBar>
              : null
          }

        </BadgesContainer>
      </HeaderContainer>
    </HeaderWrapper>
  );
};

export default Header;
