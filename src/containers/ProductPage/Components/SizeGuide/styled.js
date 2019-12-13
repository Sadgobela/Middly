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
`;

export const Tab = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 36px;
  font-family: Helvetica, sans-serif;
  font-weight: 700;
  font-size: 14px;
  background: transparent;
  border: none;
  text-decoration: none;
  color: ${({active}) => (active ? '#000000' : '#7A7A7A')};
  border-bottom: ${({active}) => (active ? '2px solid #000' : 'none')};
`;

export const Table = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 24px 40px;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Wrap = styled.div`
  display: flex;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: ${({single}) => (single ? '28px 0 0 0' : '0')};
  ${({double}) =>
    double
      ? `
		margin-right: 30px;
		&:last-child{
			margin-right: 0;
		}
	`
      : null};
`;

export const Title = styled.span`
  font-family: Helvetica, sans-serif;
  font-weight: 700;
  font-size: 12px;
  line-height: 120%;
  letter-spacing: 0.06em;
  color: #000000;
  padding-bottom: 8px;
  text-align: center;
`;

export const Item = styled.span`
  display: block;
  font-family: Helvetica, sans-serif;
  font-size: 12px;
  line-height: 120%;
  font-weight: ${({bold}) => (bold ? '700' : '400')};
  padding-bottom: 32px;
  color: ${({bold}) => (bold ? '#000' : '#545454')};
  text-align: center;
`;

export const Unit = styled(Item)`
  padding: 0 0 14px 0;
  font-weight: 700;
`;
