import styled from 'styled-components';

import {primaryColor, bgLightGray, textGray} from 'constants/colors';

export const Wrapper = styled.div`
  padding: ${({me}) => (me ? '24px 16px' : '24px 16px 12px')};
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  min-height: 84px;
`;

export const UserContent = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

export const UserLabel = styled.span`
  width: 100%;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  color: ${textGray};
  margin-bottom: 6px;
`;

export const UserSignIn = styled.span`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  margin: auto 0;
  color: ${primaryColor};
`;

export const UserDivider = styled.span`
  width: 1px;
  height: 24px;
  background: ${bgLightGray};
  margin: auto 11px;
`;

export const UserSignUp = styled.span`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  margin: auto 0;
  color: ${primaryColor};
`;

export const UserProfile = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;

  svg {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translate(0, -50%);
    max-height: 12px;
    max-width: 9px;
  }
`;

export const UserProfileThumb = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  margin-right: 16px;
  object-fit: cover;
`;

export const UserProfileName = styled.span`
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: ${textGray};

  span {
    display: block;
    color: #000000;
  }
`;
