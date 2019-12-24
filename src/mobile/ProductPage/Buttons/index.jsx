import React  from 'react';
import { object, func } from 'prop-types';

import { Wrapper, Button } from './styled';

const Buttons = ({ style, setShowMessage }) => {
  return <Wrapper style={style}>
    <Button onClick={() => setShowMessage && setShowMessage(true)}>Add to Cart</Button>
    <Button type="primary">Buy Now</Button>
  </Wrapper>
};

Buttons.defaultProps = {
  style: {},
  setShowMessage: () => {}
};

Buttons.propTypes = {
  style: object,
  setShowMessage: func
};

export default Buttons;