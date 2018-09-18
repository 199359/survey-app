import React from 'react'
import { onLogInByGoogleClickHandler } from '../../state/auth'
import {connect} from 'react-redux'
import RaisedButton from 'material-ui/RaisedButton'


const Auth = (props) => (
    props._isLoggedIn ?
    <div>
        {props.children}
        {console.log(props._isLoggedIn)}
    </div>
    :
<RaisedButton
    label="Login by google"
    primary={true}
    onClick={props._onLogInByGoogleClickHandler}
    />
)

const mapStateToProps = state => ({
    _isLoggedIn: state.auth.isLoggedIn
})

const mapDispatchToProps = dispatch => ({
    _onLogInByGoogleClickHandler: () => dispatch(onLogInByGoogleClickHandler())
})


export default connect(mapStateToProps, mapDispatchToProps)(Auth)
