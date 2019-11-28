import React from 'react';
import PropTypes from 'prop-types';

import {Wrapper} from './styled';

const Divider = ({height}) => {
  return <Wrapper height={height} />;
};

Divider.defaultProps = {
  height: 24
};

Divider.propTypes = {
  height: PropTypes.number
};

export default Divider;
