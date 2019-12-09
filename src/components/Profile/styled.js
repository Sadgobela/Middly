import styled from 'styled-components';

export const Container = styled.div``;

export const Header = styled.div`
  height: 73px;
  border-bottom: 1px solid #e4e4e4;
  padding: 26px 0 0 17px;
`;

export const Heading = styled.span`
  font-size: 16px;
  line-height: 22px;
  color: #000;
`;

export const FollowInfo = styled.div`
  padding: 16px;
  border-bottom: 1px solid #e4e4e4;
  margin: 0 0 16px 0;
`;

export const FollowCounter = styled.i`
  font-style: normal;
  font-weight: 700;
  margin: 0 4px 0 0;
`;

export const Title = styled.span`
  display: block;
  font-size: 14px;
  line-height: 17px;
  color: #000;
  margin: ${({withIcon}) => (withIcon ? '0 0 0 16px' : '0 0 18px 0')};
  ${({last}) => (last ? 'margin-bottom: 0' : null)};
  transition: 0.2s;
  ${({bold}) =>
    bold
      ? `
			font-weight: 700;
			color: #398287;
			`
      : null};
`;

export const ProfileLink = styled.a`
  display: flex;
  align-items: center;
  margin: 0 0 18px 16px;

  &:last-child {
    margin-bottom: 24px;
  }
`;
