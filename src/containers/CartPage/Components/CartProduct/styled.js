import styled from 'styled-components';
import {Select} from 'antd';

export const Card = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  border-bottom: ${({last}) => (last ? 'none' : '1px solid #E4E4E4')};
  padding: 16px 0;
  margin: 0 24px;
`;

export const Preview = styled.img`
  display: block;
  max-width: 100%;
  margin: 0 16px 0 0;
`;

export const Price = styled.span`
  font-family: Helvetica Neue, sans-serif;
  font-size: 16px;
  line-height: 140%;
  letter-spacing: -0.016em;
  color: #000000;
`;

export const OldPrice = styled(Price)`
  font-size: 12px;
  color: #a7a7a7;
  margin: 0 12px 0 4px;
`;

export const Sale = styled.span`
  font-family: Helvetica Neue, sans-serif;
  font-weight: 700;
  font-size: 14px;
  line-height: 140%;
  color: #ed494f;
`;

export const Name = styled.span`
  margin: 12px 0 16px 0;
`;

export const Size = styled.span`
  width: 100px;
  height: 24px;
  font-family: Helvetica Neue, sans-serif;
  font-size: 14px;
  line-height: 140%;
  color: #000;
`;

export const StyledSelect = styled(Select)`
  &&& {
    margin: 0;
    & .ant-select-selection--single {
      width: 100px;
      height: 24px;
      border: none;
      border-left: 1px solid #e4e4e4;
      border-radius: 0;
    }

    & .ant-select-selection__rendered {
      font-family: Helvetica Neue, sans-serif;
      font-size: 14px;
      line-height: 140%;
      color: #000;
    }
  }
`;

export const Color = styled(StyledSelect)`
  margin-right: 12px;
`;

export const Count = styled(StyledSelect)``;

export const MidCoins = styled.span`
  display: inline-flex;
  align-items: center;
  font-family: SF Pro Display, sans-serif;
  font-size: 12px;
  line-height: 132%;
  color: #398287;
  margin: 0 16px 0 0;

  & svg {
    margin: 0 0 4px 4px;
  }
`;

export const ShopCoins = styled(MidCoins)``;

export const Actions = styled.div`
  display: flex;
  & i {
    &:first-child {
      margin-right: 16px;
    }
  }
`;
