import * as types from '../constants/'

const initialState = {
    appReady: false
};

export default function appSettings(state = initialState, action) {
  switch(action.type) {
    case types.APP_READY:
      return {...state, appReady: true };
    default:
      return state; 
  }
}