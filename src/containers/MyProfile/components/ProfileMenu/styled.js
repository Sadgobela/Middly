import styled from 'styled-components';

export const List = styled.ul`
  list-style: none;
  padding: 25px 0 16px 0;
  margin: 0;
`;

export const Item = styled.li``;

export const Link = styled.a`
  display: flex;
  align-items: center;
  height: 44px;
  font-family: Helvetica Neue, sans-serif;
  font-weight: ${({active}) => (active ? '500' : '400')};
  font-size: 16px;
  line-height: 140%;
  color: ${({active}) => (active ? '#000' : '#656565')};
  padding: 0 0 0 44px;
  ${({active}) => (active ? 'box-shadow: inset 5px 0 0 0 #ED484F;' : null)};
`;
