import styled from 'styled-components';

export const Card = styled.div`
  position: relative;
  width: 272px;
  background: #ffffff;
  box-shadow: 0px 2px 9px rgba(0, 0, 0, 0.09);
  border-radius: 4px;
  margin: ${({margin}) => (margin ? `${margin}` : 0)};
`;

export const Poster = styled.div`
  width: 100%;
  height: 260px;
  position: relative;
`;

export const PosterPic = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 4px 4px 0px 0px;
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
  font-size: 16px;
  line-height: 140%;
  letter-spacing: -0.016em;
  color: #000000;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 90%;
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
    fill: #8f8f8f;
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

export const Prices = styled.div``;

export const Shipping = styled.span`
  font-size: 14px;
  line-height: 140%;
  text-align: right;
  color: #8f8f8f;
`;

export const PriceValue = styled.span`
  font-size: ${({isDiscounted}) => (isDiscounted ? '16px' : '14px')};
  line-height: 140%;
  letter-spacing: -0.016em;
  ${({isDiscounted}) => (isDiscounted ? 'color: #000000;' : 'margin-left: 5px; text-decoration: line-through;')};
`;

export const Bookmark = styled.div`
  > div {
    display: flex;
  }
  svg {
    fill: #8f8f8f;
  }
`;
