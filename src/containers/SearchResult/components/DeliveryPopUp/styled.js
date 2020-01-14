import styled from 'styled-components';
import {Button} from 'antd';

export const DeliveryPopUpContainer = styled.div`
  h4 {
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
  }
  p {
    margin-bottom: 7px;
  }
  .ant-select {
    margin-bottom: 20px;
  }
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  position: absolute;
  width: 272px;
  height: 386px;
  z-index: 999;
  background-color: #fff;
  padding: 24px 16px 20px;
`;

export const ButtonContainer = styled.div`
  margin: 20px 0;
  text-align: center;
  button {
    margin: 0 10px;
  }
`;

export const CancelButton = styled(Button)`
  color: #333333;
`;

export const SaveButton = styled(Button)`
  border-radius: 24px !important;
  padding: 5px 30px !important;
  span {
    font-size: 14px;
    color: #fff;
  }
`;
