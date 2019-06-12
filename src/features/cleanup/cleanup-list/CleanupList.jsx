import React, { Component, Fragment } from 'react'
import CleanupItem from './CleanupItem'

class CleanupList extends Component {
    render() {
        return (
            <Fragment>
                {this.props.cleanups.map(cleanup => (
                    <CleanupItem key={cleanup.id} cleanup={cleanup} />
                ))}
            </Fragment>
        )
    }
}

export default CleanupList;
