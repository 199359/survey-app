const TOGGLE_SIDEBAR = 'navigation/TOGGLE_SIDEBAR'

export const handleToggleButton = () => ({
    type: TOGGLE_SIDEBAR
})

const initialState = {
    isSideBarShowed: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_SIDEBAR:
        return {
            ...state,
            isSideBarShowed: !state.isSideBarShowed
        }
        default:
        return state
    }
}