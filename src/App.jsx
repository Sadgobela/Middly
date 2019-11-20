import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import HomePage from './containers/HomePage';
import apolloClient from './apolloClient';

function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <HomePage />
    </ApolloProvider>
  );
}

export default App;
