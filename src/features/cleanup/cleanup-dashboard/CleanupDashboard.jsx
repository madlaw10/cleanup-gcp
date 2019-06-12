import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react';
import CleanupList from '../cleanup-list/CleanupList';

class CleanupDashboard extends Component {
    render() {
        return (
            <Grid>
                <Grid.Column width={10}>
                    <CleanupList />
                </Grid.Column>
                <Grid.Column width={6}>
                    <h2>Right Column</h2>
                </Grid.Column>
            </Grid>
        )
    }
}

export default CleanupDashboard;