import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  top: ${({aside}) => (aside ? '0px' : 'calc(100% + 2px)')};
  left: ${({aside}) => (aside ? '100%' : '0')};
  width: 1200px;
  height: 600px;
  background: #fff;
  box-shadow: ${({aside}) => (aside ? 'none' : '0px 4px 15px rgba(0, 0, 0, 0.1)')};
  border-radius: ${({aside}) => (aside ? 'none' : '4px')};
  z-index: 10;
  padding: 32px 0 33px 46px;
  transition: 0.3s;
  opacity: 0;

  &.subcategory-enter-active {
    opacity: 1;
  }

  &.subcategory-enter-done {
    opacity: 1;
  }
`;

export const Column = styled.div`
  margin: 0 54px 0 0;
`;

export const MainHeading = styled.span`
  display: block;
  font-size: 18px;
  line-height: 25px;
  font-weight: 700;
  color: #000;
  margin: 0 0 21px 4px;
`;

export const Heading = styled.span`
  display: block;
  font-size: 16px;
  line-height: 22px;
  color: #ed484f;
  margin: 0 0 16px 0;
`;

export const Item = styled.a`
  display: block;
  font-size: 14px;
  line-height: 20px;
  color: #000;
  margin: 0 0 8px 0;
  text-decoration: none;
`;

export const Row = styled.div`
  display: flex;
`;
