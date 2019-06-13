import React, { Component, Fragment } from 'react'
import CleanupItem from './CleanupItem'

class CleanupList extends Component {
    render() {
        const { cleanups, selectCleanup, deleteCleanup } = this.props;
        return (
            <Fragment>
                {cleanups.map(cleanup => (
                    <CleanupItem
                        key={cleanup.id}
                        cleanup={cleanup}
                        selectCleanup={selectCleanup}
                        deleteCleanup={deleteCleanup}
                    />
                ))}
            </Fragment>
        )
    }
}

export default CleanupList;
