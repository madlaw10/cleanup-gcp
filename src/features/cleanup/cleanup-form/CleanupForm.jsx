import React, { Component } from 'react';
import { Form, Segment, Button } from 'semantic-ui-react';

class CleanupForm extends Component {
	state = {
		title: '',
		date: '',
		city: '',
		venue: '',
		hostedBy: ''
	};

	componentDidMount() {
		if (this.props.selectedCleanup !== null) {
			this.setState({
				...this.props.selectedCleanup
			});
		}
	}

	submitForm = evt => {
		evt.preventDefault();
		if (this.state.id) {
			this.props.updateCleanup(this.state);
		} else {
			this.props.createCleanup(this.state);
		}
	};

	updateInput = ({ target: { name, value } }) => {
		this.setState({
			[name]: value
		});
	};

	render() {
		const { cancelForm } = this.props;
		const { title, date, city, venue, hostedBy } = this.state;
		return (
			<Segment>
				<Form onSubmit={this.submitForm} autoComplete='off'>
					<Form.Field>
						<label>Cleanup Title</label>
						<input
							name='title'
							value={title}
							onChange={this.updateInput}
							placeholder='Cleanup Title'
						/>
					</Form.Field>
					<Form.Field>
						<label>Cleanup Date</label>
						<input
							name='date'
							value={date}
							onChange={this.updateInput}
							type='date'
							placeholder='Cleanup Date'
						/>
					</Form.Field>
					<Form.Field>
						<label>City</label>
						<input
							name='city'
							value={city}
							onChange={this.updateInput}
							placeholder='City event is taking place'
						/>
					</Form.Field>
					<Form.Field>
						<label>Venue</label>
						<input
							name='venue'
							value={venue}
							onChange={this.updateInput}
							placeholder='Enter the Venue of the event'
						/>
					</Form.Field>
					<Form.Field>
						<label>Hosted By</label>
						<input
							name='hostedBy'
							value={hostedBy}
							onChange={this.updateInput}
							placeholder='Enter the name of person hosting'
						/>
					</Form.Field>
					<Button positive type='submit'>
						Submit
					</Button>
					<Button onClick={cancelForm} type='button'>
						Cancel
					</Button>
				</Form>
			</Segment>
		);
	}
}

export default CleanupForm;
