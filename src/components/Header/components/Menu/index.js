import React from 'react';
import PropTypes from 'prop-types';

import {Wrapper, CustomLink} from './styled';

const Menu = ({}) => {
  return (
    <Wrapper>
      <CustomLink>Marketpalce</CustomLink>
      <CustomLink>Feed</CustomLink>
    </Wrapper>
  );
};

Menu.defaultProps = {};

Menu.propTypes = {};

export default Menu;
