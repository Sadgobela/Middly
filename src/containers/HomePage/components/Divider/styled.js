import styled from 'styled-components';

export const Wrapper = styled.div`
  height: ${({height}) => (height ? `${height}px` : '24px')};
  width: 100vw;
  background: #fafafa;
`;
