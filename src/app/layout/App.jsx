import React, { Component, Fragment } from 'react';
import CleanupDashboard from '../../features/cleanup/cleanup-dashboard/CleanupDashboard';
import CleanupDetailsPage from '../../features/cleanup/cleanup-details/CleanupDetailsPage';
import CleanupForm from '../../features/cleanup/cleanup-form/CleanupForm';
import HomePage from '../../features/home/HomePage';
import SettingsDashboard from '../../features/user/settings/SettingsDashboard';
import UsersDashboard from '../../features/user/user-dashboard/UserDashboard';
import UserDetailsPage from '../../features/user/user-details/UserDetailsPage';
import NavBar from '../../features/nav/nav-bar/NavBar';
import { Container } from 'semantic-ui-react';
import { Route } from 'react-router-dom';
import TestComponent from '../../features/test-area/TestComponent';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Route exact path='/' component={HomePage} />
        <Route
          path='/(.+)'
          render={() => (
            <Fragment>
              <NavBar />
              <Container className="main">
                <Route path='/cleanups' component={CleanupDashboard} />
                <Route path='/cleanups/:id' component={CleanupDetailsPage} />
                <Route path='/createCleanup' component={CleanupForm} />
                <Route path='/users' component={UsersDashboard} />
                <Route path='/profile/:id' component={UserDetailsPage} />
                <Route path='/settings' component={SettingsDashboard} />
                <Route path='/test' component={TestComponent} />
              </Container>
            </Fragment>
          )}
        />
      </Fragment>
    );
  }
}

export default App;