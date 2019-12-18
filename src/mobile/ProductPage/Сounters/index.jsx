import React from 'react';
import {number} from 'prop-types';

import Icon from 'components/Icon';

import {
  Wrapper,
  Counter,
  CounterLabel
} from './styled';

const Counters = ({ likes, comments, share, bookmark }) => {
  const formatNumbers = (number) => {
    return number.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1,');
  };

  return <Wrapper>
    {
      likes
      ?
        <Counter>
          <Icon type="like"/>
          <CounterLabel>{formatNumbers(likes)}</CounterLabel>
        </Counter>
      : null
    }

    {
      comments
      ?
        <Counter>
          <Icon type="message"/>
          <CounterLabel>{formatNumbers(comments)}</CounterLabel>
        </Counter>
      : null
    }

    {
      share
      ?
        <Counter>
          <Icon type="share"/>
          <CounterLabel>{formatNumbers(share)}</CounterLabel>
        </Counter>
      : null
    }

    {
      bookmark
      ?
        <Counter>
          <Icon type="bookmarkIcon"/>
          <CounterLabel>{formatNumbers(bookmark)}</CounterLabel>
        </Counter>
      : null
    }
  </Wrapper>
};

Counters.defaultProps = {
  likes: null,
  comments: null,
  share: null,
  bookmark: null
};

Counters.propTypes = {
  likes: number,
  comments: number,
  share: number,
  bookmark: number
};

export default Counters;