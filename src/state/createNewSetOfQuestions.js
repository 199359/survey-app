const TOGGLE_DIALOG_WINDOW = 'createNewSetOfQuestiones/TOGGLE_DIALOG_WINDOW'

export const toggleDialogWindow = () => ({
    type: TOGGLE_DIALOG_WINDOW
})

const initialState = {
    isDialogWindowOpen: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_DIALOG_WINDOW:
        return {
            ...state,
            isDialogWindowOpen: !state.isDialogWindowOpen
        }
        default:
        return state
    }
}