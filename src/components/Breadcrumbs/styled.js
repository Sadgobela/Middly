import styled from 'styled-components';

export const Container = styled.div``;

export const Location = styled.a`
  display: inline-flex;
  align-items: center;
  font-family: Helvetica Neue, sans-serif;
  font-weight: bold;
  font-size: 14px;
  line-height: 140%;
  ${({current}) =>
    current
      ? `
		color: #000;
    cursor: not-allowed;
    pointer-events: none;
		`
      : 'color: #656565'};
  margin: 0 20px 0 0;

  & svg {
    height: 12px;
    width: 7px;
    margin-left: 20px;
  }
`;
