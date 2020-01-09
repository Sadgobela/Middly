import styled from 'styled-components';
import { Tabs } from 'antd';

export const Title = styled.span`
  font-family: Helvetica Neue, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 140%;
  text-align: right;
  color: #464646;
  margin-right: 8px;
  color: #000000;
`;

export const TabList = styled.div`
  display: flex;
  padding-bottom: 10px;
`;

export const BreadcrumbsContainer = styled.div`
  margin: 0 auto;
  padding: 0 130px;
  max-width: 1440px;
  height: 80px;
  background: #fff;
  display: flex;
  > div {
    line-height: 14%;
    display: flex;
    margin: 0;
  }
`;

export const Row = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 120px;
`;

export const GreyColoredDiv = styled.div`
  background: #FAFAFA;
`;

export const SearchAndCategoryWrapper = styled.div`
  margin: 0 auto;
  max-width: 1440px;
  background: #FAFAFA;
  padding: 0 120px
`;

export const SearchParam = styled.span`
  font-weight: normal;
  font-size: 24px;
`;

export const Categories = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 40px;
`;


export const StyledTabs = styled(Tabs)`
  width: 100%;
  .ant-tabs-ink-bar {
    background-color: #000;
  }
  .ant-tabs-nav .ant-tabs-tab:active,
  .ant-tabs-nav .ant-tabs-tab:hover,
  .ant-tabs-nav .ant-tabs-tab-active {
    color: #000;    
  }
  .ant-tabs-nav-wrap {
    background: #FBFBFB;
    padding-top: 22px
  }
  .ant-tabs-nav-scroll {
    margin: 0 auto;
    padding: 0 122px;
    max-width: 1440px;
  }
  .ant-tabs-nav .ant-tabs-tab {
    padding: 12px 0;
  }
`;

export const OnDemandDelivery = styled.div`
  button {
    &.ant-switch-checked {
        background-color: #398287;
      }
  }
`;
