import styled from 'styled-components';

import Arrow from 'assets/Arrow';
import {primaryColor, textGray} from 'constants/colors';

export const Wrapper = styled.div`
  width: 100%;
  position: relative;
`;

export const WrapperPopup = styled.div`
  position: fixed;
  top: 57px;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1100;
  background: #fff;
  border-top: 1px solid #cccccc;
  transition: all 0.3s ease;
  transition-delay: 0.1s;
  transform: translate(${({active}) => (active ? '0' : '100%')}, 0);
`;

export const Header = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 16px;
`;

export const HeaderPopup = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 24px 16px;
  position: relative;
`;

export const Title = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  display: flex;
  align-items: center;
  color: #000000;
  margin: 0;
`;

export const TitlePopup = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  width: 100%;
  text-align: center;
  color: #000000;
  margin: 0;
`;

export const ViewAll = styled.span`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  text-align: right;
  color: ${primaryColor};
  margin-left: auto;
`;

export const Content = styled.div`
  display: block;
  overflow-x: hidden;
  overflow-y: auto;
  position: relative;
`;

export const Notification = styled.div`
  padding: 16px;
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  max-width: 100%;

  &:not(:first-child) {
    border-top: 1px solid #efefef;
  }
`;

export const NotificationAvatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%:
  object-fit: cover;
`;

export const NotificationContent = styled.div`
  width: calc(100% - 40px);
  padding-left: 12px;
  position: relative;
  display: flex;
`;

export const NotificationInfo = styled.span`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #000000;
  padding-right: 4px;
`;

export const NotificationName = styled.span`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #000000;
  padding-right: 4px;
`;

export const NotificationText = styled.span`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  color: #000000;
`;

export const NotificationDate = styled.span`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  color: ${textGray};
  padding-right: 4px;
`;

export const NotificationThumb = styled.img`
  min-width: 48px;
  width: 48px;
  height: 48px;
  border-radius: 4px;
  margin-left: 16px;
`;

export const NotificationFollow = styled.span`
  min-width: 84px;
  width: 84px;
  height: 28px;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  background: ${({active}) => (active ? 'transparent' : primaryColor)};
  border-radius: 24px;
  font-size: 12px;
  line-height: 14px;
  color: ${({active}) => (active ? '#666666' : '#FFFFFF')};
  border: 1px solid ${({active}) => (active ? '#666666' : primaryColor)};
`;

export const Back = styled.span`
  position: absolute;
  top: 50%;
  left: 16px;
  transform: translate(0, -50%) rotate(180deg);
`;
