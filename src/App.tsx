import React, { ReactElement } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import Header from 'components/Header';
import Body from 'containers/Body';
import Search from 'containers/Search';
import Film from 'containers/Film';
import Footer from 'components/Footer';
import ErrorBoundary from 'components/ErrorBoundary';
import ErrorPage from 'components/ErrorPage';

function App(): ReactElement {
  return (
    <Router>
      <main>
        <Header>
          <Switch>
            <Route path="/" exact>
              <Redirect to="/search" />
            </Route>
            <Route path="/search/:str?" component={Search} />
            <Route path="/film/:id" component={Film} />
            <Route component={ErrorPage} />
          </Switch>
        </Header>
        <ErrorBoundary>
          <Body />
        </ErrorBoundary>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
