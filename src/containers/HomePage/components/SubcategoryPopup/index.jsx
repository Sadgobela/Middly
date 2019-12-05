import React from 'react';
import {
	Container,
	Column,
	Heading,
	Item,
} from './styled';

const templateData = [
	{
		heading: 'Women’s Clothing',
		list: [
			'Dresses',
			'Activewear',
			'Tops',
			'Jeans',
			'Shorts & Capris',
			'Skirts',
			'Swimwear',
			'Pants & Leggins',
			'Pajamas & Robes',
			'Bras, Panties & Lingerie',
			'Arabian Wear',
			'Indian Wear',
			'Pakistani Wear',
			'Abayas',
			'Kaftans',
			'Sarees',
		],
	},
	{
		heading: 'Teen Girls',
		list: [
			'Dresses',
			'Shirts',
			'Activewear',
			'Pants',
			'Accessories',
			'Pajamas',
			'School Uniforms',
			'Jeans',
			'Coats & Jackets',
			'Shorts',
			'Skirts',
			'Sets & Collections',
			'Bags & Handbags',
			'Swimwear',
			'Cardigans & Sweaters',
			'Sweatshirts & Hoodies',
		]
	},
	{
		heading: 'Maternity',
		list: [
			'Maternity Wear',
			'Maternity Underwear',
			'Pajamas & Nightgowns',
		]
	},
	{
		heading: 'Men’s Clothing',
		list: [
			'Shirts',
			'Shorts',
			'Jeans',
			'Casual',
			'Pants',
			'Suits & Dresswear',
			'ActiveWear',
			'Swimwear',
			'Underwear',
			'Pajamas & Robes',
			'Workwear',
		]
	},
	{
		heading: 'Teen Boys',
		list: [
			'Shirts',
			'Suits & Dresswears',
			'Pants',
			'Shorts',
			'Underwear',
			'Activewear',
			'School Uniforms',
			'Jeans',
			'Pajamas',
			'Coats & Jackets',
			'Sets & Collections',
			'Sweatwear & Hoodies',
			'Socks',
			'Swimwear',
			'Cardigans & Sweaters',
		]
	}
];

function getContent(data){
	return (
		<>
			{
				data.map(content =>
					<Column>
						<Heading>{content.heading}</Heading>
						{
							content.list.map(item =>
								<Item>{item}</Item>
							)
						}
					</Column>
				)
			}
		</>
	)
}

const SubcategoryPopup = ()=> {

	return (
		<Container>
			{getContent(templateData)}
		</Container>
	)

};

export default SubcategoryPopup;