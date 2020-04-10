//Dont mutate arguments
//No API calls, no route transitions



import { rentalData } from '../data'

const rentals = (state = [], action) => {

    if (action.type === 'FETCH_RENTALS') {
        return action.rentals;
    } else {
        return state;
    }
}

export default rentals