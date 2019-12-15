import React, {useState, useRef, useEffect} from 'react';
import PropTypes from 'prop-types';
import Div100vh from 'react-div-100vh';

import Shop from 'assets/Shop';
import Logout from 'assets/Logout';

import {Wrapper, WrapperInner, Overlay, Content, ShopContainer, LogoutContainer, LogoutLink, Settings} from './styled';
import User from '../User';
import Tools from '../Tools';
import Menu from '../Menu';
import Categories from '../Categories';
import SubCategory from '../Categories/SubCategory';
import Messages from '../Messages';
import Notifications from '../Notifications';
import Navigation from '../Navigation';
import Cart from '../Cart';
import Swipe from '../Swipe';

const Hamburger = ({
  showHamburger,
  setShowHamburger,
  tab,
  setTab,
  setShowNotifications,
  setShowMessages,
  subCategoryActive,
  setSubCategoryActive
}) => {
  const [me, setMe] = useState(null);
  const wrapperInner = useRef(null);

  useEffect(() => {
    if (wrapperInner && wrapperInner.current && subCategoryActive !== null) {
      wrapperInner.current.scrollTo(0, 0);
    }
  });

  const renderTabs = () => {
    switch (tab) {
      case 4:
        return (
          <Swipe active={me !== null} tab={tab} setTab={setTab}>
            <Cart />
            {me && <Navigation tab={tab} setTab={setTab} />}
          </Swipe>
        );

      case 3:
        return (
          <Swipe active={me !== null} tab={tab} setTab={setTab}>
            <Notifications setShowNotifications={setShowNotifications} setShowHamburger={setShowHamburger} />
            {me && <Navigation tab={tab} setTab={setTab} />}
          </Swipe>
        );

      case 2:
        return (
          <Swipe active={me !== null} tab={tab} setTab={setTab}>
            <Messages setShowHamburger={setShowHamburger} setShowMessages={setShowMessages} />
            {me && <Navigation tab={tab} setTab={setTab} />}
          </Swipe>
        );

      case 1:
      default:
        return (
          <Swipe active={me !== null} tab={tab} setTab={setTab}>
            <Menu />
            <Categories setSubCategoryActive={setSubCategoryActive} />
            <ShopContainer>
              <Shop />
              <span>Start a shop</span>
            </ShopContainer>
            <Settings>
              <p>
                Location: <span>Russia</span>
              </p>
              <p>
                Language: <span>ENG (US)</span>
              </p>
              <p>
                Currency: <span>RUB</span>
              </p>
            </Settings>

            {me && (
              <LogoutContainer>
                <LogoutLink onClick={() => setMe(null)}>
                  <Logout />
                  <span>Log Out</span>
                </LogoutLink>
              </LogoutContainer>
            )}
          </Swipe>
        );
    }
  };

  return (
    <Wrapper>
      <Overlay active={showHamburger} onClick={() => setShowHamburger(false)} />
      <WrapperInner active={showHamburger} style={subCategoryActive && {overflow: 'hidden'}} ref={wrapperInner}>
        <Div100vh
          style={{
            maxHeight: '100rvh'
          }}
        >
          <Content>
            <User me={me} setMe={setMe} />
            <Tools tab={tab} me={me} setTab={setTab} />
            {renderTabs()}
          </Content>
        </Div100vh>
        <SubCategory category={subCategoryActive} setSubCategoryActive={setSubCategoryActive} />
      </WrapperInner>
    </Wrapper>
  );
};

Hamburger.defaultProps = {
  showHamburger: false,
  subCategoryActive: null,
  tab: 1,
  setTab: () => {},
  setShowHamburger: () => {},
  setShowNotifications: () => {},
  setShowMessages: () => {},
  setSubCategoryActive: () => {}
};

Hamburger.propTypes = {
  showHamburger: PropTypes.bool,
  subCategoryActive: PropTypes.object,
  tab: PropTypes.number,
  setShowHamburger: PropTypes.func,
  setTab: PropTypes.func,
  setShowNotifications: PropTypes.func,
  setShowMessages: PropTypes.func,
  setSubCategoryActive: PropTypes.func
};

export default Hamburger;
