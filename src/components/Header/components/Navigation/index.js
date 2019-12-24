import React from 'react';
import PropTypes from 'prop-types';

import {Wrapper, TabContainer, Tab} from './styled';

const navs = [
  {
    title: 'Home'
  },
  {
    title: 'Messages'
  },
  {
    title: 'Notification'
  },
  {
    title: 'Cart'
  }
];

const Navigation = ({tab, sliderGoTo}) => {
  return (
    <Wrapper>
      <TabContainer>
        {navs.map((nav, key) => {
          return <Tab active={key === tab} key={key} onClick={() => sliderGoTo(key)} />;
        })}
      </TabContainer>
    </Wrapper>
  );
};

Navigation.defaultProps = {
  tab: 1,
  sliderGoTo: () => {}
};

Navigation.propTypes = {
  tab: PropTypes.number,
  sliderGoTo: PropTypes.func
};

export default Navigation;
