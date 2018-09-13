import React from 'react'
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';

class Navbar extends React.Component {
    render() {
        return (
            <div>
                <AppBar
                    title='Survey App'
                    iconElementLeft={this.props.isSideBarShowed ? <IconButton><NavigationClose /></IconButton> : ''}
                    onLeftIconButtonClick={() =>  this.props.handleToggleButton()}
                />
            </div>
        )
    }
}

export default Navbar