import React from 'react';
import { number, func, bool, object } from 'prop-types';

import Icon from 'components/Icon';
import Popup from './popup';

import {
  Wrapper,
  Counter,
  CounterLabel
} from './styled';

const Counters = ({ style, likes, comments, share, bookmark, showCommentsPopup, setShowCommentsPopup }) => {
  const formatNumbers = (number) => {
    return number.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1,');
  };

  return <Wrapper style={style}>
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
        <Counter onClick={() => setShowCommentsPopup(true)}>
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

    <Popup
      showCommentsPopup={showCommentsPopup}
      setShowCommentsPopup={setShowCommentsPopup}
    />
  </Wrapper>
};

Counters.defaultProps = {
  style: {},
  likes: null,
  comments: null,
  share: null,
  bookmark: null,
  showCommentsPopup: false,
  setShowCommentsPopup: () => {}
};

Counters.propTypes = {
  style: object,
  likes: number,
  comments: number,
  share: number,
  bookmark: number,
  showCommentsPopup: bool,
  setShowCommentsPopup: func
};

export default Counters;