import React from 'react'
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import { Link } from 'react-router-dom'

class Sidebar extends React.Component {

    handleToggle = () => this.props.handleToggleButton();

    render() {
        return (
            <div>
                <Drawer
                    docked={false}
                    width={200}
                    open={this.props.isSideBarShowed}
                    onRequestChange={() => this.handleToggle()}
                >
                    <Link
                        to={'/'}
                        onClick={() => this.handleToggle()}
                        style={{ textDecoration: 'none' }}
                    >
                        <MenuItem>Home</MenuItem>
                    </Link>
                    <Link
                        to={'/create-new-research/'}
                        onClick={()=>this.handleToggle()}
                        style={{ textDecoration: 'none' }}
                    >
                        <MenuItem>New research</MenuItem>
                    </Link>
                    <Link
                        to={'/my-surveys/'}
                        onClick={()=>this.handleToggle()}
                        style={{ textDecoration: 'none' }}
                    >
                        <MenuItem>My surveys</MenuItem>
                    </Link>
                    <Link
                        to={'/group-of-users/'}
                        onClick={()=>this.handleToggle()}
                        style={{ textDecoration: 'none' }}
                    >
                        <MenuItem>Users</MenuItem>
                    </Link>
                </Drawer>
            </div>
        )
    }
}

export default Sidebar