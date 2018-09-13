import React from 'react'
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleToggleButton } from '../../../state/navigation'

const Sidebar = props => (
    <div>
        <Drawer
            docked={false}
            width={200}
            open={props._isSideBarShowed}
            onRequestChange={() => props._handleToggleButton()}
        >
            <Link
                to={'/'}
                onClick={() => props._handleToggleButton()}
                style={{ textDecoration: 'none' }}
            >
                <MenuItem>Home</MenuItem>
            </Link>
            <Link
                to={'/create-new-research/'}
                onClick={() => props._handleToggleButton()}
                style={{ textDecoration: 'none' }}
            >
                <MenuItem>New research</MenuItem>
            </Link>
            <Link
                to={'/my-surveys/'}
                onClick={() => props._handleToggleButton()}
                style={{ textDecoration: 'none' }}
            >
                <MenuItem>My surveys</MenuItem>
            </Link>
            <Link
                to={'/group-of-users/'}
                onClick={() => props._handleToggleButton()}
                style={{ textDecoration: 'none' }}
            >
                <MenuItem>Users</MenuItem>
            </Link>
        </Drawer>
    </div>
)



const mapStateToProps = state => ({
    _isSideBarShowed: state.navigation.isSideBarShowed
})

const mapDispatchToProps = dispatch => ({
    _handleToggleButton: () => dispatch(handleToggleButton())
})

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)

