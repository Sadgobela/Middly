import styled from 'styled-components';
import {primaryColor, bookmarkFillColor} from 'constants/colors';

export const Wrapper = styled.div`
  padding: 0 16px;
  background-color: #fafafa;
`;

export const WrapperContent = styled.div`
  padding: 0 16px;
  background: #ffffff;
  border-radius: 4px;
  padding: 16px 18px;
  margin: 0 11px 0 auto;
`;

export const Background = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 52px 0 40px;
  min-height: 225px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: left top;
  background-image: ${({background}) => `url(${background})` || 'none'};
`;

export const Title = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  display: flex;
  align-items: center;
  color: ${primaryColor};
  margin: 0 0 12px;
  letter-spacing: 0.2px;
`;

export const Description = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  text-align: center;
  color: ${bookmarkFillColor};
  margin: 0 auto;
  max-width: 142px;
`;

// TODO: Instead 'a' Will be 'Link' from react-router-dom
export const ButtonLink = styled.a`
  display: inline-block;
  margin-top: 18px;
  width: 149px;
  height: 23px;
  background: ${primaryColor};
  border-radius: 4px;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 23px;
  text-transform: uppercase;
  color: #ffffff;
  text-align: center;
`;
