import React, { Component } from 'react';
import CleanupDashboard from '../../features/cleanup/cleanupDashboard/CleanupDashboard';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Cleanup</h1>
        <CleanupDashboard />
      </div>
    );
  }
}

export default App;