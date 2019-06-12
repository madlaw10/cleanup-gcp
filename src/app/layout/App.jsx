import React, { Component, Fragment } from 'react';
import CleanupDashboard from '../../features/cleanup/cleanup-dashboard/CleanupDashboard';
import NavBar from '../../features/nav/nav-bar/NavBar';
import { Container } from 'semantic-ui-react';

class App extends Component {
  render() {
    return (
      <Fragment>
        <NavBar />
        <Container className="main">
          <CleanupDashboard />
        </Container>
      </Fragment>
    );
  }
}

export default App;