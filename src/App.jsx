import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import { BrowserRouter as Router, Route  } from 'react-router-dom';
import HomePage from './containers/HomePage';
import SignIn from './components/UserAuth/SignIn';
import SignUp from './components/UserAuth/SignUp';
import Forgot from './components/UserAuth/Forgot';
import ProductPage from './containers/ProductPage';
import apolloClient from './apolloClient';
import UIkit from './components/UI-kit';

const routes = [
  { path: '/', name: 'HomePage', Component: HomePage },
  { path: '/ui-kit', name: 'UIkit', Component: UIkit },
  { path: '/product', name: 'Product', Component: ProductPage },
];

const auth = [
  { path: '/sign-in', name: 'SignIn', Component: SignIn },
  { path: '/sign-up', name: 'SignUp', Component: SignUp },
  { path: '/forgot', name: 'Forgot', Component: Forgot },
];

function App() {
  return (
    <Router>
      <ApolloProvider client={apolloClient}>
          {routes.map(({ path, Component }) => (
            <Route key={path} exact path={path}>
              {({ match }) => match !== null ? <Component/> : null }
            </Route>
          ))}
          {auth.map(({ path, Component }) => (
            <Route key={path} exact path={path}>
              {({ match }) => match !== null ? 
              <>
              <HomePage />
              <Component/>
              </> 
              : null }
            </Route>
          ))}
      </ApolloProvider>
    </Router>
  );
}

export default App;
