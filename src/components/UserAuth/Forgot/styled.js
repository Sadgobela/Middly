import styled from 'styled-components';
import {Form, Input, Button} from 'antd';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
  overflow: auto;
`;

export const SignForm = styled(Form)`
  &&& {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 404px;
    background: #fff;
    box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.07);
    border-radius: 4px;
    padding: 30px 0 80px;
    margin: 48px 0;
  }
`;

export const Heading = styled.span`
  display: block;
  font-weight: 700;
  font-size: 34px;
  line-height: 43px;
  text-align: center;
  letter-spacing: 0.011em;
  color: #000;
  max-width: 200px;
  margin: 0 auto;
`;

export const Title = styled.span`
  display: block;
  margin: 26px auto 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  color: #464646;
  max-width: 280px;
`;

export const FieldsWrap = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  padding: 0 22px;
  margin-top: 26px;
`;

export const FormItem = styled(Form.Item)`
  &&& {
    width: 100%;
    margin-bottom: 28px;

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

export const Submit = styled(Button)`
  &&& {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 160px;
    height: 36px;
    background: #ed484f;
    border-radius: 24px;
    font-weight: bold;
    font-size: 14px;
    line-height: 140%;
    border: none;
  }
`;
