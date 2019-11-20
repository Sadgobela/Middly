import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

const GET_COUNTRY = gql`
  {
    getCountries {
      CountryName
    }
  }
`;

const GqlTest = () => {
  const { loading, error, data } = useQuery(GET_COUNTRY);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (
    <select name="dog">
      {data.getCountries.map((country) => (
        <option key={country.CountryName} value={country.CountryName}>
          {country.CountryName}
        </option>
      ))}
    </select>
  );
};

export default GqlTest;
