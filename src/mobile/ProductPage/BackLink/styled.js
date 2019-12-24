import styled from 'styled-components';
import {Link} from 'react-router-dom';

import {primaryColor} from 'constants/colors';

export const Wrapper = styled(Link)`
  position: absolute;
  left: -1px;
  top: 12px;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;

  svg {
    stroke: #000;
    transition: all 0.3s ease;

    &:hover {
      stroke: ${primaryColor};
    }
  }
`;
