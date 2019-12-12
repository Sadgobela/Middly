import React from 'react';
import {
	Container,
	List,
	Item,
	Title,
	Rating,
	Percents,
	Total,
	TotalTitle,
	MaxResult,
	Stars,
} from './styled';

const statisticsData = [80, 13, 4, 1, 2];
const colors = ['#208C4E', '#2ECC71', '#FFC131', '#FF7F0B', '#E4171F'];

const Statistics = ({setRating})=>{

	return (
		<Container>
			<List>
				{
					statisticsData.map( (count, i) =>
						<Item key={count}>
							<Title>5 stars</Title>
							<Rating color={colors[i]} count={count} />
							<Percents>${count}%</Percents>
						</Item>
					)
				}
			</List>
			<Total>
				<TotalTitle>4,7
					<MaxResult>/5</MaxResult>
				</TotalTitle>
				<Stars>
					{setRating(5)}
				</Stars>

			</Total>
		</Container>
	)
};

export default Statistics;
