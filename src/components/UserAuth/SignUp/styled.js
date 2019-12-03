import styled from 'styled-components';
import {Form, Input, Button, Checkbox} from 'antd';
import {Link} from 'react-router-dom';
import media from '../../../constants/media';
import google from './img/google.svg';
import facebook from './img/facebook.svg';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background: rgba(0, 0, 0, 0.4);
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
    padding: 47px 0 40px;
    margin: 48px 0;

    @media (max-width: ${media.mobileMax}) {
      width: 100%;
      margin: 64px 0 0 0;
      padding: 32px 0 60px;
      min-height: 100vh;
    }
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
  margin: 0 auto;

  @media (max-width: ${media.mobileMax}) {
    font-size: 22px;
    line-height: 27px;
  }
`;

export const Title = styled.span`
  display: block;
  margin: 26px auto 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  color: #464646;

  @media (max-width: ${media.mobileMax}) {
    margin-top: 12px;
  }
`;

export const LinkTo = styled(Link)`
  display: inline-block;
  color: #4a90e2;
  margin: 0;
  white-space: nowrap;

  @media (max-width: ${media.mobileMax}) {
    display: ${({block}) => (block ? 'block' : 'inline-block')};
  }
`;

export const Agreement = styled.span`
  position: relative;
  display: block;
  max-width: 290px;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  color: #464646;
  top: -2px;
  padding-left: 4px;
`;

export const FieldsWrap = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 0 22px;
  margin-top: 26px;
`;

export const SocialName = styled.i`
  font-size: inherit;
  font-weight: 700;
  color: ${({color}) => color};
  margin-left: 4px;
  font-style: normal;
`;

export const Line = styled.i`
  width: 100%;
  height: 1px;
  background: #e4e4e4;
  margin: 28px 0;
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
      color: #ed484f;
      ${({checkbox}) => (checkbox ? 'margin-left: 29px' : null)}
    }

    &.ant-form-item-with-help .ant-checkbox-inner {
      border-color: #ed484f;
    }

    & label {
      font-weight: bold;
      font-size: 14px;
      line-height: 20px;
      color: #464646;

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

export const Checked = styled(Checkbox)`
  &&& {
    display: flex;
    align-items: flex-start;
    &::after {
      display: none !important;
    }
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
    margin-top: 22px;
    &::before {
      left: 14px;
      width: 20px;
      height: 20px;
      background: url(${facebook}) no-repeat center;
      background-size: contain;
    }
  }
`;
