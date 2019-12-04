import styled from 'styled-components';
import {Input, Select, Button} from 'antd';
import {primaryColor, headerSelectColor, headerSearchColor, mainBlackColor} from '../../../../constants/colors';

export const SearchContainer = styled.div`
  position: relative;
  display: flex;
  margin: 0 0 0 4.9%;
`;

export const Search = styled(Input)`
  &&& {
    width: 274px;
    height: 40px;
    background: ${headerSearchColor};
    border: none;
    border-radius: 4px 0 0 4px;
    &:focus {
      box-shadow: none;
    }
  }
`;

export const StyledSelect = styled(Select)`
  &&& {
    & .ant-select-selection--single {
      width: 100px;
      height: 40px;
      border: none;
      background: ${headerSelectColor};
      border-radius: 0;
      color: ${mainBlackColor};
    }

    & .ant-select-selection__rendered {
      height: 100%;
      line-height: 40px;
    }
  }
`;

export const Option = styled(Select.Option)``;

export const SearchButton = styled(Button)`
  &&& {
    min-width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    border: 0;
    background: ${primaryColor};
    border-radius: 0 4px 4px 0;
  }
`;

export const Result = styled.div`
  position: absolute;
  left: 0;
  top: calc(100% + 6px);
  width: 100%;
  z-index: 9999;
  transition: 0.3s;
  opacity: 0;

  &.autocomplete-enter-active {
    opacity: 1;
  }

  &.autocomplete-enter-done {
    opacity: 1;
  }

  &::before {
    content: '';
    position: absolute;
    top: 14px;
    right: -70vw;
    width: 200vw;
    height: 200vh;
    background: rgba(0, 0, 0, 0.4);
    z-index: -1;
  }
`;

export const ResultContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background: #fff;
  border-radius: 4px;
`;

export const Response = styled.div`
  margin: 0 0 24px 0;
  padding: 0 0 0 16px;
`;

export const ResponseTitle = styled.span`
  font-size: 12px;
  line-height: 16px;
  color: #7a7a7a;
  margin: 8px 0 0 0;
`;

export const ResultCategory = styled.div`
  margin: 0 0 24px 0;
`;

export const CategoryHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #c3c3c3;
  margin: 0;
  padding: 0 16px 8px 17.5px;
`;

export const CategoryHeading = styled.span`
  font-size: 14px;
  line-height: 20px;
  font-weight: 700;
  margin: 0;
  color: #000;
`;

export const ViewAll = styled.a`
  font-size: 14px;
  line-height: 20px;
  color: #000;
`;

export const CategoryItem = styled.div`
  display: flex;
  align-items: center;
  padding: 0 17.5px 0 16px;
  margin: 16px 0 0 0;
`;

export const ItemPic = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
`;

export const ItemDescription = styled.div`
  margin: 0 0 0 16px;
`;

export const ItemName = styled.span`
  display: block;
`;

export const ItemTitle = styled.span`
  display: block;
`;

export const ItemRating = styled.span``;

export const ItemFollow = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 99px;
  height: 28px;
  background: transparent;
  font-size: 14px;
  line-height: 20px;
  color: #ed484f;
  border: 1px solid #ed484f;
  text-decoration: none;
  border-radius: 24px;
  margin: 0 0 0 auto;

  &::before {
    content: '+';
    color: #ed484f;
    margin-right: 10px;
  }
`;

export const ItemView = styled(ItemFollow)`
  color: #545454;
  border: 1px solid #c3c3c3;

  &::before {
    content: none;
  }
`;

export const ItemFrom = styled.a`
  display: inline-block;
  text-decoration: none;
  font-size: 14px;
  line-height: 20px;
  color: #ed484f;
  margin: 0 0 0 auto;
`;
