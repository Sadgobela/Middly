import React from 'react';
import PropTypes from 'prop-types';

import IconRewards from 'assets/Rewards';
import ShoppingCart from 'assets/ShoppingCart';
import Message from 'assets/Message';
import Notification from 'assets/Notification';

import {primaryColor} from 'constants/colors';
import {Wrapper, Rewards, RewardsLabel, Pin, PinCount, Divider} from './styled';

const Tools = ({me, tab, sliderGoTo}) => {
  return (
    <Wrapper>
      <Rewards me={me} onClick={() => sliderGoTo(0)}>
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
          <Pin onClick={() => sliderGoTo(1)}>
            <Message fill={tab === 1 ? primaryColor : 'black'} />
            {me.messages && <PinCount style={{right: 5}}>{me.messages}</PinCount>}
          </Pin>

          <Pin onClick={() => sliderGoTo(2)}>
            <Notification fill={tab === 2 ? primaryColor : 'black'} />
            {me.notifications && <PinCount>{me.notifications}</PinCount>}
          </Pin>
        </>
      ) : null}
      <Pin onClick={() => sliderGoTo(3)} data-tab={me ? 3 : 1}>
        <ShoppingCart fill={me ? (tab === 3 ? primaryColor : 'black') : tab === 1 ? primaryColor : 'black'} />
        <PinCount>20</PinCount>
      </Pin>
    </Wrapper>
  );
};

Tools.defaultProps = {
  me: {},
  tab: 1,
  sliderGoTo: () => {}
};

Tools.propTypes = {
  me: PropTypes.object,
  tab: PropTypes.number,
  sliderGoTo: PropTypes.func
};

export default Tools;
