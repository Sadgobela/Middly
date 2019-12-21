import styled from 'styled-components';
import {Select} from 'antd';

export const Field = styled(Select)`
  &&& {
    & .ant-select-selection--single {
      width: 372px;
      height: 40px;
    }

    & .ant-select-selection__rendered {
      line-height: 40px;
      font-family: Helvetica Neue, sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      letter-spacing: -0.016em;
      color: #000;
    }
  }
`;

export const Label = styled.label``;
