import React  from 'react';
import { CSSTransition } from 'react-transition-group';
import SearchIcon from 'assets/SearchIcon';
import {
	Search,
	SearchButton,
	StyledSelect,
	SearchContainer,
	Option,
	Result,
	ResultContainer,
	Response,
	ResponseTitle,
	RecentlySearch,
	RecentlyList,
	ClearRecently,
	RecentlyHeader,
	RecentTitle,
	RecentlyItem,
} from './styled';
import RecentlyLink from 'assets/ArrowLeft';

const category = ['Products', 'Stores', 'Posts'];

const SearchInputDesktop = ({ getCategory, closeHandler, isShow, open }) => {

	return (
		<SearchContainer>
			<RecentlySearch>
				<RecentlyHeader>
					<RecentTitle>Recent Searches</RecentTitle>
					<ClearRecently>Clear</ClearRecently>
				</RecentlyHeader>
				<RecentlyList>
					<RecentlyItem>
						Boots
						<RecentlyLink />
					</RecentlyItem>
				</RecentlyList>
			</RecentlySearch>

			<Search placeholder="Thirts, Shoes" onInput={ open } />
			<StyledSelect value="Brands">
				<Option value="Brands">Brands</Option>
				<Option value="Brands">Brands</Option>
			</StyledSelect>
			<SearchButton>
				<SearchIcon />
			</SearchButton>
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
								<Response>
									<ResponseTitle>Response Title</ResponseTitle>
								</Response>
								{
									getCategory(category)
								}
							</ResultContainer>
						</Result>
					</>

				</CSSTransition>
			}
		</SearchContainer>
	)
};

export default SearchInputDesktop;
