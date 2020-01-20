import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './containers/HomePage';
import SignIn from './components/UserAuth/SignIn';
import SignUp from './components/UserAuth/SignUp';
import Forgot from './components/UserAuth/Forgot';
import ProductPage from './containers/ProductPage';
import apolloClient from './apolloClient';
import UIkit from './components/UI-kit';
import SearchResult from './containers/SearchResult';
import MyProfile from './containers/MyProfile';
import Settings from "./containers/Settings";
import CartPage from "./containers/CartPage";

const routes = [
  { path: '/', name: 'HomePage', Component: HomePage },
  { path: '/ui-kit', name: 'UIkit', Component: UIkit },
  { path: '/product', name: 'Product', Component: ProductPage },
  { path: '/search', name: 'Search', Component: SearchResult },
  { path: '/profile', name: 'Profile', Component: MyProfile },
  { path: '/settings', name: 'Settings', Component: Settings },
  { path: '/cart', name: 'My-Cart', Component: CartPage },
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
            {({ match }) => match !== null ? <Component /> : null}
          </Route>
        ))}
        {auth.map(({ path, Component }) => (
          <Route key={path} exact path={path}>

            {({ match }) => match !== null ?
              <>
                <HomePage />
                <Component />
              </>
              : null}
          </Route>
        ))}
      </ApolloProvider>
    </Router>
  );
}

export default App;
