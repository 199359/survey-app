import React from 'react'
import Sidebar from '../../components/Navigation/Sidebar'
import Navbar from '../../components/Navigation/Navbar'
import {connect} from 'react-redux'

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

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Navigation)