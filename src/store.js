import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import navigation from './state/navigation'
import createNewSetOfQuestiones from './state/mySurveys/createNewSetOfQuestions'
import thunk from 'redux-thunk'

const reducer = combineReducers({
    navigation,
    createNewSetOfQuestiones
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    reducer,
    composeEnhancers(
        applyMiddleware(thunk)
    )
)