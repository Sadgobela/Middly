import React from 'react';
import PropTypes from 'prop-types';
import {
  Product,
  ProductThumb,
  ProductContent,
  ProductTitle,
  ProductPrice,
  ProductStock
} from './styled';

const SearchProduct = ({data}) => {
  return (
    <Product>
      <ProductThumb src={data.imgSrc}/>
      <ProductContent>
        <ProductTitle dangerouslySetInnerHTML={{__html: data.title}}/>
        <ProductPrice>${data.newPrice || data.oldPrice}</ProductPrice>
        <ProductStock>{data.stock > 0 ? `${data.stock} in stock` : 'not available'}</ProductStock>
      </ProductContent>
    </Product>
  );
};

SearchProduct.defaultProps = {
  data: {}
};

SearchProduct.propTypes = {
  data: PropTypes.object
};

export default SearchProduct;
