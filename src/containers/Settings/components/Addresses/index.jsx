import React, {useState} from 'react';
import Grid from 'components/Grid';
import { CSSTransition } from 'react-transition-group';
import {
	AddressAdd,
	AddressesItem,
	AddNewAddress,
	AddressText,
	Dot,
	Settings,
	SettingsBtn,
	Primary,
	Type,
	Select,
	Edit,
	Delete,
} from "./styled";
import Icon from "components/Icon";

const addresses = [
	{
		type: 'Home',
		isPrimary: true,
		address: '7480 Mockingbird Hill undefined Ironville, Oklahoma 41284 United States'
	},
	{
		type: 'Work',
		isPrimary: false,
		address: '7480 Mockingbird Hill undefined Ironville, Oklahoma 41284 United States'
	},
	{
		type: 'Address 3',
		isPrimary: false,
		address: '7480 Mockingbird Hill undefined Ironville, Oklahoma 41284 United States'
	},
];

function getItems(isShowSettings, setIsShowSettings) {
	return (
		addresses.map( (item, i) =>
			<AddressesItem key={item.type}>
				<Grid aic sb>
					<Grid aic margin='0 0 0 12px'>
						<Icon
							type='marker'
							width='22px'
							height='26px'
							color={item.isPrimary ? '#F0646A' : '#545454'} />
						<Type>
							<AddressText>{item.type}</AddressText>
							{item.isPrimary ? <Primary>Primary</Primary> : null}
						</Type>
					</Grid>
					<SettingsBtn onClick={ ev => setIsShowSettings(!isShowSettings)}>
						<Dot />
					</SettingsBtn>
				</Grid>
				<AddressText main>
					{item.address}
				</AddressText>
				<CSSTransition
					in={isShowSettings}
					timeout={0}
					unmountOnExit
				>
					<Settings>
						<Select>Select as Primary</Select>
						<Edit>Edit Address</Edit>
						<Delete>Delete Address</Delete>
					</Settings>
				</CSSTransition>

			</AddressesItem>
		)
	)
}

const Addresses = ()=> {

	const [isShowSettings, setIsShowSettings] = useState(false);

	return (
		<Grid>
				<Grid sb wrap padding='24px'>
						<AddNewAddress addNew margin='0 0 16px 0'>
							<Icon type='plus' width='32px' height='32px' />
							<AddressAdd>Add new address</AddressAdd>
						</AddNewAddress>
					{ getItems(isShowSettings, setIsShowSettings) }
				</Grid>
		</Grid>
	)
};

export default Addresses;
