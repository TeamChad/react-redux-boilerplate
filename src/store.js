import { applyMiddleware, createStore, compose } from "redux"
import {responsiveStoreEnhancer} from 'redux-responsive'
import thunk from "redux-thunk"
import logger from 'redux-logger'

import reducer from "./reducers"

const middleware = [thunk]

if (process.env.NODE_ENV !== 'production') {
  middleware.push(logger)
}

export default createStore(
    reducer, 
    compose(
        responsiveStoreEnhancer,
        applyMiddleware(...middleware)
    )
)