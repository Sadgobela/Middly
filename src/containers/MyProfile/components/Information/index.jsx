import React from 'react';
import {
	Wrap,
	Item,
	Heading,
	Text,

} from './styled';



function Information() {
	return (
		<Wrap>
			<Item>
				<Heading>Following Hashtags</Heading>
				<Text>#JSJK #fkfk  #vfmf  #JSJK  #fkfk #vfmf  #JSJK  #fkfk  #vfmf  #followtofollow</Text>
			</Item>
			<Item>
				<Heading>Following Brands</Heading>
				<Text>@JSJK  @;fkfk @vfmf @MAmaMia @Zara</Text>
			</Item>
			<Item>
				<Heading>Following Categories</Heading>
				<Text>Women's Accessories</Text>
				<Text>Women's Fashion</Text>
			</Item>
		</Wrap>

	)
}

export default Information;