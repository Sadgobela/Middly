import styled from 'styled-components';
import {Input, Select, Button} from 'antd';
import {primaryColor, headerSelectColor, headerSearchColor, mainBlackColor} from '../../../../constants/colors';

export const SearchContainer = styled.div`
  position: relative;
  display: flex;
  margin: 0 24px 0 4.9%;
  z-index: 999;
  max-width: 407px;
  flex-grow: 1;
`;

export const CloseOverlay = styled.div`
  display: ${({overlay}) => (overlay ? 'block' : 'none')};
  position: absolute;
  top: calc(100% + 16px);
  right: -70vw;
  width: 200vw;
  height: 200vh;
  background: rgba(0, 0, 0, 0.4);
  z-index: -1;
`;

export const SearchPopup = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;

  & .autocomplete-enter-active {
    opacity: 1;
  }

  & .autocomplete-enter-done {
    opacity: 1;
  }
`;

export const Search = styled(Input)`
  &&& {
    caret-color: #ed484f;
    height: 40px;
    background: ${headerSearchColor};
    border: none;
    font-size: 14px;
    line-height: 20px;
    border-radius: 4px 0 0 4px;
    outline: none;
    box-shadow: none;
    width: 100%;
    max-width: 267px;

    & .ant-input {
      outline: none;
      border: none;
      box-shadow: none;

      @media (max-width: 767px) {
        padding-left: 46px;
        background: #efefef;
        border: none;
      }

      &:focus {
        outline: none;
        box-shadow: none;
        border: none;
      }
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

    & .ant-select-selection-selected-value {
      font-size: 14px;
      font-weight: 500;
    }

    & .ant-select-selection__rendered {
      height: 100%;
      line-height: 40px;
      margin-left: 16px;
    }

    & .ant-select-arrow {
      top: 47%;
      right: 16px;
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
  display: block;
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
  font-size: 14px;
  line-height: 20px;
  color: #000000;
`;

export const ItemTitle = styled.span`
  display: block;
  font-size: 12px;
  line-height: 16px;
  color: #7a7a7a;
  margin-top: 4px;
`;

export const ItemRating = styled.span`
  font-size: 12px;
  line-height: 16px;
  color: #464646;
`;

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

export const TabList = styled.div`
  display: flex;
  margin-bottom: 16px;
`;

export const Tab = styled.button`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  flex-basis: 25%;
  height: 40px;
  margin: 0 8px 0 0;
  font-size: 14px;
  line-height: 17px;
  font-weight: ${({active}) => (active ? 700 : 400)};
  background: transparent;
  border: none;
  &:last-child {
    margin-right: 0;
  }

  &::after {
    content: '';
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    height: 2px;
    background: ${({active}) => (active ? '#ED484F' : '#EFEFEF')};
    border-radius: 10px;
  }
`;

export const SearchCancel = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin: 0 9px 0 16px;
  color: #ed484f;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  background: transparent;
  border: none;
  outline: none;
`;

export const SearchInputWrap = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const ProductItem = styled.div`
  display: flex;
  align-items: center;
  height: 90px;
  border: 1px solid #efefef;
  border-radius: 4px;
  margin: 0 16px 8px;
  &:last-child {
    margin-bottom: 0;
  }
`;

export const ProductItemDescription = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProductItemPic = styled.img`
  display: block;
  max-width: 100%;
  width: 90px;
  height: 90px;
  margin: 0 16px 0 0;
  border-radius: 4px;
`;

export const RecentlySearch = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  left: 0;
  background: #fff;
  z-index: 1;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  padding: 8px 0 12px 0;
  transition: 0.3s;
  opacity: 0;
`;

export const RecentlyHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
`;

export const RecentTitle = styled.span`
  font-size: 14px;
  line-height: 20px;
  color: #000;
`;

export const RecentlyList = styled.div`
  & svg {
    transform: rotate(45deg);
    margin-left: auto;
    width: 16px;
    height: 16px;
  }
`;

export const RecentlyItem = styled.div`
  display: flex;
  align-items: center;
  font-family: Helvetica Neue, sans-serif;
  font-size: 12px;
  line-height: 16px;
  padding: 0 12px 0 16px;
  margin: 16px 0 0 0;
  color: #000;
  cursor: pointer;
`;

export const ClearRecently = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  color: #000;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  background: transparent;
  border: none;
  outline: none;
  text-decoration: underline;
  padding: 0;
`;
