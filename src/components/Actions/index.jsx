import React  from 'react';
import { bool } from 'prop-types';

import useGlobal from "store";

import {
  Wrapper,
  ActionButton
} from './styled';

const Actions = ({ inline }) => {
  const [globalState, globalActions] = useGlobal();

  return <Wrapper>
    <ActionButton
      inline={inline}
      onClick={() => {
        globalActions.setActionsPopup(true);
      }}
    >
      <span/>
      <span/>
      <span/>
    </ActionButton>
  </Wrapper>
};

Actions.defaultProps = {
  inline: false
};

Actions.propTypes = {
  inline: bool
};

export default Actions;