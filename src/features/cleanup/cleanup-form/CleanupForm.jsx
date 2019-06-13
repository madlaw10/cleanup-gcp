import React, { Component } from 'react'
import { Form, Segment, Button } from 'semantic-ui-react';

class CleanupForm extends Component {

  state = {
    title: '',
    date: '',
    city: '',
    venue: '',
    hostedBy: ''
  }

  handleFormSubmit = (evt) => {
    evt.preventDefault();
    this.props.createCleanup(this.state);
  }

  handleInputChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value
    })
  }

  render() {
    const { cancelForm } = this.props;
    const { title, date, city, venue, hostedBy } = this.state;
    return (
      <Segment>
        <Form onSubmit={this.handleFormSubmit} autoComplete='off'>
          <Form.Field>
            <label>Cleanup Title</label>
            <input
              name='title'
              value={title}
              onChange={this.handleInputChange}
              placeholder="Cleanup Title"
            />
          </Form.Field>
          <Form.Field>
            <label>Cleanup Date</label>
            <input
              name='date'
              value={date}
              onChange={this.handleInputChange}
              type="date" placeholder="Cleanup Date"
            />
          </Form.Field>
          <Form.Field>
            <label>City</label>
            <input
              name='city'
              value={city}
              onChange={this.handleInputChange}
              placeholder="City event is taking place"
            />
          </Form.Field>
          <Form.Field>
            <label>Venue</label>
            <input
              name='venue'
              value={venue}
              onChange={this.handleInputChange} placeholder="Enter the Venue of the event"
            />
          </Form.Field>
          <Form.Field>
            <label>Hosted By</label>
            <input
              name='hostedBy'
              value={hostedBy}
              onChange={this.handleInputChange} placeholder="Enter the name of person hosting"
            />
          </Form.Field>
          <Button positive type="submit">Submit</Button>
          <Button onClick={cancelForm} type="button">Cancel</Button>
        </Form>
      </Segment>
    )
  }
}

export default CleanupForm;