import styled from 'styled-components';
import {mainWhiteColor} from '../../../constants/colors';

export const MenuContainer = styled.div`
  position: absolute;
  left: ${({isMenuOpened}) => (isMenuOpened ? '-300px' : '0')};
  top: 80px; 
  transition: left 0.3s ease-in-out;
  padding: 10px;
  height: 20000px;
  z-index: 1024;
  width: 300px;
  background: ${mainWhiteColor};
  
  &:after {
    position: absolute;
    ${({isMenuOpened}) => (isMenuOpened ? '' : 'content: \'\';')};
    top: 0;
    left: 0; 
    right: -2000px;
    bottom: -2000px;
    background: rgba(0,0,0, 0.5);
    z-index: -1;
  }
`;
