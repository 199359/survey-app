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
                </Drawer>
            </div>
        )
    }
}

export default Sidebar