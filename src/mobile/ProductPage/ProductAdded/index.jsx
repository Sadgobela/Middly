import React, { useEffect } from 'react';
import { bool, func } from 'prop-types';

import Icon from 'components/Icon'

import {
  PopupWrapper,
  IconWrapper
} from './styled';

const Popup = ({ showMessage, setShowMessage }) => {
  useEffect(() => {
    if (showMessage) {
      setTimeout(() => {
        setShowMessage(false);
      }, 3000)
    }
  }, [showMessage, setShowMessage]);

  return <PopupWrapper active={showMessage}>
    <IconWrapper>
      <Icon
        type="checkbox"
      />
    </IconWrapper>
    <span>Product Added to Cart</span>
  </PopupWrapper>
};

Popup.defaultProps = {
  showMessage: false,
  setShowMessage: () => { }
};

Popup.propTypes = {
  showMessage: bool,
  setShowMessage: func
};

export default Popup;