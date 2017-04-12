import * as constants from '../constants/'

export const initialState = {
    appReady: false
};

export default function appConfig(state = initialState, action) {
  switch(action.type) {
    case constants.APP_READY:
      return {...state, appReady: true };
    default:
      return state; 
  }
}