import React from 'react';
import logo from './logo.svg';
import './App.css';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

const GET_COUNTRY = gql`
  {
    getCountries {
      CountryName
    }
  }
`;

const GET_currency = gql`
  {
    currency {
      available_currency_codes
    }
  }
`;

function GqlTest(props) {
  const { loading, error, data } = useQuery(GET_COUNTRY);

  const { loading: loading1, error: error1, data: data1 } = useQuery(
    GET_currency,
    {
      context: { clientType: 'magento' },
    }
  );
  console.log('GET_COUNTRY==>', loading, error, data);
  console.log('GET_currency==>', loading1, error1, data1);
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
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         {'Edit'} <code>src/App.js</code> {'and save to reload.'}
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         {'Learn React*****************8'}
  //       </a>
  //     </header>
  //   </div>
  // );
}

export default GqlTest;
