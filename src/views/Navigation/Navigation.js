import React from 'react'
import Sidebar from '../../components/Navigation/Sidebar'
import Navbar from '../../components/Navigation/Navbar'


const Navigation = (props) => (

    <div>
        <Sidebar
            handleToggleButton={props.handleToggleButton}
            isSideBarShowed={props._isSideBarShowed}
        />
        <Navbar
            isSideBarShowed={props._isSideBarShowed}
            handleToggleButton={props._handleToggleButton}
        />
    </div>
)


export default Navigation