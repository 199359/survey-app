import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import navigation from './state/navigation'
import thunk from 'redux-thunk'

const reducer = combineReducers({
    navigation
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    reducer,
    composeEnhancers(
        applyMiddleware(thunk)
    )
)