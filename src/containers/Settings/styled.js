import styled from 'styled-components';

export const Aside = styled.div`
  width: 300px;
`;

export const BackTo = styled.div`
  display: inline-flex;
  align-items: center;
  font-family: Helvetica Neue, sans-serif;
  font-weight: bold;
  font-size: 14px;
  line-height: 140%;
  color: #000;

  & svg {
    width: 6px;
    transform: rotate(180deg);
    margin-right: 16px;
  }
`;

export const MenuBar = styled.div`
  height: 787px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  margin-top: 21px;
`;

export const Heading = styled.span`
  display: block;
  font-family: Helvetica, sans-serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 132%;
  letter-spacing: -0.024em;
  color: #000000;
  padding: 17px 44px 0;
`;

export const EmailNotifications = styled.div`
  width: 600px;
  background: #ffffff;
  border: 1px solid #e4e4e4;
  box-sizing: border-box;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  margin-left: 32px;
`;

export const Header = styled.div`
  background: #e4e4e4;
  font-family: Helvetica, sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 140%;
  color: #000000;
  padding: 19px 44px;
`;

export const Content = styled.div`
  padding: 29px 44px 26px;
`;

export const Wrap = styled.div`
  display: ${({flexEnd}) => (flexEnd ? `flex` : 'block')};
  justify-content: flex-end;
  padding-bottom: 6px;
`;

export const NotificationsLabel = styled.label`
  display: flex;
  align-items: center;
  font-family: Helvetica, sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  color: #000000;
  padding-bottom: 16px;

  &::before {
    content: '';
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
    background: ${({active}) => (active ? `#000000` : 'transparent')};
    border-color: ${({active}) => (active ? `#000000` : '#464646')};
    border-width: 1.5px;
    border-style: solid;
    box-sizing: border-box;
    border-radius: 4px;
    margin-right: 14px;
    color: #ffffff;
  }
`;

export const Title = styled.span`
  display: block;
  font-family: Helvetica, sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 140%;
  color: #000000;
  padding-bottom: 16px;
`;

export const Buttons = styled.div`
  display: flex;
  margin-top: 22px;
`;

export const CancelBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 99px;
  height: 32px;
  background: transparent;
  border-radius: 24px;
  border: none;
  outline: none;
  cursor: pointer;
  font-family: Helvetica, sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  color: #333333;
  margin-right: 24px;
`;

export const SaveBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 99px;
  height: 32px;
  background: #ed484f;
  border-radius: 24px;
  border: none;
  outline: none;
  cursor: pointer;
  font-family: Helvetica, sans-serif;
  font-weight: 700;
  font-size: 14px;
  line-height: 140%;
  color: #ffffff;
`;

export const Addresses = styled.div`
  width: 600px;
  height: 832px;
  background: #ffffff;
  border: 1px solid #e4e4e4;
  box-sizing: border-box;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  margin-left: 32px;
`;

export const ContentWrap = styled.div`
  display: flex;
  margin-bottom: 16px;
`;

export const AddressesItem = styled.div`
  display: ${({center}) => (center ? `flex` : 'block')};
  align-items: center;
  justify-content: center;
  width: 50%;
  background: #ffffff;
  border: 1px solid #c3c3c3;
  border-radius: 3px;
  padding: 16px;

  &:first-child {
    margin-right: 17px;
  }

  &:hover {
    border: none;
    box-shadow: 0px 2px 25px rgba(0, 0, 0, 0.1);
  }
`;

export const AddressTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: Helvetica, sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 140%;
  color: #3a3a3a;
`;

export const AddressText = styled.span`
  display: block;
  font-family: Helvetica, sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 140%;
  color: #3a3a3a;
  padding-top: ${({main}) => (main ? `24px` : '0')};
`;

export const AddressAdd = styled.span`
  font-family: Helvetica, sans-serif;
  font-weight: 700;
  font-size: 14px;
  line-height: 140%;
  color: #464646;
`;

export const Signature = styled.span`
  display: block;
  font-family: Helvetica, sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 120%;
  color: #ea2c34;
`;

export const Settings = styled.div``;

export const SettingsBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;

  &::before {
    content: '';
    width: 5px;
    height: 5px;
    background: #7a7a7a;
    border-radius: 50%;
    margin-right: 3px;
  }

  &::after {
    content: '';
    width: 5px;
    height: 5px;
    background: #7a7a7a;
    border-radius: 50%;
    margin-left: 3px;
  }
`;

export const Dot = styled.div`
  width: 5px;
  height: 5px;
  background: #7a7a7a;
  border-radius: 50%;
`;
