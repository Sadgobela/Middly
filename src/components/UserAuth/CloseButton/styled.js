import styled from 'styled-components';
import {Link} from 'react-router-dom';
import media from '../../../constants/media';

export const CloseButton = styled(Link)`
  position: absolute;
  top: 16px;
  right: 17px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  border: none;
  outline: none;
  margin: 0;
  padding: 0;
  cursor: pointer;

  @media (max-width: ${media.mobileMax}) {
    top: 41px;
  }
`;
