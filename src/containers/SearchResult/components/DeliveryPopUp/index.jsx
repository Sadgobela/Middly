import React, {useState} from 'react';
import Select from 'components/Select';
import {DeliveryPopUpContainer, SaveButton, CancelButton, ButtonContainer} from './styled';

const deliveryCountry = [
  {value: 'bahrain', label: 'Bahrain'},
  {value: 'ukraine', label: 'Ukraine'}
];

const deliveryCity = [
  {value: 'manama', label: 'Manama'},
  {value: 'zaporizhya', label: 'Zaporizhya'}
];

const deliveryArea = [
  {value: 'area1', label: 'Area1'},
  {value: 'area2', label: 'Area2'}
];

const DeliveryPopUp = () => {
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedArea, setSelectedArea] = useState('');

  return (
    <DeliveryPopUpContainer>
      <h4>Delivery Location</h4>
      <p>Country</p>
      <Select
        label="Country"
        selectedOptions={selectedCountry || 'bahrain'}
        options={deliveryCountry}
        onChange={(value) => setSelectedCountry(value)}
      />
      <p>City</p>
      <Select
        label="City"
        selectedOptions={selectedCity || 'manama'}
        options={deliveryCity}
        onChange={(value) => setSelectedCity(value)}
      />
      <p>Area</p>
      <Select
        label="Area"
        selectedOptions={selectedArea || 'area1'}
        options={deliveryArea}
        onChange={(value) => setSelectedArea(value)}
      />
      <ButtonContainer>
        <CancelButton type="link">Cancel</CancelButton>
        <SaveButton type="danger">Save</SaveButton>
      </ButtonContainer>
    </DeliveryPopUpContainer>
  );
};
export default DeliveryPopUp;
