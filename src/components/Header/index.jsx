import React from 'react';

import HeaderDesktop from './HeaderDesktop';
import HeaderMobile from './HeaderMobile';

const Header = ({isMobile}) => {
  return (
    <HeaderDesktop isMobile={isMobile}/>
  );
};

export default Header;
