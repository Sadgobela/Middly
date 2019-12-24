import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: flex-end;
  z-index: 1111;
  background: rgba(0, 0, 0, 0.5);
`;

export const Guide = styled.div`
  width: 566px;
  height: 100%;
  background: #fff;
`;

export const Heading = styled.span`
  display: block;
  font-family: 'Helvetica', sans-serif;
  font-size: 22px;
  line-height: 132%;
  letter-spacing: 0.016em;
  color: #000000;
  text-align: center;
  margin: 32px 0 30px 0;
`;

export const TabList = styled.ul`
  display: flex;
  list-style: none;
  margin-bottom: 0;
  padding: 0;
`;

export const Tab = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  height: 36px;
  font-family: Helvetica, sans-serif;
  font-weight: 700;
  font-size: 14px;
  background: transparent;
  border: none;
  text-decoration: none;
  color: ${({active}) => (active ? '#000000' : '#7A7A7A')};
  border-bottom: 2px solid #efefef;
  ${(props) => {
    if (props.main && props.active) return 'border-bottom: 2px solid #ED484F';
    if (props.active) return 'border-bottom: 2px solid #000';
    return null;
  }};
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  margin: 32px 0 0 0;
  max-height: 70vh;
  overflow-y: auto;
`;

export const Table = styled.div`
  padding: 24px 40px;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const TableWrapper = styled.div`
  display: flex;
`;

export const Column = styled.div`
  flex-grow: 1;
`;

export const Wrap = styled.div`
  display: flex;
  width: 100%;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  flex-grow: 1;
  margin-top: ${({single}) => (single ? '29px' : '0')};
`;

export const Title = styled.span`
  display: block;
  font-family: Helvetica, sans-serif;
  font-weight: 700;
  font-size: 12px;
  line-height: 120%;
  letter-spacing: 0.06em;
  color: #000;
  text-align: center;
  padding-bottom: ${({paddingBottom}) => (paddingBottom ? '37px' : '8px')};
`;

export const Item = styled.span`
  display: block;
  font-family: Helvetica, sans-serif;
  font-size: 12px;
  line-height: 120%;
  font-weight: ${({bold}) => (bold ? '700' : '400')};
  margin-bottom: 16px;
  padding-bottom: 16px;
  color: ${({bold}) => (bold ? '#000' : '#545454')};
  text-align: center;
  border-bottom: 1px solid #c4c4c4;
`;

export const Unit = styled.span`
  padding: 0 0 14px 0;
  font-family: Helvetica Neue, sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  color: #666;
`;

export const Close = styled.i`
  position: absolute;
  top: 24px;
  right: 32px;
  width: 24px;
  height: 24px;
`;
