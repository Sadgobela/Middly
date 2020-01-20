import styled from 'styled-components';

export const Tab = styled.button`
  position: relative;
  display: inline-flex;
  padding: 0 7px 6px;
  margin: 0 22px 0 0;
  background: transparent;
  border: none;
  cursor: pointer;
  font-family: Helvetica Neue, sans-serif;
  font-weight: bold;
  font-size: 14px;
  line-height: 140%;
  text-align: center;
  color: ${({active}) => (active ? '#000' : '#7A7A7A')};
  outline: none;

  &::after {
    content: ${({active}) => (active ? ` '' ` : null)};
    position: absolute;
    top: 100%;
    right: 0;
    left: 0;
    height: 2px;
    background: #000;
    border-radius: 10px;
  }
`;
