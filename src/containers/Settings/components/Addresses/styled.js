import styled from 'styled-components';

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

export const AddressesItem = styled.div`
  position: relative;
  width: 268px;
  height: 158px;
  background: #fff;
  box-shadow: inset 0 0 0 1px #c3c3c3;
  border-radius: 3px;
  padding: 16px;
  ${({margin}) => (margin ? `margin: ${margin}` : null)};

  &:hover {
    border: none;
    box-shadow: 0px 2px 25px rgba(0, 0, 0, 0.1);
  }
`;

export const AddNewAddress = styled(AddressesItem)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
  margin: 20px 0 0 0;
`;

export const Primary = styled.span`
  display: block;
  font-family: Helvetica, sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 120%;
  color: #ea2c34;
`;

export const Type = styled.div`
  margin: 0 0 0 16px;
`;

export const SettingsBtn = styled.button`
  position: relative;
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

export const Settings = styled.div`
  position: absolute;
  top: 50px;
  right: 20px;
  padding: 16px 24px;
  background: #fff;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2), 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 3px;
`;

export const Select = styled.button`
  display: flex;
  font-family: Helvetica Neue, sans-serif;
  font-size: 14px;
  line-height: 140%;
  color: #000;
  background: transparent;
  border: none;
  outline: none;
  white-space: nowrap;
  text-align: left;
  padding: 0;
  margin: 0 0 12px 0;
  cursor: pointer;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const Edit = styled(Select)``;

export const Delete = styled(Select)``;
