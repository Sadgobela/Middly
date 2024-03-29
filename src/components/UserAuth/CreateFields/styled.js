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

    &.ant-form-item-with-help .ant-input-suffix:valid {
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
        margin-bottom: 0;
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
      box-shadow: none;
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

export const CheckUsername = styled.i`
  &.username-field {
    display: none;
  }

  &.validUsername {
    display: block;
  }
`;

export const EyeIcon = styled.i`
  position: relative;
  display: block;
  width: 24px;
  height: 24px;
  background: url(${({type}) => (type === 'password' ? eye : cancel)}) no-repeat center;
  background-size: contain;
  cursor: pointer;

  &::before {
    ${({type}) => (type === 'password' ? 'content: ""' : null)};
    position: absolute;
    top: 50%;
    left: 0;
    height: 30px;
    width: 2px;
    background: #8f8f8f;
    border-radius: 2px;
    transform: translate(11px, -50%) rotate(-45deg);
  }

  &.suffix-showPassword {
    &::before {
      content: none;
    }
  }
`;
