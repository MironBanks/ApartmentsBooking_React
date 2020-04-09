import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Provider from './store/Provider'
import Header from './components/shared/Header'
import Routes from './Routes'
import { initStore } from './store/index'


const store = initStore()
const App = () => {


    return (
        <Provider store={store}>
            <Router>
                <Header />
                <Routes />
            </Router>
        </Provider>
    )
}
export default App