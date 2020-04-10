

import { rentalData } from './data'
import { createStore, combineReducers } from 'redux'

export function initStore() {
    const reducers = combineReducers({
        rentals: (state = [], action) => {

            if (action.type === 'FETCH_RENTALS') {
                return rentalData
            } else {
                return state;
            }
        }
    })

    const store = createStore(reducers)
    return store;
}

