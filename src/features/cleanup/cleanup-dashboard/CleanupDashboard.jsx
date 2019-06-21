import React, { Component } from 'react'
import { Grid, Button } from 'semantic-ui-react';
import CleanupList from '../cleanup-list/CleanupList';
import CleanupForm from '../cleanup-form/CleanupForm';
import cuid from 'cuid';

const cleanups = [
  {
    id: '1',
    title: 'Trip to Tower of London',
    date: '2018-03-27',
    category: 'culture',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
    city: 'London, UK',
    venue: "Tower of London, St Katharine's & Wapping, London",
    hostedBy: 'Bob',
    hostPhotoURL: 'https://randomuser.me/api/portraits/men/20.jpg',
    attendees: [
      {
        id: 'a',
        name: 'Bob',
        photoURL: 'https://randomuser.me/api/portraits/men/20.jpg'
      },
      {
        id: 'b',
        name: 'Tom',
        photoURL: 'https://randomuser.me/api/portraits/men/22.jpg'
      }
    ]
  },
  {
    id: '2',
    title: 'Trip to Punch and Judy Pub',
    date: '2018-03-28',
    category: 'drinks',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
    city: 'London, UK',
    venue: 'Punch & Judy, Henrietta Street, London, UK',
    hostedBy: 'Tom',
    hostPhotoURL: 'https://randomuser.me/api/portraits/men/22.jpg',
    attendees: [
      {
        id: 'b',
        name: 'Tom',
        photoURL: 'https://randomuser.me/api/portraits/men/22.jpg'
      },
      {
        id: 'a',
        name: 'Bob',
        photoURL: 'https://randomuser.me/api/portraits/men/20.jpg'
      }
    ]
  }
]

class CleanupDashboard extends Component {
  state = {
    cleanups: cleanups,
    isOpen: false,
    selectedCleanup: null
  }

  handleOpenCleanupForm = () => {
    this.setState({
      isOpen: true,
      selectedCleanup: null
    })
  }

  handleCloseCleanupForm = () => {
    this.setState({
      isOpen: false
    })
  }

  handleCreateCleanup = (newCleanup) => {
    newCleanup.id = cuid();
    newCleanup.hostPhotoURL = '/assets/user.png';
    this.setState(({ cleanups }) => ({
      cleanups: [...cleanups, newCleanup],
      isOpen: false
    }))
  }

  handleSelectCleanup = (cleanup) => {
    this.setState({
      selectedCleanup: cleanup,
      isOpen: true
    })
  }

  handleUpdateCleanup = (updatedCleanup) => {
    this.setState(({ cleanups }) => ({
      cleanups: cleanups.map(cleanup => {
        if (cleanup.id === updatedCleanup.id) {
          return { ...updatedCleanup }
        } else {
          return cleanup
        }
      }),
      isOpen: false,
      selectedCleanup: null
    }))
  }

  handleDeleteCleanup = (id) => {
    this.setState(({cleanups}) => ({
      cleanups: cleanups.filter(cleanup => cleanup.id !==id)
    }))
  }

  render() {
    const { cleanups, isOpen, selectedCleanup } = this.state
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
            content="Create Cleanup"
          />
          {isOpen && (
            <CleanupForm
              key={selectedCleanup ? selectedCleanup.id : 0}
              selectedCleanup={selectedCleanup}
              updateCleanup={this.handleUpdateCleanup}
              createCleanup={this.handleCreateCleanup}
              cancelForm={this.handleCloseCleanupForm} />
          )}
        </Grid.Column>
      </Grid>
    )
  }
}

export default CleanupDashboard;