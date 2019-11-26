import React from 'react';

import Marker from 'assets/Marker';
import {Wrapper, Country, Divider, Language, Currency} from './styled';

const Tools = () => (
  <Wrapper>
    <Country>
      <Marker />
      <span>Ukraine</span>
    </Country>
    <Divider />
    <Language>Eng (US)</Language>
    <Divider />
    <Currency>$ (USD)</Currency>
  </Wrapper>
);

export default Tools;
