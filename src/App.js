import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { StateContext } from './state-context'
import Header from './components/shared/Header'
import Routes from './Routes'
import store from './store/index'



const App = () => {


    return (
        <StateContext.Provider value={store}>
            <Router>
                <Header />
                <Routes />
            </Router>
        </StateContext.Provider>
    )
}
export default App