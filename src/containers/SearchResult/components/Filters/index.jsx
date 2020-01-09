import React, { useState } from 'react';
import {
	Container,
	Title,
	Filter,
	FilterOption,
	SelectedFilter,
	Clear,
	AppliedFilters,
	PostSearchFilters,
	GetPostFilters
} from './styled';
import Grid from 'components/Grid';
import { Col, Row } from 'antd';
import CustomSelect from "../../../../components/Select";
import {colorData, sizeData} from "./exampleData";

const filters = ['Location', 'Category', 'Brand', 'Price', 'Sort by'];

function getFilters(options = filters) {
	return(
		options.map(item =>
			<Filter defaultValue={item} clearIcon={"Clear All"}>
				<FilterOption key="option" value='option'>
					<span>Option</span>
				</FilterOption>
			</Filter>)
	)
}

function getAppliedFilters() {
	return (
		<AppliedFilters>
			<Row>
				<SelectedFilter>
					Women's clothing X
				</SelectedFilter>
				<SelectedFilter>
					All brands X
				</SelectedFilter>
				<SelectedFilter>
					Off White X
				</SelectedFilter>
			</Row>
			<Clear>
				Clear all
			</Clear>
		</AppliedFilters>
	)
}
const Filters = ({ isPostSearch, title })=> {
	const [selectedSizes, setSelectedSizes] = useState([]);
	const [selectedColors, setSelectedColors] = useState([]);

	const handleSelectedOptionsChange = (field, value) => {
		if(field === "size") {
			setSelectedSizes(value);
		} else {
			setSelectedColors(value);
		}
	};

	return (
		<Container>
			<Row>
				<Col span={isPostSearch ? undefined : 6}>
					<Grid aic>
						<Title>{title}</Title>
						{isPostSearch ?
							<PostSearchFilters>
								<GetPostFilters>
									{getFilters(['Category', 'Post Type', 'Hashtags', 'Sort by'])}
								</GetPostFilters>
								{getAppliedFilters()}
							</PostSearchFilters>
							: null}
					</Grid>
				</Col>
				{
					!isPostSearch ? (
							<Col span={isPostSearch ? 21 : 18}>
								<Row style={{display: 'flex'}}>
									<CustomSelect
										field="size"
										label="Size"
										placeholder="Size"
										isCheckbox
										mode="multiple"
										selectedOptions={selectedSizes}
										onChange={handleSelectedOptionsChange}
										options={sizeData}
									/>
									<CustomSelect
										field="color"
										label="Color"
										placeholder="Color"
										isCheckbox
										mode="multiple"
										selectedOptions={selectedColors}
										onChange={handleSelectedOptionsChange}
										options={colorData}
									/>
									{getFilters(['Brand', 'Price', 'Location'])}
								</Row>
								{getAppliedFilters()}
							</Col>
						) : null}

			</Row>
		</Container>
	)
};

export default Filters;
