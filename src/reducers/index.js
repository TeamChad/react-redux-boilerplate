import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { responsiveStateReducer } from 'redux-responsive'
import appConfig from './AppConfig'


const rootReducer = combineReducers({
  browser: responsiveStateReducer,
  appConfig,
  routing: routerReducer
})

export default rootReducer