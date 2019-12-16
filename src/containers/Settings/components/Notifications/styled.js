import styled from 'styled-components';

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
    background: ${({active}) => (active ? `#000` : 'transparent')};
    border-color: ${({active}) => (active ? `#000` : '#464646')};
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
  color: #333;
  margin: 0 24px 0 auto;
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
