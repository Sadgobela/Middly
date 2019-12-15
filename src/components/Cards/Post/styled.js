import styled from 'styled-components';

export const Card = styled.div`
  position: relative;
  width: 273px;
  height: 366px;
  background: #ffffff;
  box-shadow: 0 2px 25px rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  margin: ${({margin}) => (margin ? `${margin}` : 0)};
`;

export const Poster = styled.div`
  width: 100%;
  height: 260px;
`;

export const PosterPic = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Avatar = styled.div`
  width: 44px;
  height: 44px;
`;

export const About = styled.div`
  margin: 0 0 0 8px;
`;

export const AvatarLogo = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Name = styled.span`
  display: block;
`;

export const Shop = styled.span`
  display: inline-flex;
  align-items: center;
  font-family: SF Pro Display, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 140%;
  color: #464646;

  & svg {
    margin: 0 10px 0 0;
  }
`;

export const Likes = styled(Shop)``;

export const Time = styled.span`
  position: absolute;
  top: 11px;
  right: 15px;
  font-family: Helvetica Neue, sans-serif;
  font-size: 14px;
  line-height: 140%;
  color: #656565;
`;
