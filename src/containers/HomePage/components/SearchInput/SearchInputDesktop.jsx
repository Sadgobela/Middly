import React, {useState}  from 'react';
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
	SearchPopup,
	CloseOverlay,
} from './styled';
import RecentlyLink from 'assets/ArrowLeft';

const category = ['Products', 'Stores', 'Posts'];
const response = ['Rings', 'Reunion', 'Room Dividers & Shelvinh'];
const recent = ['Boots', 'Chanel Bags', 'Fashion'];

const SearchInputDesktop = ({ getCategory, isShow, open, isFocus, hint }) => {
	const [inputValue, setInputValue] = useState(null);

	function highlightQuery(response) {
		setTimeout(()=>{
			const titles = document.querySelectorAll('.response-title');
			const titlesValues = [...titles].map(item => item.innerText);
			titles.forEach( (title, i) =>{
				let value = titlesValues[i].split('');
				if(value[0].toLowerCase() === response.toLowerCase()){
					value[0] = `<b style="color: #000">${value[0]}</b>`;
					title.innerHTML = value.join().replace( /,/gi,'');
				}
			});
		}, 100);
	}

	function setValue(ev) {
		if(ev.type === 'focus'){
			if(ev.target.value.length){
				open(true);
			}
			hint(true);
			return;
		}
		const value = ev.target.innerText || ev.target.value;
		setInputValue(value);
		ev.target.innerText.length || ev.target.value.length ? open(true) : open(false);
		highlightQuery(ev.target.value || ev.target.innerText);
	}

	function closeHint(ev) {
		const t = ev.target;
		setTimeout(()=>{
			if(!t.value.length){
				hint(false)
			}
		}, 100);
	}

	return (
		<SearchContainer>
			<CloseOverlay className='close-search-popup' overlay={isShow || isFocus} />
			<Search
					value={inputValue}
					placeholder="Thirts, Shoes"
					onInput={ ev => setValue(ev) }
					onFocus={ ev => setValue(ev) }
					onBlur={ ev => closeHint(ev) }
			/>
			<StyledSelect value="Brands">
				<Option value="Brands">Brands</Option>
				<Option value="Brands">Brands</Option>
			</StyledSelect>
			<SearchButton>
				<SearchIcon />
			</SearchButton>
			<SearchPopup>
				{
					<CSSTransition
						in={isFocus}
						timeout={300}
						classNames={'autocomplete'}
						unmountOnExit
					>
						<RecentlySearch>
							<RecentlyHeader>
								<RecentTitle>Recent Searches</RecentTitle>
								<ClearRecently>Clear</ClearRecently>
							</RecentlyHeader>
							<RecentlyList>
								{
									recent.map(item =>
										<RecentlyItem onClick={ ev => setValue(ev)}>
											{item}
											<RecentlyLink />
										</RecentlyItem>
									)
								}
							</RecentlyList>
						</RecentlySearch>
					</CSSTransition>
				}
				{
					<CSSTransition
						in={isShow}
						timeout={300}
						classNames={'autocomplete'}
						unmountOnExit
					>
						<>
							<Result>
								<ResultContainer>
									<Response>
										{
											response.map( item =>
												<ResponseTitle className='response-title'>{item}</ResponseTitle>
											)
										}
									</Response>
									{
										getCategory(category)
									}
								</ResultContainer>
							</Result>
						</>

					</CSSTransition>
				}
			</SearchPopup>

		</SearchContainer>
	)
};

export default SearchInputDesktop;
