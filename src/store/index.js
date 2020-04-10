import { createStore, combineReducers } from 'redux'
import rentals from './reducers/rentals'

export function initStore() {
    const reducers = combineReducers({
        rentals,
        data1: () => ['1', '2']
    })

    const store = createStore(reducers)
    return store;
}

