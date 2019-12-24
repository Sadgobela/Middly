import React from 'react';
import {array, string, func} from 'prop-types';

import Icon from 'components/Icon';

import {
  Wrapper,
  FieldGroup,
  FieldWrapper,
  FieldLabel,
  Field
} from './styled';

const Variations = ({
  colors,
  sizes,
  color,
  size,
  setColor,
  setSize,
  setShowVariationsPopup
}) => {
  return <Wrapper>
    {
      colors && colors.length
        ?
          <FieldGroup>
            <FieldLabel>Color</FieldLabel>
            <FieldWrapper onClick={() => setShowVariationsPopup(true)}>
              <Field
                placeholder="Any color"
                active={color !== null}
                value={color}
                readOnly
              />
              <Icon type="arrow" svgStyle={{color: color ? '#000' : '#999999', width: 8, height: 12}}/>
            </FieldWrapper>
          </FieldGroup>
        : null
    }

    {
      sizes && sizes.length
        ?
          <FieldGroup>
            <FieldLabel>Size</FieldLabel>
            <FieldWrapper onClick={() => setShowVariationsPopup(true)}>
              <Field
                placeholder="Any size"
                active={size !== null}
                value={size}
                readOnly
              />
              <Icon type="arrow" svgStyle={{color: size ? '#000' : '#999999', width: 8, height: 12}}/>
            </FieldWrapper>
          </FieldGroup>
        : null
    }
  </Wrapper>
};

Variations.defaultProps = {
  colors: [],
  sizes: [],
  color: null,
  size: null,
  setColor: () => {},
  setSize: () => {},
  setShowVariationsPopup: () => {}
};

Variations.propTypes = {
  colors: array,
  sizes: array,
  color: string,
  size: string,
  setColor: func,
  setSize: func,
  setShowVariationsPopup: func
};

export default Variations;