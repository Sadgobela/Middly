import React from 'react';
import gql from 'graphql-tag';
import {useQuery} from '@apollo/react-hooks';

const GET_CURRENCY = gql`
  {
    currency {
      available_currency_codes
    }
  }
`;

const NonMagento2Test = () => {
  // const {loading, error, data} = useQuery(GET_CURRENCY);
  const {loading, error, data} = useQuery(GET_CURRENCY, {
    context: {clientType: 'magento'}
  });
  console.log('Magento2Test=?', loading, error, data);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (
    <select name="dog">
      {data.currency.available_currency_codes.map((currency) => (
        <option key={currency} value={currency}>
          {currency}
        </option>
      ))}
    </select>
  );
};

export default NonMagento2Test;
