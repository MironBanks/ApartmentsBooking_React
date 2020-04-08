import React from 'react'
import {
    Switch,
    Route
} from 'react-router-dom'
import RentalHome from './pages/RentalHome'
import Login from './pages/Login'
import Register from './pages/Register'


const Routes = () => {

    return (
        <Switch>
            <Route exact path='/'>
                <RentalHome />
            </Route>
            <Route path='/login'>
                <Login />
            </Route>
            <Route path='/register'>
                <Register />
            </Route>
        </Switch>
    )
}

export default Routes