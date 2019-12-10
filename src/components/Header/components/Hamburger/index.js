import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Div100vh from 'react-div-100vh';

import Shop from 'assets/Shop';
import Logout from 'assets/Logout';

import {Wrapper, Overlay, Content, ShopContainer, LogoutContainer, LogoutLink, Settings} from './styled';
import User from '../User';
import Tools from '../Tools';
import Menu from '../Menu';
import Categories from '../Categories';
import SubCategory from '../Categories/SubCategory';
import Messages from '../Messages';
import Notifications from '../Notifications';
import Navigation from '../Navigation';
import Cart from '../Cart';

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

  const renderTabs = () => {
    switch (tab) {
      case 4:
        return (
          <>
            <Cart />
            {me && <Navigation tab={tab} setTab={setTab} />}
          </>
        );

      case 3:
        return (
          <>
            <Notifications setShowNotifications={setShowNotifications} setShowHamburger={setShowHamburger} />
            {me && <Navigation tab={tab} setTab={setTab} />}
          </>
        );

      case 2:
        return (
          <>
            <Messages setShowHamburger={setShowHamburger} setShowMessages={setShowMessages} />
            {me && <Navigation tab={tab} setTab={setTab} />}
          </>
        );

      case 1:
      default:
        return (
          <>
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
          </>
        );
    }
  };

  return (
    <Wrapper>
      <Overlay active={showHamburger} onClick={() => setShowHamburger(false)} />
      <Div100vh style={{maxHeight: '100rvh)'}}>
        <Content active={showHamburger}>
          {subCategoryActive ? (
            <SubCategory category={subCategoryActive} setSubCategoryActive={setSubCategoryActive} />
          ) : (
            <>
              <User me={me} setMe={setMe} />
              <Tools tab={tab} me={me} setTab={setTab} />
              {renderTabs()}
            </>
          )}
        </Content>
      </Div100vh>
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
  subCategoryActive: PropTypes.bool,
  tab: PropTypes.number,
  setShowHamburger: PropTypes.func,
  setTab: PropTypes.func,
  setShowNotifications: PropTypes.func,
  setShowMessages: PropTypes.func,
  setSubCategoryActive: PropTypes.func
};

export default Hamburger;
