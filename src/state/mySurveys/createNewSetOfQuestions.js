const TOGGLE_DIALOG_WINDOW = 'createNewSetOfQuestiones/TOGGLE_DIALOG_WINDOW'
const VALUE_OF_DROPDOWN_MENU_IN_DIALOG = 'createNewSetOfQuestiones/VALUE_OF_DROPDOWN_MENU_IN_DIALOG'
const REMOVE_ELEMENT_FROM_DIALOG = 'createNewSetOfQuestiones/REMOVE_ELEMENT_FROM_DIALOG'


export const toggleDialogWindow = () => ({
    type: TOGGLE_DIALOG_WINDOW
})

export const onChanegeValueOfDropdownMenuInDialog = (value) => ({
    type: VALUE_OF_DROPDOWN_MENU_IN_DIALOG,
    value
})

export const onRemoveElementFromDialogClick = (key) => ({
    type: REMOVE_ELEMENT_FROM_DIALOG,
    key
})

const initialState = {
    isDialogWindowOpen: false,
    valueOfDropdownMenuInDialog: 1,
    choosenValues: [],
    availableElements: ['Text Field', 'Scale']
}

export default (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_DIALOG_WINDOW:
        return {
            ...state,
            isDialogWindowOpen: !state.isDialogWindowOpen,
            valueOfDropdownMenuInDialog: 1,
            choosenValues: []
        }
        case VALUE_OF_DROPDOWN_MENU_IN_DIALOG:
        return {
            ...state,
            valueOfDropdownMenuInDialog: action.value,
            choosenValues: state.choosenValues.concat([action.value].map((el, i)=>{
                return {
                    elementId: el
                }
            })
            ).map((el, i)=>{
                return {
                    ...el,
                    key: i,
                    elementName: state.availableElements[el.elementId]
                }
            })
        }
        case REMOVE_ELEMENT_FROM_DIALOG:
        return {
            ...state,
            choosenValues: state.choosenValues.filter((el)=>{
                return el.elementName !== action.key
            })
        }
        default:
        return state
    }
}