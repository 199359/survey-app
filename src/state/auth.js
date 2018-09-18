import { auth, googleProvider } from '../firebaseConfig'
import firebase from 'firebase'

const HANDLE_LOG_IN_AND_LOG_OUT = 'auth/HANDLE_LOG_IN_AND_LOG_OUT'
const ON_LOGOUT_CLICK = 'navigation/ON_LOGOUT_CLICK'


export const handleLogInAndLogOut = (uid) => ({
    type: HANDLE_LOG_IN_AND_LOG_OUT,
    uid
})

export const onLogInByGoogleClickHandler = () => (dispatch, getState) => {
    if (getState().isLoggedIn) {
        console.log(getState().isLoggedIn)
        auth.signInWithPopup(googleProvider)
    }
    dispatch(handleLogInAndLogOut())
}

export const LogOut = () => ({
    type: ON_LOGOUT_CLICK
})

export const onLogOutClick = () => (dispatch, getState) => {
    auth.signOut()
        .then(function () {
        }, function (error) {
        })
    dispatch(LogOut())
}

const initialState = {
    isLoggedIn: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case HANDLE_LOG_IN_AND_LOG_OUT:
            return {
                ...state,
                isLoggedIn: !state.isLoggedIn,
                uid: action.uid
            }
        case ON_LOGOUT_CLICK:
            return {
                ...state,
                isLoggedIn: !state.isLoggedIn
            }
        default:
            return state
    }
}