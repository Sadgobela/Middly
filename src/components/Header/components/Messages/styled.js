import styled from 'styled-components';

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
  transition: all 0.15s linear;
  user-select: none;
  pointer-events: ${({active}) => (active ? 'all' : 'none')};
  transform: ${({active}) => (active ? 'translate(0, 0)' : 'translate(100%, 0)')};
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
  position: relative;
`;

export const Message = styled.div`
  padding: 16px;
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  max-width: 100%;

  &:not(:first-child) {
    border-top: 1px solid #efefef;
  }

  ${({notTop}) => {
    if (notTop) {
      return `
        border-top: 0 !important;
      `;
    }
  }}
`;

export const MessageAvatarContainer = styled.div`
  width: 48px;
  height: 48px;
  position: relative;
`;

export const MessageAvatar = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%:
  object-fit: cover;
`;

export const MessageOnline = styled.span`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 12px;
  height: 12px;
  box-shadow: inset 0 0 0 2px #fff;
  background: #26a95e;
  border-radius: 50%;
`;

export const MessageContent = styled.div`
  width: calc(100% - 48px);
  padding-left: 12px;
  position: relative;
`;

export const MessageName = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 140%;
  color: #000000;
  margin-bottom: 4px;
`;

export const MessageText = styled.span`
  display: inline-block;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  color: #666666;
  white-space: nowrap;
  position: relative;
  overflow: hidden;
  text-overflow: ellipsis;
  width: ${({small}) => (small ? 'calc(100% - 32px)' : '100%')};
`;

export const MessageDate = styled.span`
  position: absolute;
  top: 8px;
  right: 16px;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  text-align: right;
  color: ${textGray};
`;

export const MessageCount = styled.span`
  min-width: 16px;
  padding: 0 5px;
  height: 16px;
  border-radius: 10px;
  background: ${primaryColor};
  font-size: 12px;
  line-height: 16px;
  text-align: center;
  color: #ffffff;
  position: absolute;
  bottom: 7px;
  right: 0;
`;

export const Back = styled.span`
  position: absolute;
  top: 50%;
  left: 16px;
  transform: translate(0, -50%) rotate(180deg);
`;

export const SearchContainer = styled.div`
  position: relative;
  margin: 16px;
  width: 100%;
  max-width: calc(100% - 32px);

  svg {
    position: absolute;
    left: 18px;
    top: 50%;
    transform: translate(0, -50%);
  }
`;

export const Search = styled.input`
  background: #efefef;
  width: 100%;
  height: 40px;
  border-radius: 4px;
  border: 0;
  padding: 0 16px 0 50px;
  outline: none;
  color: #000;

  &:placeholder {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    color: #999999;
  }
`;
