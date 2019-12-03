import styled from 'styled-components';
import {Form, Button} from 'antd';
import media from '../../../constants/media';

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
    padding: 30px 0 80px;
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
  max-width: 200px;
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
  max-width: 280px;

  @media (max-width: ${media.mobileMax}) {
    margin-top: 12px;
  }
`;

export const FieldsWrap = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  padding: 0 22px;
  margin-top: 26px;
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
