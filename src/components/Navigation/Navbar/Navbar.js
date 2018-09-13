import React from 'react'
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import { connect } from 'react-redux'
import { handleToggleButton } from '../../../state/navigation'

const Navbar = props => (
    <div>
        <AppBar
            title='Survey App'
            iconElementLeft={props._isSideBarShowed ? <IconButton><NavigationClose /></IconButton> : ''}
            onLeftIconButtonClick={() => props._handleToggleButton()}
        />
    </div>
)

const mapStateToProps = state => ({
    _isSideBarShowed: state.navigation.isSideBarShowed
})

const mapDispatchToProps = dispatch => ({
    _handleToggleButton: () => dispatch(handleToggleButton())
})

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)