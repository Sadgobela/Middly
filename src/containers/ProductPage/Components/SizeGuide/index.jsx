import React from 'react';
import {
	Overlay,
	Guide,
	Heading,
	Tab,
	Link,
	Column,
	Header,
	Item,
	Table,
	Title,
	Wrap,
	Row,
	Subtitle,
} from './styled';

const SizeGuide = ()=> (
	<Overlay>
		<Guide>
			<Heading>Size guide</Heading>
			<Tab>
				<Link active>Clothing</Link>
				<Link>Shoes</Link>
			</Tab>
			<Table>
				<Column>
					<Header>
						<Title>Size</Title>
					</Header>
					<Title bottom>XS</Title>
					<Title bottom>S</Title>
					<Title bottom>M</Title>
					<Title bottom>L</Title>
					<Title bottom>XL</Title>
					<Title bottom>2XL</Title>
					<Title bottom>3XL</Title>
				</Column>
				<Column>
					<Header>
						<Title>UK</Title>
					</Header>
					<Item>6</Item>
					<Item>8</Item>
					<Item>10</Item>
					<Item>12</Item>
					<Item>14</Item>
					<Item>16</Item>
					<Item>18</Item>
				</Column>
				<Column>
					<Title>Bust</Title>
					<Wrap>
						<Row right>
							<Item subtitle>Inches</Item>
							<Item>31</Item>
							<Item>32</Item>
							<Item>34</Item>
							<Item>36</Item>
							<Item>38</Item>
							<Item>40</Item>
							<Item>42</Item>
						</Row>
						<Row>
							<Item subtitle>CM</Item>
							<Item>78,5</Item>
							<Item>81</Item>
							<Item>86</Item>
							<Item>91</Item>
							<Item>96</Item>
							<Item>101</Item>
							<Item>106</Item>
						</Row>
					</Wrap>
				</Column>
				<Column>
					<Title>Waist</Title>
					<Wrap>
						<Row right>
							<Item subtitle>Inches</Item>
							<Item>23,75</Item>
							<Item>24,75</Item>
							<Item>26,75</Item>
							<Item>28,75</Item>
							<Item>30,75</Item>
							<Item>32,75</Item>
							<Item>34,75</Item>
						</Row>
						<Row>
							<Item subtitle>CM</Item>
							<Item>60,5</Item>
							<Item>63</Item>
							<Item>68</Item>
							<Item>73</Item>
							<Item>78</Item>
							<Item>83</Item>
							<Item>88</Item>
						</Row>
					</Wrap>
				</Column>
				<Column>
					<Title>Hips</Title>
					<Wrap>
						<Row right>
							<Item subtitle>Inches</Item>
							<Item>33,75</Item>
							<Item>34,75</Item>
							<Item>36,75</Item>
							<Item>38,75</Item>
							<Item>40,75</Item>
							<Item>42,75</Item>
							<Item>44,75</Item>
						</Row>
						<Row>
							<Item subtitle>CM</Item>
							<Item>86</Item>
							<Item>88,5</Item>
							<Item>93,5</Item>
							<Item>98,5</Item>
							<Item>103,5</Item>
							<Item>108,5</Item>
							<Item>113,5</Item>
						</Row>
					</Wrap>
				</Column>
			</Table>
		</Guide>
	</Overlay>
);

export default SizeGuide;
