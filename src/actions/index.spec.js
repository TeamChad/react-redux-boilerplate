import * as constants from '../constants/'
import * as actions from './index'

describe('app actions', () => {
  it('appReady should create APP_READY action', () => {
    expect(actions.appReady()).toEqual({
      type: constants.APP_READY
    })
  })
})