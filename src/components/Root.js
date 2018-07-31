import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from '../redux/store'
import App from './App'

class Root extends Component {
    render () {
        return (
            <Provider store={store}>
                <App />
            </Provider>
        )
    }
}

export default Root
