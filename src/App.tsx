import React, { ReactElement } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import Header from 'components/Header';
import Body from 'containers/Body';
import Search from 'containers/Search';
import Footer from 'components/Footer';
import ErrorBoundary from 'components/ErrorBoundary';

function App(): ReactElement {
  return (
    <Router>
      <main>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/search" />
          </Route>
          <Header>
            <Route path="/search" component={Search} />
          </Header>
        </Switch>
        <ErrorBoundary>
          <Body />
        </ErrorBoundary>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
