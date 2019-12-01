import styled from 'styled-components';

import {primaryColor} from 'constants/colors';

export const Wrapper = styled.div`
  padding: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TabContainer = styled.div`
  min-width: 100px;
  min-height: 36px;
  background: #ffffff;
  box-shadow: 1px 1px 12px rgba(0, 0, 0, 0.1);
  border-radius: 40px;
  padding: 14px 10px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

export const Tab = styled.span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  margin: 0 6px;
  background: ${({active}) => (active ? primaryColor : '#CCCCCC')};
  transition: all 0.3s ease;
`;
