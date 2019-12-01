import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './containers/HomePage';
import SignIn from './components/UserAuth/SignIn';
import SignUp from './components/UserAuth/SignUp';
import Forgot from './components/UserAuth/Forgot';
import apolloClient from './apolloClient';

const routes = [
  { path: '/sign-in', name: 'SignIn', Component: SignIn },
  { path: '/sign-up', name: 'SignUp', Component: SignUp },
  { path: '/forgot', name: 'Forgot', Component: Forgot },
];

function App() {
  return (
    <Router>
      <ApolloProvider client={apolloClient}>
          <HomePage />
          {routes.map(({ path, Component }) => (
            <Route key={path} exact path={path}>
              {({ match }) => match !== null ? <Component/> : null }
            </Route>
          ))}
      </ApolloProvider>
    </Router>
  );
}

export default App;
