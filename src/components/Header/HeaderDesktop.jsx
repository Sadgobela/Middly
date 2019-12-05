import React, {useState} from 'react';
import {CSSTransition} from 'react-transition-group';
import Badges from './Badges';
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
  Cart,
  CartHeader,
  Quantity,
  QuantityAdd,
  QuantityRemove,
  QuantityTitle,
  QuantityCounter,
  CartHeading,
  CartCounter,
  MessageDate,
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
  message: [
    {
      avatar: userAvatar,
      heading: 'Jorge Webb',
      title: 'I would like to return th dress can be... ',
      date: 'Today, 10:30 pm ',
      counter: '1',
      status: true
    },
    {
      avatar: userAvatar,
      heading: 'Jorge Webb',
      title: 'I would like to return th dress can be... ',
      date: 'Today, 10:30 pm ',
      counter: '1',
      status: true
    },
    {
      avatar: userAvatar,
      heading: 'Jorge Webb',
      title: 'I would like to return th dress can be... ',
      date: 'Today, 10:30 pm ',
      counter: '1',
      status: true
    },
    {
      avatar: userAvatar,
      heading: 'Jorge Webb',
      title: 'I would like to return th dress can be... ',
      date: 'Today, 10:30 pm ',
      counter: '1',
      status: true
    },
    {
      avatar: userAvatar,
      heading: 'Jorge Webb',
      title: 'I would like to return th dress can be... ',
      date: 'Today, 10:30 pm ',
      counter: '1',
      status: true
    },
    {
      avatar: userAvatar,
      heading: 'Jorge Webb',
      title: 'I would like to return th dress can be... ',
      date: 'Today, 10:30 pm ',
      counter: '1',
      status: true
    },
  ],
  cart: [
    {
      pic: postPic,
      name: 'Winter coat',
      price: 132,
      currency: '$',
    },
    {
      pic: postPic,
      name: 'Sneakers MIU MIU',
      price: 292,
      currency: '$',
    },
  ]
};

function getItem(name){
	if(name === 'notifications'){

		return (
        <>
          {
            templateData[name].map((item, i) =>
              <NotificationsItem key={item.heading + i}>
                <ItemPic src={item.avatar} />
                <ItemDescription>
                  <ItemHeading info={item.info} >{item.heading}</ItemHeading>
                  <ItemTitle gray={item.type !== 'replied'}>
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
      <>
        {
          templateData[name].map((item, i) =>
            <NotificationsItem key={item.heading + i}>
              <ItemPic src={item.avatar} />
              <ItemDescription>
                <ItemHeading info={item.info} >{item.heading}</ItemHeading>
                <ItemTitle>
                  {item.title}
                </ItemTitle>
              </ItemDescription>
              <MessageDate>{item.date}</MessageDate>
            </NotificationsItem>
          )
        }
      </>
    )
  }
  if(name === 'cart'){
    return (
      <Cart>
        <CartHeader>
          <CartHeading>My cart</CartHeading>
          <CartCounter>2 item</CartCounter>
        </CartHeader>
        {
          templateData[name].map( item =>
            <NotificationsItem key={item.name}>
              <ItemPic src={item.pic} />
              <ItemDescription>
                <ItemHeading >{item.name}</ItemHeading>
                <ItemTitle>
                  {item.price}
                </ItemTitle>
                <Quantity>
                  <QuantityTitle>Quantity:</QuantityTitle>
                  <QuantityRemove/>
                  <QuantityCounter value={1}/>
                  <QuantityAdd/>
                </Quantity>
              </ItemDescription>
            </NotificationsItem>
          )
        }
      </Cart>
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
    setBarContentType(ev.target.closest('button').getAttribute('name'));
    setBarState(true);
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

        <BadgesContainer>
          <Badges barToggle={ getContentType } name='notifications' />
          <Badges barToggle={ getContentType } name='message' counter='4' />
          <Badges barToggle={ getContentType } name='cart' />

          <CSSTransition
            in={isNotificationBar}
            timeout={300}
            classNames="notificationBar"
            unmountOnExit
          >
            <NotificationBar onClick={()=> setBarState(false)}>
              <BarContainer>
                {
                  barContentType !== 'cart'
                    ?
                    <BarHeader>
                      <BarHeading>Notifications</BarHeading>
                      <BarTitle>View All</BarTitle>
                    </BarHeader>
                    : null
                }
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
