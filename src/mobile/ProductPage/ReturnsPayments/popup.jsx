import React, { useEffect } from 'react';
import Div100vh from 'react-div-100vh';
import { string, bool, func } from 'prop-types';

import Icon from 'components/Icon';

import {
  PopupWrapper,
  IconWrapper,
  Header,
  Title,
  Content
} from './styled';

const Popup = ({ showPopup, setShowPopup }) => {
  useEffect(() => {
    if(showPopup) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [showPopup]);

  return <PopupWrapper active={showPopup}>
    <Header>
      <Title>Returns & Exchanges</Title>

      <IconWrapper onClick={() => setShowPopup(false)}>
        <Icon
          type="close"
          svgStyle={{ width: 24, height: 24, color: '#1A1A1A' }}
        />
      </IconWrapper>
    </Header>

    <Content>
      <Div100vh
        style={{
          height: '100vh',
          padding: '24px 16px 24px 30px',
          maxHeight: 'calc(100rvh - 70px)',
          overflowX: 'hidden',
          overflowY: 'auto'
        }}
      >
        <h4>I gladly accept returns and exchanges </h4>

        <ul>
          <li>Contact me within: 14 days of delivery</li>
          <li>Ship items back within: 30 days of delivery I don't accept cancellations</li>
          <li>May I have a refund? We are happy to provide a full refund or exchange for goods in their original condition provided you contact us within 15 days or purchasing.</li>
        </ul>

        <p>But please contact me if you have any problems with your order. The following items can't be returned or exchanged</p>

        <p>Because of the nature of these items, unless they arrive damaged or defective, I can't accept returns for: Custom or personalised orders</p>
        <br />
        <p>Perishable products (like food or flowers) Digital downloads Intimate items (for health/hygiene reasons) Items on sale Returns and exchange details</p>
      </Div100vh>
    </Content>

  </PopupWrapper>
};

Popup.defaultProps = {
  title: 'Returns & Exchanges',
  showPopup: false,
  setShowPopup: () => {}
};

Popup.propTypes = {
  title: string,
  showPopup: bool,
  setShowPopup: func
};

export default Popup;