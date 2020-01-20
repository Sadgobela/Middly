import React from 'react';
import {
	Container,
	Column,
	Heading,
	Item,
	MainHeading,
	Row,
} from './styled';


function getContent(data) {
	return (
		<>
			{
				data.map(content =>
					<Column key={content.name}>
						<Heading>{content.name}</Heading>
						{
							content.children.map(item =>
								<Item key={item.name}>{item.name}</Item>
							)
						}
					</Column>
				)
			}
		</>
	)
}

const SubcategoryPopup = ({ mainHeading, aside, data }) => {

	return (
		<Container aside={aside}>
			{
				mainHeading ? <MainHeading>{mainHeading}</MainHeading> : null
			}
			<Row>
				{data && getContent(data)}
			</Row>

		</Container>
	)

};

export default SubcategoryPopup;