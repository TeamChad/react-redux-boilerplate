import { applyMiddleware, createStore } from "redux"

import createLogger from "redux-logger"
import thunk from "redux-thunk"
import promise from "redux-promise-middleware"

import reducer from "./reducers"

const middleware = [promise(), thunk];

if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger());
}

export default createStore(reducer, applyMiddleware(...middleware))