import styled from 'styled-components';

export const Nav = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  box-shadow: 0px 2px 25px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
`;

export const Tab = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 36px;
  background: transparent;
  border: none;
  cursor: pointer;
  font-family: Helvetica, sans-serif;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  color: #7a7a7a;
  margin: 4px 70px 0;
  box-sizing: border-box;

  &:hover {
    width: 100px;
    color: #000000;
    border-bottom: 2px solid #000000;
  }
`;

export const Wrap = styled.div`
  display: flex;
`;

export const Content = styled.div`
  width: 576px;
  margin: 0 0 0 16px;
`;

export const Table = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 12px 0 0;
`;

export const Item = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 280px;
  height: 300px;
  background: #ffffff;
  box-shadow: 0px 2px 25px rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  margin: 0 0 16px;
`;

export const Pic = styled.img`
  width: 110px;
  height: ${({big}) => (big ? '208px' : '100px')};
  border-radius: 3px;
`;

export const Create = styled.span`
  display: inline-flex;
  justify-content: center;
  font-family: Helvetica, sans-serif;
  font-weight: 700;
  font-size: 14px;
  line-height: 140%;
  color: #464646;
`;

export const Title = styled.span`
  display: block;
  font-family: Helvetica, sans-serif;
  font-weight: 500;
  font-size: 18px;
  line-height: 132%;
  letter-spacing: -0.024em;
  color: #000000;
  margin: 12px 13px 8px;
`;

export const Group = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${({bottom}) => (bottom ? 'flex-start' : 'space-between')};
  margin: ${({bottom}) => (bottom ? '16px 13px' : '0 26px')};
`;

export const PicGroup = styled.div`
  height: 208px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Details = styled.span`
  display: block;
  font-family: Helvetica, sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 120%;
  color: #333333;
  margin-right: ${({purchased}) => (purchased ? '46px' : '13px')};
`;

export const Bold = styled(Details)`
  display: inline;
  font-weight: 700;
  margin-right: 0;
`;

export const Icon = styled.img`
  margin-right: ${({settings}) => (settings ? '16px' : '0')};
  margin-left: ${({share}) => (share ? '36px' : '0')};
`;

export const Settings = styled.button`
  display: flex;
  justify-content: space-between;
  width: 28px;
  height: 24px;
  background: transparent;
  border: none;
  cursor: pointer;
  margin-left: 12px;

  &:before {
    content: '';
    width: 4px;
    height: 4px;
    background: #7c7e82;
    border-radius: 50%;
    margin-right: 2px;
  }

  &:after {
    content: '';
    width: 4px;
    height: 4px;
    background: #7c7e82;
    border-radius: 50%;
    margin-left: 2px;
  }
`;

export const Dot = styled.span`
  display: block;
  width: 4px;
  height: 4px;
  background: #7c7e82;
  border-radius: 50%;
`;

export const EditList = styled.div`
  position: absolute;
  width: ${({owner}) => (owner ? '252px' : '292px')};
  height: ${({owner}) => (owner ? '186px' : '234px')};
  top: ${({owner}) => (owner ? '0' : '133px')};
  left: ${({owner}) => (owner ? '' : '270px')};
  right: ${({owner}) => (owner ? '50px' : '')};
  margin-left: 3px;
  background: #ffffff;
  box-shadow: 0px 2px 9px rgba(0, 0, 0, 0.28);
  border-radius: 8px;
  z-index: 99;
`;

export const Shops = styled.div`
  width: 292px;
  height: 309px;
  background: #ffffff;
  box-shadow: 0px 2px 25px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  margin-left: 14px;
  padding: 24px 8px 24px 16px;
`;

export const Function = styled.button`
  display: flex;
  align-items: center;
  width: 100%;
  height: 48px;
  border-top: none;
  border-right: none;
  border-left: none;
  border-bottom: ${({boldBorder}) => (boldBorder ? '1px solid #C3C3C3' : '1px solid #FAFAFA')};
  background: transparent;
  font-family: Helvetica, sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 140%;
  letter-spacing: -0.016em;
  cursor: pointer;
  padding-left: 15px;
  color: #464646;

  &:hover {
    font-weight: 500;
    color: #000000;
  }

  &:first-child {
    height: 42px;
  }

  &:last-child {
    color: #ed494f;
    border-bottom: none;
  }
`;

export const Heading = styled.span`
  font-family: Helvetica, sans-serif;
  font-weight: 700;
  font-size: 18px;
  line-height: 140%;
  color: #a7a7a7;
`;

export const View = styled.span`
  font-family: Helvetica, sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 132%;
  color: #000000;
`;

export const Line = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: ${({flexStart}) => (flexStart ? 'flex-start' : 'space-between')};
  margin-bottom: ${({short}) => (short ? '16px' : '32px')};

  &:first-child {
    margin-bottom: 40px;
  }

  &:last-child {
    margin-bottom: 40px;
  }
`;
