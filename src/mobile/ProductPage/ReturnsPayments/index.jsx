import React from 'react';
import {} from 'prop-types';

import Title from '../Title';

import MS from 'images/svg/ms.svg';
import Visa from 'images/svg/visa.svg';
import PayPall from 'images/svg/paypall.svg';
import AE from 'images/svg/ae.svg';
import Cash from 'images/svg/cash.svg';

import {
  Wrapper,
  Row,
  Label,
  Value
} from './styled';

const ReturnsPayments = ({  }) => {
  return <Wrapper>
    <Title
      title="Returns & Payments"
      seeMore="See Return Policy"
    />

    <Row>
      <Label>Returns</Label>
      <Value>Returns & Exchanges accepted</Value>
    </Row>

    <Row>
      <Label>Payments</Label>
      <Value style={{ display: 'flex', justifyContent: 'space-between' }}>
        <img src={MS} alt=""/>
        <img src={Visa} alt=""/>
        <img src={PayPall} alt=""/>
        <img src={AE} alt=""/>
        <img src={Cash} alt=""/>
      </Value>
    </Row>
  </Wrapper>
};

ReturnsPayments.defaultProps = {

};

ReturnsPayments.propTypes = {

};

export default ReturnsPayments;