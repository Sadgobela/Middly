import React from 'react';
import PropTypes from 'prop-types';

import {Wrapper} from './styled';

const Explore = ({title}) => {
  return <Wrapper>{title}</Wrapper>;
};

Explore.defaultProps = {
  title: 'Explore Our Social Marketplace'
};

Explore.propTypes = {
  title: PropTypes.string
};

export default Explore;
