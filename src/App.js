import React from 'react';
import './App.css';
import { ApolloProvider } from '@apollo/react-hooks';
import apolloClient from './apolloClient';

function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <div className="App">{'Home page'}</div>
    </ApolloProvider>
  );
}

export default App;
