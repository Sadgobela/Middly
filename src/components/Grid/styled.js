import styled from 'styled-components';

export const PageContainer = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  padding: 34px 0 0 0;
`;

export const Container = styled.div`
  display: flex;
  width: ${({width}) => (width ? `${width}px` : 'auto')};
  height: ${({height}) => (height ? `${height}px` : 'auto')};
  margin: ${({margin}) => (margin ? `${margin}` : '0')};
  padding: ${({padding}) => (padding ? `${padding}` : '0')};
  flex-direction: ${({column}) => (column ? 'column' : 'row')};
  flex-wrap: ${({wrap}) => (wrap ? 'wrap' : 'nowrap')};
  align-items: ${(props) => {
    if (props.aic) return 'center';
    if (props.center) return 'center';
    return 'flex-start';
  }};
  justify-content: ${(props) => {
    if (props.sb) return 'space-between';
    if (props.center) return 'center';
    return 'flex-start';
  }};
`;
