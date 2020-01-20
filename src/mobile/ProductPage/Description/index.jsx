import React, { useState, useEffect, useRef } from 'react';
import { string, arrayOf, object } from 'prop-types';

import Icon from 'components/Icon';
import Title from '../Title';

import {
  Wrapper,
  Text,
  ShowMore,
  Attributes,
  Attribute,
  AttributeLabel,
  AttributeValue
} from './styled';

const Description = ({ text, attributes }) => {
  const [showMore, setShowMore] = useState(false);
  const [fullHeight, setFullHeight] = useState(null);
  const description = useRef(null);

  useEffect(() => {
    if (description && description.current && description.current.clientHeight > 51 && !showMore) {
      setFullHeight(description.current.clientHeight);
      description.current.style.maxHeight = '51px';
    }
  }, [setFullHeight, showMore]);

  useEffect(() => {
    if (description && description.current) {
      if (showMore) {
        description.current.style.maxHeight = `${fullHeight}px`;
      } else {
        description.current.style.maxHeight = '51px';
      }
    }
  }, [showMore, fullHeight]);

  return <Wrapper>
    <Title
      title="Item Description"
    />
    {
      text
        ?
        <Text
          ref={description}
          dangerouslySetInnerHTML={{ __html: text }}
        />
        : null
    }
    {
      attributes && attributes.length
        ?
        <Attributes>
          {attributes.map((attribute, key) => {
            return <Attribute key={key}>
              <AttributeLabel>{attribute.name}:</AttributeLabel>
              <AttributeValue>{attribute.value}</AttributeValue>
            </Attribute>
          })}
        </Attributes>
        : null
    }
    <ShowMore active={showMore}>
      <div onClick={() => {
        setShowMore(!showMore);
      }}>
        Show {showMore ? 'less' : 'More'}
        <Icon type="arrow" svgStyle={{ width: 8, height: 10 }} />
      </div>
    </ShowMore>
  </Wrapper>
};

Description.defaultProps = {
  text: null,
  attributes: []
};

Description.propTypes = {
  text: string,
  attributes: arrayOf(object)
};

export default Description;