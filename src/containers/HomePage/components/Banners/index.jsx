import React from 'react';
import banner from '../../../../images/banner.png';
import { Box, Image } from './styled';

const Banners = () => (
  <Box>
    <Image src={banner} />
    <Image src={banner} />
  </Box>
);

export default Banners;
