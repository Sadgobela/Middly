import React, {useState}  from 'react';
import { CSSTransition } from 'react-transition-group';
import {
	Search,
	SearchContainer,
	Result,
	ResultContainer,
	Response,
	ResponseTitle,
	TabList,
	Tab,
	RecentlyList,
	ClearRecently,
	RecentlyHeader,
	SearchInputWrap,
	SearchCancel,
	RecentlyItem,
	ProductItem,
	ProductItemPic,
	ProductItemDescription,
} from './styled';
import Badges from '../../../../components/Badges';
import SearchIcon from 'assets/Search';
import RecentlyLink from 'assets/ArrowLeft';
import productPic from './img/productPic.png';

const category = ['Products', 'Stores', 'Posts', 'Lists'];

const SearchInputMobile = ({ getItem, closeHandler, isShow, open }) => {
	const [isSearch, setSearchState] = useState(false);

	return (
		<>
			<Badges action={ ()=> setSearchState(!isSearch) } name='search' />

			<CSSTransition
				in={isSearch}
				timeout={300}
				classNames={'autocomplete'}
				unmountOnExit
			>
				<SearchContainer>
					<SearchInputWrap style={{display: 'flex'}}>
						<Search autoFocus className='site-search' prefix={<SearchIcon color='#999' />} placeholder="Search" onInput={ () => open(true) } />
						<SearchCancel>Cancel</SearchCancel>
					</SearchInputWrap>

					<Response>
						<RecentlyHeader>
							<ResponseTitle>Recently search</ResponseTitle>
							<ClearRecently>Clear</ClearRecently>
						</RecentlyHeader>

						<RecentlyList>
							<RecentlyItem>
								Boots
								<RecentlyLink />
							</RecentlyItem>
							<RecentlyItem>
								Fashion Trends
								<RecentlyLink />
							</RecentlyItem>
							<RecentlyItem>
								Denim Jeans
								<RecentlyLink />
							</RecentlyItem>
						</RecentlyList>

					</Response>
					{
						<CSSTransition
							in={isShow}
							timeout={300}
							classNames={'autocomplete'}
							unmountOnExit
						>
							<>
								{closeHandler()}
								<Result>
									<ResultContainer className="search-result-container">
										<TabList>
											{category.map( (item, i) => <Tab active={!i} >{item}</Tab>)}
										</TabList>
										{
											category.map(()=>
												<ProductItem>
													<ProductItemPic src={productPic} />
													<ProductItemDescription>
														<span>White X Jacket</span>
														<span>$345</span>
														<span>21 in stock</span>
													</ProductItemDescription>
												</ProductItem>)
										}
									</ResultContainer>
								</Result>
							</>

						</CSSTransition>
					}
				</SearchContainer>
			</CSSTransition>
		</>
	)
};

export default SearchInputMobile;
