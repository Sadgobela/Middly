import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid #ed484f;
  padding: 0 0 16px 0;
  ${({customStyles}) => (customStyles ? `${customStyles}` : null)};
`;

export const Heading = styled.span`
  display: block;
  font-family: SF Pro Display, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 28px;
  line-height: 33px;
  color: #000;
  margin: 0;
  padding: 0;
`;
