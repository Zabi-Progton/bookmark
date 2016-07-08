import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import entriesReducer from '../reducers/entriesReducer'
import profilesReducer from '../reducers/profilesReducer'

// Combine Reducers
var reducers = combineReducers({
    entriesReducer: entriesReducer,
    profilesReducer: profilesReducer
})

// Create Store
var store = createStore(
    reducers,
    applyMiddleware(thunk) // Add middleware to createStore
)


export default store