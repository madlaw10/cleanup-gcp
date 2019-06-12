import React, { Component } from 'react'
import { Segment, Item, Icon, List, Button } from 'semantic-ui-react';
import CleanupAttendee from './CleanupAttendee';

class CleanupItem extends Component {
    render() {
        return (
            <Segment.Group>
                <Segment>
                    <Item.Group>
                        <Item>
                            <Item.Image size="tiny" circular src="https://randomuser.me/api/portraits/men/42.jpg" />
                            <Item.Content>
                                <Item.Header as="a">Cleanup Title</Item.Header>
                                <Item.Description>
                                    Hosted by <a>hosted by</a>
                                </Item.Description>
                            </Item.Content>
                        </Item>
                    </Item.Group>
                </Segment>
                <Segment>
                    <span>
                        <Icon name="clock" /> date |
                        <Icon name="marker" /> time
                      </span>
                </Segment>
                <Segment secondary>
                    <List horizontal>
                        <CleanupAttendee />
                        <CleanupAttendee />
                        <CleanupAttendee />
                    </List>
                </Segment>
                <Segment clearing>
                    <span>Description will go here!</span>
                    <Button as="a" color="green" floated="right" content="View" />
                </Segment>
            </Segment.Group>
        )
    }
}

export default CleanupItem;
