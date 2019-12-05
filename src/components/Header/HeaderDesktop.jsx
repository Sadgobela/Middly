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
import userAvatar from './img/userAvatar.png';
import postPic from './img/postPic.jpg';

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
  ItemReplied,
  PostTitle,
} from './styled';
import BurgerIcon from '../../assets/BurgerIcon';

const templateData = {
  notifications: [
    {
      avatar: userAvatar,
      heading: 'Kevin Baltimorian',
      title: 'started following you.',
      info: '3min ',
      type: 'following',
    },
    {
      avatar: userAvatar,
      heading: 'Nika Pink',
      title: 'following you.',
      info: '2w started ',
      type: 'follow',
    },
    {
      avatar: userAvatar,
      postPreview: postPic,
      heading: 'Oleg Welton',
      title: 'Wow! So good suit and tie, I like it very much. Please, give me the contact of the store where you bought it.',
      info: '1d replited to you',
      type: 'replied',
      post: 'your post:',
    },
    {
      avatar: userAvatar,
      postPreview: postPic,
      heading: 'Oleg Welton',
      title: 'Wow! So good suit and tie, I like it very much. Please, give me the contact of the store where you bought it.',
      info: '1d replited to you',
      type: 'replied',
      post: 'post:',
    },
  ],
};

function getItem(name){
	if(name === 'notifications'){

		return (

        <>
          {
            templateData[name].map(item =>
              <NotificationsItem key={item.heading}>
                <ItemPic src={item.avatar} />
                <ItemDescription>
                  <ItemHeading info={item.info} >{item.heading}</ItemHeading>
                  <ItemTitle gray>
                    {
                      item.post ? <PostTitle>{item.post}</PostTitle> : null
                    }
                    {item.title}
                  </ItemTitle>
                </ItemDescription>
                {
                  item.type === 'follow' || item.type === 'following'
                    ? <ItemFollowing type={item.type}>{item.type}</ItemFollowing>
                    : <ItemReplied src={item.postPreview} />
                }
              </NotificationsItem>
            )
          }
        </>
		)
	}
  if(name === 'message'){
    return (
      <NotificationsItem>
        <ItemPic src={defaultAvatar} />
        <ItemDescription>
          <ItemHeading info='3min' >Kevin Baltimorian</ItemHeading>
          <ItemTitle>started following you.</ItemTitle>
        </ItemDescription>
        <ItemFollowing>Following</ItemFollowing>
      </NotificationsItem>
    )
  }
  if(name === 'cart'){
    return (
      <NotificationsItem>
        <ItemPic src={defaultAvatar} />
        <ItemDescription>
          <ItemHeading info='3min' >Kevin Baltimorian</ItemHeading>
          <ItemTitle>started following you.</ItemTitle>
        </ItemDescription>
        <ItemFollowing>Following</ItemFollowing>
      </NotificationsItem>
    )
  }
}

const Header = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const [isNotificationBar, setBarState] = useState(false);
  const [barContentType, setBarContentType] = useState('');

  function getBarContent(type) {
    return getItem(type);
  }

  function getContentType(ev) {
    // setBarContentType(ev.target.getAttribute('name'));
    setBarContentType('notifications');
    setBarState(!isNotificationBar);
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

        <BadgesContainer onClick={ ev => getContentType(ev) }>
          <NotificationsFeeds />
          <Messages counter={1} />
          <MyCart />

          <CSSTransition
            in={isNotificationBar}
            timeout={300}
            classNames="notificationBar"
            unmountOnExit
          >
            <NotificationBar>
              <BarContainer>
                <BarHeader>
                  <BarHeading>Notifications</BarHeading>
                  <BarTitle>View All</BarTitle>
                </BarHeader>
                {getBarContent(barContentType)}
              </BarContainer>
            </NotificationBar>
          </CSSTransition>

        </BadgesContainer>
      </HeaderContainer>
    </HeaderWrapper>
  );
};

export default Header;
