import React from 'react';
import PropTypes from 'prop-types';

import {Wrapper, TabContainer, Tab} from './styled';

const navs = [
  {
    id: 1,
    title: 'Home'
  },
  {
    id: 2,
    title: 'Messages'
  },
  {
    id: 3,
    title: 'Notification'
  },
  {
    id: 4,
    title: 'Cart'
  }
];

const Navigation = ({tab, setTab}) => {
  return (
    <Wrapper>
      <TabContainer>
        {navs.map((nav) => {
          return <Tab active={nav.id === tab} key={nav.id} onClick={() => setTab(nav.id)} />;
        })}
      </TabContainer>
    </Wrapper>
  );
};

Navigation.defaultProps = {
  tab: 1,
  setTab: () => {}
};

Navigation.propTypes = {
  tab: PropTypes.number,
  setTab: PropTypes.func
};

export default Navigation;
