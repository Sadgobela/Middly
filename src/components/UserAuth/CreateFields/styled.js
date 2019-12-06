import styled from 'styled-components';
import {Form, Input} from 'antd';
import media from '../../../constants/media';
// TODO move to assets all icons
import eye from './img/eye.svg';
import cancel from './img/cancel.svg';

export const FormItem = styled(Form.Item)`
  &&& {
    width: ${({width}) => (width ? `${width}px` : '100%')};
    margin-bottom: ${({last}) => (last ? '12px' : '28px')};

    @media (max-width: ${media.mobileMax}) {
      margin-bottom: 16px;
    }

    @media (max-width: ${media.mobileMax}) {
      width: 100%;
    }

    & .ant-form-item-label {
      line-height: 20px;
    }

    & .ant-form-explain {
      font-size: 12px;
      line-height: 16px;
      margin: 2px 0 0 0;
    }

    &.ant-form-item-with-help .ant-input-suffix {
      opacity: 1 !important;
    }

    & label {
      display: block;
      font-weight: bold;
      font-size: 14px;
      line-height: 20px;
      color: #464646;
      margin-bottom: 8px;

      @media (max-width: ${media.mobileMax}) {
        font-weight: 400;
        line-height: 17px;
      }

      &::before {
        content: none;
      }

      &::after {
        display: inline-block;
        margin-right: 4px;
        color: #ed484f;
        font-size: 14px;
        line-height: 1;
        content: '*';
      }
    }
  }
`;

export const Field = styled(Input)`
  &&& {
    height: 40px;
    border-radius: 2px;
    //border-color: #C3C3C3;

    & .ant-input {
      border-radius: 2px;
    }

    & .ant-input-suffix {
      opacity: 0;
    }

    & input:focus ~ .ant-input-suffix {
      opacity: 1;
    }
  }
`;

export const EyeIcon = styled.i`
  position: relative;
  display: block;
  width: ${({type}) => (type === 'password' ? '16px' : '20px')};
  height: ${({type}) => (type === 'password' ? '12px' : '20px')};
  background: url(${({type}) => (type === 'password' ? eye : cancel)}) no-repeat center;
  background-size: cover;
  cursor: pointer;

  &.suffix-showPassword {
    &::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 0;
      height: 30px;
      width: 2px;
      background: #8f8f8f;
      border-radius: 2px;
      transform: translate(7px, -50%) rotate(-45deg);
    }
  }
`;
