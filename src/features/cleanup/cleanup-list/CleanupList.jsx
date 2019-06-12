import React, { Component, Fragment } from 'react'
import CleanupItem from './CleanupItem';

class CleanupList extends Component {
    render() {
        return (
            <Fragment>
                <CleanupItem />
                <CleanupItem />
                <CleanupItem />
            </Fragment>
        )
    }
}

export default CleanupList;
