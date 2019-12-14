import styled from 'styled-components';

export const PageContainer = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  padding: 34px 0 0 0;
`;

export const Row = styled.div`
  display: flex;
  ${(props) => {
    if (props.aic) return 'align-items: center';
  }};
`;
