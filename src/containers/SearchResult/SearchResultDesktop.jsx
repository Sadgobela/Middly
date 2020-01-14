import React, {useState} from 'react';
import Breadcrumbs from 'components/Breadcrumbs';
import ListHeading from 'components/ListHeading';
import {Switch} from 'antd';
import DeliveryPopUp from './components/DeliveryPopUp';
import {
  Title,
  TabList,
  BreadcrumbsContainer,
  SearchAndCategoryWrapper,
  GreyColoredDiv,
  SearchParam,
  Categories,
  StyledTabs,
  OnDemandDelivery
} from './styled';
import ProductSearch from './ProductSearch';
import PostSearch from './PostSearch';

const headingStyles = `
  padding: 16px 0;
  span {
    font-weight: normal ; 
    font-size: 16px ;
    color: #656565;
  }
`;

const {TabPane} = StyledTabs;

const SearchResultDesktop = () => {
  const [activeTab, setActiveTab] = useState('1');
  const [demandDelivery, setDemandDelivery] = useState(true);

  return (
    <div>
      <GreyColoredDiv>
        <SearchAndCategoryWrapper>
          <ListHeading
            heading={
              <>
                Search Results:
                <SearchParam> fashion</SearchParam>
              </>
            }
            customStyles={headingStyles}
          >
            {activeTab === '1' ? (
              <OnDemandDelivery>
                <Title>On-Demand Delivery</Title>
                <Switch size="small" checked={demandDelivery} onChange={() => setDemandDelivery(!demandDelivery)} />
                {demandDelivery && <DeliveryPopUp />}
              </OnDemandDelivery>
            ) : null}
          </ListHeading>
        </SearchAndCategoryWrapper>
      </GreyColoredDiv>
      <TabList>
        <StyledTabs defaultActiveKey="1" activeKey={activeTab} onChange={setActiveTab}>
          <TabPane tab="Products" key="1">
            <ProductSearch />
          </TabPane>
          <TabPane tab="Stories" key="2">
            Stories
          </TabPane>
          <TabPane tab="Posts" key="3">
            <PostSearch />
          </TabPane>
          <TabPane tab="Lists" key="4">
            Lists
          </TabPane>
        </StyledTabs>
      </TabList>
    </div>
  );
};

export default SearchResultDesktop;
