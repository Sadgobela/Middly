import styled from 'styled-components';

export const PageContainer = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  padding: 34px 0 0 0;
  justify-content: ${(props) => {
    if (props.sb) return 'space-between';
    if (props.center) return 'center';
    return 'flex-start';
  }};
`;

export const Container = styled.div`
  position: relative;
  display: flex;
  width: ${({width}) => (width ? `${width}` : 'auto')};
  height: ${({height}) => (height ? `${height}px` : 'auto')};
  max-height: ${({maxh}) => (maxh ? `${maxh}px` : 'auto')};
  margin: ${({margin}) => (margin ? `${margin}` : '0')};
  padding: ${({padding}) => (padding ? `${padding}` : '0')};
  flex-direction: ${({column}) => (column ? 'column' : 'row')};
  flex-wrap: ${({wrap}) => (wrap ? 'wrap' : 'nowrap')};
  align-items: ${(props) => {
    if (props.aic) return 'center';
    if (props.center) return 'center';
    if (props.aife) return 'flex-end';
    return 'flex-start';
  }};
  justify-content: ${(props) => {
    if (props.sb) return 'space-between';
    if (props.center) return 'center';
    if (props.jcc) return 'center';
    if (props.jcfe) return 'flex-end';
    return 'flex-start';
  }};

  ${(props) => {
    let style = '';
    if (props.bsh) style = style + `box-shadow: ${props.bsh};`;
    if (props.bg) style = style + `background: ${props.bg};`;
    if (props.bd) style = style + `border: ${props.bd};`;
    if (props.br) style = style + `border-radius: ${props.br};`;
    return style;
  }};
`;
