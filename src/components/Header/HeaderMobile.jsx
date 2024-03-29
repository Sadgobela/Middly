import React, {useState, useEffect} from 'react';

import LogoIcon from 'assets/LogoIcon';
import BurgerIcon from 'assets/BurgerIcon';
import ShoppingCart from 'assets/ShoppingCart';
import Search from 'assets/Search';

import Hamburger from './components/Hamburger';
import NotificationsPopup from './components/Notifications/Popup';
import MessagesPopup from './components/Messages/Popup';
import SearchPopup from './components/Search';

import {
  HeaderContainer,
  BadgesContainer,
  Burger,
  LogoContainer,
  HeaderWrapper,
  CustomBadge,
  StyledLink,
  LinksContainer
} from './styled';

const Header = ({isMobile}) => {
  const [showHamburger, setShowHamburger] = useState(false);
  const [tab, setTab] = useState(0);
  const [me, setMe] = useState(null);
  const [showMessages, setShowMessages] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [subCategoryActive, setSubCategoryActive] = useState(null);
  const [showSearch, setShowSearch] = useState(false);

  useEffect(() => {
    if (showHamburger || showNotifications || showMessages || showSearch) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  });

  return (
    <>
      <HeaderWrapper>
        <HeaderContainer isMobile={isMobile}>
          <Burger
            isMobile={isMobile}
            onClick={() => {
              setShowHamburger(true);
              setShowNotifications(false);
              setShowMessages(false);
            }}
          >
            <BurgerIcon />
          </Burger>
          <LogoContainer
            to="/"
            isMobile={isMobile}
            onClick={() => {
              setShowNotifications(false);
              setShowMessages(false);
            }}
          >
            <LogoIcon />
          </LogoContainer>

          <BadgesContainer isMobile={isMobile} style={{ marginLeft: 'auto' }}>
            <CustomBadge
              count={0}
              ismobile={isMobile.toString()}
              onClick={() => {
                setShowSearch(!showSearch);
              }}
            >
              <Search />
            </CustomBadge>
            <CustomBadge
              count={1}
              ismobile={isMobile.toString()}
              onClick={() => {
                setShowHamburger(true);
                setTab(me ? 3 : 1);
                setShowNotifications(false);
                setShowMessages(false);
              }}
            >
              <ShoppingCart />
            </CustomBadge>
          </BadgesContainer>
        </HeaderContainer>
      </HeaderWrapper>

      <LinksContainer mobile={isMobile}>
        <StyledLink active>Marketplace</StyledLink>
        <StyledLink>Feed</StyledLink>
      </LinksContainer>
      <Hamburger
        me={me}
        setMe={setMe}
        showHamburger={showHamburger}
        setShowHamburger={setShowHamburger}
        setShowNotifications={setShowNotifications}
        setShowMessages={setShowMessages}
        tab={tab}
        setTab={setTab}
        subCategoryActive={subCategoryActive}
        setSubCategoryActive={setSubCategoryActive}
      />

      <NotificationsPopup
        showNotifications={showNotifications}
        setShowHamburger={setShowHamburger}
        setShowNotifications={setShowNotifications}
      />

      <MessagesPopup
        showMessages={showMessages}
        setShowHamburger={setShowHamburger}
        setShowMessages={setShowMessages}
      />

      <SearchPopup
        showSearch={showSearch}
        setShowSearch={setShowSearch}
      />
    </>
  );
};

export default Header;
