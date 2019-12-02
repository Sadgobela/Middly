import styled from 'styled-components';
import {Form, Input} from 'antd';
// TODO move to assets all icons
import eye from './img/eye.svg';
import cancel from './img/cancel.svg';

export const FormItem = styled(Form.Item)`
  &&& {
    width: 100%;

    &:nth-child(1) {
      margin-bottom: 28px;
    }

    & .ant-form-item-label {
      line-height: 20px;
      margin-bottom: 8px;
    }

    & .ant-form-explain {
      font-size: 12px;
      line-height: 16px;
      margin: 2px 0 0 0;
    }

    & label {
      font-weight: bold;
      font-size: 14px;
      line-height: 20px;
      color: #464646;

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
  }
`;

export const EyeIcon = styled.i`
  display: block;
  width: 20px;
  height: 20px;
  background: url(${({type}) => (type === 'password' ? eye : cancel)}) no-repeat center;
  background-size: contain;
  cursor: pointer;
`;
