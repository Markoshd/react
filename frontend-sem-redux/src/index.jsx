import React from 'react'
import ReactDOM from 'react-dom'
import App from './main/app'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware} from 'redux'

import reducers from './dayMenu/reducers'

const  createStoreWithMiddleware = applyMiddleware()(createStore)

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <App />
    </Provider>
    , document.getElementById('app')
)