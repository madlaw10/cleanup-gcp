import React, { Component } from 'react';
import { Grid, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { createCleanup, updateCleanup, deleteCleanup } from '../cleanupActions';
import CleanupList from '../cleanup-list/CleanupList';
import CleanupForm from '../cleanup-form/CleanupForm';
import cuid from 'cuid';

const mapState = state => ({
	cleanups: state.cleanups
});

const actions = {
	createCleanup,
	updateCleanup,
	deleteCleanup
};

class CleanupDashboard extends Component {
	state = {
		isOpen: false,
		selectedCleanup: null
	};

	handleOpenCleanupForm = () => {
		this.setState({
			isOpen: true,
			selectedCleanup: null
		});
	};

	handleCloseCleanupForm = () => {
		this.setState({
			isOpen: false
		});
	};

	handleCreateCleanup = newCleanup => {
		newCleanup.id = cuid();
		newCleanup.hostPhotoURL = '/assets/user.png';
		this.props.createCleanup(newCleanup);
		this.setState(({ cleanups }) => ({
			isOpen: false
		}));
	};

	handleSelectCleanup = cleanup => {
		this.setState({
			selectedCleanup: cleanup,
			isOpen: true
		});
	};

	handleUpdateCleanup = updatedCleanup => {
		this.props.updateCleanup(updatedCleanup);
		this.setState(({ cleanups }) => ({
			isOpen: false,
			selectedCleanup: null
		}));
	};

	handleDeleteCleanup = id => {
		this.props.deleteCleanup(id);
	};

	render() {
		const { isOpen, selectedCleanup } = this.state;
		const { cleanups } = this.props;
		return (
			<Grid>
				<Grid.Column width={10}>
					<CleanupList
						cleanups={cleanups}
						selectCleanup={this.handleSelectCleanup}
						deleteCleanup={this.handleDeleteCleanup}
					/>
				</Grid.Column>
				<Grid.Column width={6}>
					<Button
						onClick={this.handleOpenCleanupForm}
						positive
						content='Create Cleanup'
					/>
					{isOpen && (
						<CleanupForm
							key={selectedCleanup ? selectedCleanup.id : 0}
							selectedCleanup={selectedCleanup}
							updateCleanup={this.handleUpdateCleanup}
							createCleanup={this.handleCreateCleanup}
							cancelForm={this.handleCloseCleanupForm}
						/>
					)}
				</Grid.Column>
			</Grid>
		);
	}
}

export default connect(
	mapState,
	actions
)(CleanupDashboard);