import React from 'react';
import './App.css';
import { ApolloProvider } from '@apollo/react-hooks';
import Routes from './Routes';

import apolloClient from './apolloClient';

function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <div className="App">
        <Routes />
      </div>
    </ApolloProvider>
  );
}

export default App;
