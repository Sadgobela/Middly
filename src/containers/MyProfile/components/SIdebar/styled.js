import styled from 'styled-components';

export const Aside = styled.aside`
  width: 300px;
  background: #ffffff;
  box-shadow: 0 2px 25px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
`;

export const About = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px 31px 36px 31px;
  border-bottom: 1px solid #eee;
`;

export const AvatarWrap = styled.div`
  position: relative;
`;

export const Avatar = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  overflow: hidden;
`;

export const AvatarPic = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const EditAvatar = styled.i`
  position: absolute;
  bottom: 0;
  right: 11px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 33px;
  height: 33px;
  background: #c3c3c3;
  border-radius: 50%;
  border: 3px solid #ffffff;
`;

export const Name = styled.span`
  font-family: SF Pro Display, sans-serif;
  font-weight: 600;
  font-size: 20px;
  line-height: 124%;
  text-align: center;
  letter-spacing: 0.019em;
  color: #000;
  margin: 16px 0 18px 0;
`;

export const Location = styled.span`
  display: inline-flex;
  align-items: center;
  font-family: SF Pro Display, sans-serif;
  font-size: 14px;
  line-height: 140%;
  color: #ed484f;
  margin: 0 0 26px 0;

  & svg {
    width: 18px;
    height: 20px;
    margin-right: 8px;
  }

  & svg path {
    fill: #ed484f;
  }
`;

export const Statistic = styled.span`
  font-family: SF Pro Display, sans-serif;
  font-size: 12px;
  line-height: 132%;
  color: #464646;
  margin: ${({margin}) => (margin ? '0 24px 0 0' : '0')};
`;

export const StatisticCount = styled.span`
  font-weight: 600;
  font-size: 18px;
  line-height: 124%;
  text-align: right;
  letter-spacing: 0.019em;
  color: #000;
  margin: 0 4px 0 0;
`;

export const Profession = styled.span`
  font-family: SF Pro Display, sans-serif;
  font-weight: 600;
  font-size: 16px;
  line-height: 140%;
  color: #000;
  margin: 24px 0 8px 0;
  text-transform: uppercase;
`;

export const Description = styled.p`
  font-family: SF Pro Display, sans-serif;
  font-size: 13px;
  line-height: 140%;
  text-align: center;
  color: #000000;
  cursor: pointer;

  &::after {
    content: ${({less}) => (less ? `'More'` : `'Less'`)};
    color: #ed484f;
    margin-left: 4px;
  }
`;
