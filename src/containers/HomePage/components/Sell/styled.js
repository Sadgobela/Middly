import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 225px;
  position: relative;
  z-index: 1;
  padding: 0 28px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 2;
    background: linear-gradient(15.14deg, rgba(0, 0, 0, 0.24) 26.37%, rgba(0, 0, 0, 0) 74.19%);
    opacity: 0.3;
  }

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 3;
    background-position: left center;
    background-repeat: no-repeat;
    background-image: ${({background}) => `url(${background})` || 'none'};
  }
`;

export const Content = styled.div`
  margin: auto 0 auto auto;
  padding-bottom: 14px;
  position: relative;
  z-index: 5;
  max-width: 190px;
`;

export const Title = styled.p`
  margin: 0 0 12px 0;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  display: flex;
  align-items: center;
  color: #000000;
`;

export const Description = styled.p`
  margin: 0 0 16px 0;
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  line-height: 1.4;
  letter-spacing: 0.013em;
  color: #545454;
`;

export const Links = styled.div`
  display: flex;

  a {
    &:not(:last-child) {
      margin-right: 8px;
    }
  }

  img {
    max-width: 78px;
  }
`;
