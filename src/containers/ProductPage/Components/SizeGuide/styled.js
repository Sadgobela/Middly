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
  //-----------------------------
  display: none; //!!!!!!!!!!!!! ЭТО ПОКА РАБОТАЕШЬ НАД SIZE GUIDE
  //-----------------------------
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

export const Tab = styled.ul`
  display: flex;
  list-style: none;
  margin-bottom: 0;
`;

export const Link = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 36px;
  font-family: Helvetica, sans-serif;
  font-weight: 700;
  font-size: 14px;
  text-decoration: none;
  color: ${({active}) => (active ? '#000000' : '#7A7A7A')};
  border-bottom-width: ${({active}) => (active ? '2px' : '0px')};
  border-bottom-color: ${({active}) => (active ? '#000000' : 'none')};
  border-bottom-style: ${({active}) => (active ? 'solid' : 'none')};
`;

export const Table = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 24px 40px;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  display: flex;
  height: 51px;
`;

export const Wrap = styled.div`
  display: flex;
`;

export const Row = styled.div`
	display:flex;
	flex-direction: column;
	margin-right: ${({right}) => (right ? '30px' : '0px')}
	text-align:center;
`;

export const Title = styled.span`
  display: block;
  font-family: Helvetica, sans-serif;
  font-weight: 700;
  font-size: 12px;
  line-height: 120%;
  letter-spacing: 0.06em;
  color: #000000;
  padding-bottom: ${({bottom}) => (bottom ? '32px' : '8px')};
  text-align: center;
`;

export const Item = styled.span`
  display: block;
  font-family: Helvetica, sans-serif;
  font-size: 12px;
  line-height: 120%;
  font-weight: ${({subtitle}) => (subtitle ? '700' : '400')};
  padding-bottom: ${({subtitle}) => (subtitle ? '14px' : '32px')};
  color: #545454;
  text-align: center;
`;
