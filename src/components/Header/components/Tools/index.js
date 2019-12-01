import React from 'react';
import PropTypes from 'prop-types';

import IconRewards from 'assets/Rewards';
import ShoppingCart from 'assets/ShoppingCart';
import Message from 'assets/Message';
import Notification from 'assets/Notification';

import {primaryColor} from 'constants/colors';
import {Wrapper, Rewards, RewardsLabel, Pin, PinCount, Divider} from './styled';

const Tools = ({me, tab, setTab}) => {
  return (
    <Wrapper>
      <Rewards me={me}>
        <IconRewards />
        {me ? (
          <RewardsLabel me={me}>
            {me.rewards ? (me.rewards > 999 ? me.rewards / 1000 + 'k' : me.rewards) : 0}
          </RewardsLabel>
        ) : (
          <RewardsLabel>Shop & Earn Rewards</RewardsLabel>
        )}
      </Rewards>
      {!me && <Divider />}

      {me ? (
        <>
          <Pin onClick={() => setTab(2)}>
            <Message fill={tab === 2 ? primaryColor : 'black'} />
            {me.messages && <PinCount style={{right: 5}}>{me.messages}</PinCount>}
          </Pin>

          <Pin onClick={() => setTab(3)}>
            <Notification fill={tab === 3 ? primaryColor : 'black'} />
            {me.notifications && <PinCount>{me.notifications}</PinCount>}
          </Pin>
        </>
      ) : null}
      <Pin onClick={() => setTab(4)}>
        <ShoppingCart fill={tab === 4 ? primaryColor : 'black'} />
        <PinCount>20</PinCount>
      </Pin>
    </Wrapper>
  );
};

Tools.defaultProps = {
  me: {},
  tab: 1,
  setTab: () => {}
};

Tools.propTypes = {
  me: PropTypes.object,
  tab: PropTypes.number,
  setTab: PropTypes.func
};

export default Tools;
