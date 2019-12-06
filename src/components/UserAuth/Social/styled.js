import styled from 'styled-components';
import {Button} from 'antd';
import google from '../SignIn/img/google.svg';
import facebook from '../SignIn/img/facebook.svg';

export const SocialName = styled.i`
  font-size: inherit;
  font-weight: 700;
  color: ${({color}) => color};
  margin-left: 4px;
  font-style: normal;
`;

export const WithGoogle = styled(Button)`
  &&& {
    position: relative;
    width: 266px;
    height: 48px;
    border-color: #3d82f0;
    border-radius: 4px;
    margin: 0 0 0 8px;

    &::before {
      display: block;
      content: '';
      position: absolute;
      top: 50%;
      right: auto;
      bottom: auto;
      left: 10px;
      width: 28px;
      height: 24px;
      background: url(${google}) no-repeat center;
      background-size: contain;
      opacity: 1;
      transform: translateY(-50%);
    }
  }
`;

export const WithFacebook = styled(WithGoogle)`
  &&& {
    margin-top: 16px;
    &::before {
      left: 14px;
      width: 20px;
      height: 20px;
      background: url(${facebook}) no-repeat center;
      background-size: contain;
    }
  }
`;
