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
  box-sizing: border-box;
  color: ${({active}) => (active ? '#000' : '#7A7A7A')};
  outline: none;
  ${({active}) =>
  active
    ? `
    border-bottom: 2px solid #000;
		`
    : 'border-bottom: 2px solid transparent;'}

  &:hover {
    color: #000;
    border-bottom: 2px solid #000;
  }
  
`;
