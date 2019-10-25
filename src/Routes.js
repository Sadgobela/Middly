import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { LandingPage } from './pages';
// import SellersLanding from './components/landings/sellers/SellersLanding';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={LandingPage} />
      </Switch>
    </Router>
  );
};

export default Routes;
