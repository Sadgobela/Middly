import React from 'react';
import {object} from 'prop-types';

import { Wrapper } from './styled';

const Divider = ({ style }) => {
  return <Wrapper style={style}/>
};

Divider.defaultProps = {
  style: {
    height: 10
  }
};

Divider.propTypes = {
  height: object
};

export default Divider;