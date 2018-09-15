const TOGGLE_DIALOG_WINDOW = 'createNewSetOfQuestiones/TOGGLE_DIALOG_WINDOW'
const VALUE_OF_DROPDOWN_MENU_IN_DIALOG = 'createNewSetOfQuestiones/VALUE_OF_DROPDOWN_MENU_IN_DIALOG'
const REMOVE_ELEMENT_FROM_DIALOG = 'createNewSetOfQuestiones/REMOVE_ELEMENT_FROM_DIALOG'
const ADD_NEW_ELEMENTS_TO_SET_OF_QUESTIONES = 'createNewSetOfQuestiones/ADD_NEW_ELEMENTS_TO_SET_OF_QUESTIONES'
const ADD_NEW_TEXT_FIELD_TO_SET_OF_QUESTIONS = 'createNewSetOfQuestiones/ADD_NEW_TEXT_FIELD_TO_SET_OF_QUESTIONS'
const REMOVE_PROJECT_OF_TEXT_FIELD = 'createNewSetOfQuestiones/REMOVE_PROJECT_OF_TEXT_FIELD'
const ON_QUESTION_TEXT_CHANGE = 'createNewSetOfQuestiones/ON_QUESTION_TEXT_CHANGE'
const HANDLE_ON_CHANGE_NAME_OF_THE_SET_INPUT = 'createNewSetOfQuestiones/HANDLE_ON_CHANGE_NAME_OF_THE_SET_INPUT'
const ON_CLICK_CREATE_NEW_SET_OF_QUESTIONES = 'createNewSetOfQuestiones/ON_CLICK_CREATE_NEW_SET_OF_QUESTIONES'

export const onClickCreateNewSetOfQuestions = (name, elements) => ({
    type: ON_CLICK_CREATE_NEW_SET_OF_QUESTIONES,
})

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

export const addNewElementsToSetOfQuestiones = () => ({
    type: ADD_NEW_ELEMENTS_TO_SET_OF_QUESTIONES
})

export const onClickToAddNewElements = () => {
    return dispatch => {
        dispatch(addNewElementsToSetOfQuestiones()),
            dispatch(toggleDialogWindow())
    }
}

export const addNewTextFieldToSetOfQuestions = (key) => ({
    type: ADD_NEW_TEXT_FIELD_TO_SET_OF_QUESTIONS,
    key
})

export const onQuestionTextChange = (text, key) => ({
    type: ON_QUESTION_TEXT_CHANGE,
    text,
    key
})

export const removeProjectOfTextField = (key) => ({
    type: REMOVE_PROJECT_OF_TEXT_FIELD,
    key
})

export const handleNameOfTheInput = (text) => ({
    type: HANDLE_ON_CHANGE_NAME_OF_THE_SET_INPUT,
    text
})



const initialState = {
    isDialogWindowOpen: false,
    valueOfDropdownMenuInDialog: 1,
    choosenValues: [],
    availableElements: ['Text Field', 'Scale'],
    elementsToSetOfQuestions: [],
    nameOfTheSet: '',
    mySetsOfQuestiones: {}
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ON_CLICK_CREATE_NEW_SET_OF_QUESTIONES:
        const newElement = {[state.nameOfTheSet]: state.elementsToSetOfQuestions }
            return {
                ...state,
                mySetsOfQuestiones: Object.assign({}, state.mySetsOfQuestiones, newElement),
            }
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
                choosenValues: state.choosenValues.concat([action.value].map((el, i) => {
                    return {
                        elementId: el
                    }
                })
                ).map((el, i) => {
                    return {
                        ...el,
                        key: i,
                        elementName: `${i + 1} ${state.availableElements[el.elementId]}`,
                        isQuestionCompleted: false
                    }
                })
            }
        case REMOVE_ELEMENT_FROM_DIALOG:
            return {
                ...state,
                choosenValues: state.choosenValues.filter((el) => {
                    return el.elementName !== action.key
                }).map((el, i) => {
                    return {
                        ...el,
                        elementName: `${i + 1} ${state.availableElements[el.elementId]}`
                    }
                })
            }
        case ADD_NEW_ELEMENTS_TO_SET_OF_QUESTIONES:
            return {
                ...state,
                elementsToSetOfQuestions: state.elementsToSetOfQuestions.concat(state.choosenValues).map((el, i)=> {
                    return { ...el,
                        key: i
                    }
                })
            }
        case ADD_NEW_TEXT_FIELD_TO_SET_OF_QUESTIONS:
            return {
                ...state,
                elementsToSetOfQuestions: state.elementsToSetOfQuestions.map((el, i, arr) => {
                    if (el.key === action.key) {
                        return {
                            ...el,
                            isQuestionCompleted: true
                        }
                    }
                    return {
                        ...el
                    }
                })
            }
        case ON_QUESTION_TEXT_CHANGE:
            return {
                ...state,
                elementsToSetOfQuestions: state.elementsToSetOfQuestions.map((el, i, arr) => {
                    if (el.key === action.key) {
                        return {
                            ...el,
                            questionText: action.text
                        }
                    }
                    return {
                        ...el
                    }
                })
            }
            case REMOVE_PROJECT_OF_TEXT_FIELD:
            return {
                ...state,
                elementsToSetOfQuestions: state.elementsToSetOfQuestions.filter(el => {
                    return el.elementName !== action.key
                })
            }
            case HANDLE_ON_CHANGE_NAME_OF_THE_SET_INPUT:
            return {
                ...state,
                nameOfTheSet: action.text
            }
        default:
            return state
    }
}