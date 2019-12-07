import styled from 'styled-components';
import media from 'constants/media';

export const Wrapper = styled.span`
  @media (max-width: ${media.mobileMax}) {
    padding-top: 97px;
    min-height: 100%;
    width: 100vw;
    display: block;
  }
`;
