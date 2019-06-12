import React, { Component } from 'react'
import { Menu, Container, Button } from 'semantic-ui-react';

class NavBar extends Component {
    render() {
        return (
            <div>
                <Menu inverted fixed="top">
                    <Container>
                        <Menu.Item header>
                            <img src="assets/logo_white.png" alt="logo" />
                            Cleanup
                          </Menu.Item>
                        <Menu.Item name="Cleanups" />
                        <Menu.Item>
                            <Button basic inverted floated="right" content="Create Cleanup" />
                        </Menu.Item>
                        <Menu.Item position="right">
                            <Button basic inverted content="Login" />
                            <Button basic inverted content="Sign Out" style={{ marginLeft: '0.5em' }} />
                        </Menu.Item>
                    </Container>
                </Menu>
            </div>
        )
    }
}

export default NavBar;
