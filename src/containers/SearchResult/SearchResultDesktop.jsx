import React, {useState} from 'react';
import {
	Title,
	TabList,
	BreadcrumbsContainer,
	SearchAndCategoryWrapper,
	GreyColoredDiv,
	SearchParam,
	Categories,
	StyledTabs,
	OnDemandDelivery,
} from './styled';
import Breadcrumbs from 'components/Breadcrumbs';
import ListHeading from 'components/ListHeading';
import ProductSearch from "./ProductSearch";
import PostSearch from "./PostSearch";
import { Switch } from 'antd';

const { TabPane } = StyledTabs;

const locations = ['Home', 'Categories', 'Clothing'];

const SearchResultDesktop = ()=> {
	const [activeTab, setActiveTab] = useState("1");

	return (
		<div>
			<BreadcrumbsContainer>
				<Breadcrumbs locations={locations} isSearchPage={true}/>
			</BreadcrumbsContainer>
			<GreyColoredDiv>
				<SearchAndCategoryWrapper>
					<ListHeading heading={<div>Search Results: <SearchParam>fashion</SearchParam></div>} customStyles='padding-top: 10px'>
						{
							activeTab === "1" ? (
								<OnDemandDelivery>
									<Title>On-Demand Delivery</Title>
									<Switch size="small" defaultChecked onChange={() => {}} />
								</OnDemandDelivery>
							) : null
						}
					</ListHeading>
				</SearchAndCategoryWrapper>
			</GreyColoredDiv>
			<TabList>
				<StyledTabs defaultActiveKey="1" activeKey={activeTab} onChange={setActiveTab}>
					<TabPane tab="Products (2,780)" key="1">
						<ProductSearch />
					</TabPane>
					<TabPane tab="Stories (2,786)" key="2">
						Stories
					</TabPane>
					<TabPane tab="Posts (5,678)" key="3">
						<PostSearch />
					</TabPane>
					<TabPane tab="Lists (2,345)" key="4">
						Lists
					</TabPane>
				</StyledTabs>
			</TabList>
		</div>
	)
};

export default SearchResultDesktop;
