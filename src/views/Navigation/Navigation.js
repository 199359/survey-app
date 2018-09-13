import React from 'react'
import Sidebar from '../../components/Navigation/Sidebar'
import Navbar from '../../components/Navigation/Navbar'

class Navigation extends React.Component {
    state = {
        isSideBarShowed: false
    }

    handleToggleButton = () => {
        this.setState({
            isSideBarShowed: !this.state.isSideBarShowed
        })
    }

    render() {
        return (
            <div>
                <Sidebar
                    handleToggleButton={this.handleToggleButton}
                    isSideBarShowed={this.state.isSideBarShowed}
                />
                <Navbar
                    isSideBarShowed={this.state.isSideBarShowed}
                    handleToggleButton={this.handleToggleButton}
                />
            </div>
        )
    }
}

export default Navigation