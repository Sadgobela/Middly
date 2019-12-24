import styled from 'styled-components';
import {primaryColor} from 'constants/colors';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 40px -5px 0;
`;

export const Button = styled.button`
  margin: 0 5px;
  background: #fff;
  border: 1px solid ${primaryColor};
  border-radius: 24px;
  height: 40px;
  width: 100%;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 30px;
  padding: 0;
  outline: none;
  text-align: center;
  color: ${primaryColor};

  ${({type}) => {
    if (type === 'primary') {
      return `
        background: ${primaryColor};
        color: #fff;
      `;
    }
  }}
`;

export const PopupWrapper = styled.div`
  position: fixed;
  top: ${({active}) => (active ? '0px' : '-64px')};
  left: 0;
  right: 0;
  height: 64px;
  background: #65c97a;
  display: flex;
  align-items: center;
  padding: 13px 26px;
  transition: all 0.3s ease;
`;
