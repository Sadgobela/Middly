import React, {useRef, useEffect} from 'react';
import PropTypes from 'prop-types';
import Div100vh from 'react-div-100vh';
import Slider from 'react-slick';

import Shop from 'assets/Shop';
import Logout from 'assets/Logout';

import {
  Wrapper,
  WrapperInner,
  Overlay,
  Content,
  ShopContainer,
  LogoutContainer,
  LogoutLink,
  Settings,
  SliderWrapper,
  SliderSlide
} from './styled';
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
  setSubCategoryActive,
  me,
  setMe
}) => {
  const wrapperInner = useRef(null);
  const slider = useRef(null);

  useEffect(() => {
    if (wrapperInner && wrapperInner.current && subCategoryActive !== null) {
      wrapperInner.current.scrollTo(0, 0);
    }
  });

  useEffect(() => {
    if (slider && slider.current) {
      slider.current.slickGoTo(tab);
    }
  }, [tab]);

  const sliderGoTo = (index) => {
    if (slider && slider.current) {
      slider.current.slickGoTo(index);
      setTab(index);
    }
  };

  const sliderOnSwipe = (direction) => {
    const maxTabs = me ? 3 : 1;
    const index = direction === 'left' ? (tab + 1 <= maxTabs ? tab + 1 : maxTabs) : tab - 1 >= 0 ? tab - 1 : 0;

    if (slider && slider.current) {
      slider.current.slickGoTo(index);
      setTab(index);
    }
  };

  const renderTabs = () => {
    let list = [];

    list.push(
      <SliderSlide key={`slideMainMenu`}>
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
      </SliderSlide>
    );

    if (me) {
      list.push(
        <SliderSlide key={`slideMessages`}>
          <Messages setShowHamburger={setShowHamburger} setShowMessages={setShowMessages} />
        </SliderSlide>
      );

      list.push(
        <SliderSlide key={`slideNotifications`}>
          <Notifications setShowNotifications={setShowNotifications} setShowHamburger={setShowHamburger} />
        </SliderSlide>
      );
    }

    list.push(
      <SliderSlide key={`slideCart`}>
        <Cart me={me} />
      </SliderSlide>
    );

    return list;
  };

  const settings = {
    dots: false,
    arrows: false,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    onSwipe: sliderOnSwipe
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
            <Tools tab={tab} me={me} setTab={setTab} sliderGoTo={sliderGoTo} />
            <SliderWrapper>
              <Slider {...settings} ref={slider}>
                {renderTabs()}
              </Slider>
              {me && tab > 0 && <Navigation tab={tab} sliderGoTo={sliderGoTo} />}
            </SliderWrapper>
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
