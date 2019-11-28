import React from 'react';

import HeaderDesktop from './HeaderDesktop';
import HeaderMobile from './HeaderMobile';

const Header = ({isMobile}) => {
  return (
    isMobile ? <HeaderMobile isMobile={isMobile}/> : <HeaderDesktop/>
  );
};

export default Header;
