import React from 'react';
import {} from './styled';
import Layout from 'containers/Layout';
import { useWindowSize } from "@reach/window-size";

import ProductPageDesktop from './ProductPageDesktop';
import ProductPageMobile from './ProductPageMobile';

const ProductPage = () => {
  const { width } = useWindowSize();
  const isMobile = width <= 767;

  return (
    isMobile
      ?
        <ProductPageMobile/>
      :
        <Layout>
          <ProductPageDesktop/>
        </Layout>
  )
};

export default ProductPage;