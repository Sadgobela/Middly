import React, {useRef} from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from './styled';

const Swipe = ({ active, tab, setTab, maxTab, children }) => {
  const wrapper = useRef(null);
  let movedX = null,
      startX = null,
      moving = false;

  const touchStart = (e) => {
    startX = e.targetTouches[0].clientX;

    if(wrapper && wrapper.current && wrapper.current.contains(e.target) && active) {
      if((startX > 0 && startX <= 40) || (startX >= window.innerWidth - 80 && startX >= window.innerWidth - 120)) {
        moving = true;
      } else {
        moving = false;
      }
    }
  };

  const touchMove = (e) => {
    const diffX = e.changedTouches[0].clientX - startX;

    if(wrapper && wrapper.current && wrapper.current.contains(e.target) && moving) {
      movedX = diffX;
      wrapper.current.style.transform = `translate(${movedX}px, 0)`;
    }
  };

  const touchEnd = (e) => {
    if(wrapper && wrapper.current && wrapper.current.contains(e.target)) {
      const diffX = e.changedTouches[0].clientX - startX;

      if(diffX >= 40 && moving) {
        setTab(tab - 1);
        movedX = null;
        moving = false;
        wrapper.current.style.transform = `translate(0, 0)`;
      } else if(diffX <= -40 && moving) {
        tab !== maxTab && setTab(tab + 1);
        movedX = null;
        moving = false;
        wrapper.current.style.transform = `translate(0, 0)`;
      } else {
        movedX = null;
        moving = false;
        wrapper.current.style.transform = `translate(0, 0)`;
      }
    }
  };

  return <Wrapper
    ref={wrapper}
    onTouchStart={(e) => touchStart(e)}
    onTouchMove={(e) => touchMove(e)}
    onTouchEnd={(e) => touchEnd(e)}
  >
    {children}
  </Wrapper>
};

Swipe.defaultProps = {
  active: false,
  children: '',
  tab: 1,
  maxTab: 4,
  setTab: () => {}
};

Swipe.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.any,
  tab: PropTypes.number,
  maxTab: PropTypes.number,
  setTab: PropTypes.func
};

export default Swipe;