import React from 'react';
import gql from 'graphql-tag';
import {useQuery} from '@apollo/react-hooks';

const GET_COUNTRY = gql`
  {
    Countries {
      CountryName
    }
  }
`;

const NonMagento2Test = () => {
  const {loading, error, data} = useQuery(GET_COUNTRY);
  console.log('NonMagento2Test=?', loading, error, data);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (
    <select name="dog">
      {data.Countries.map((country) => (
        <option key={country.CountryName} value={country.CountryName}>
          {country.CountryName}
        </option>
      ))}
    </select>
  );
};

export default NonMagento2Test;
