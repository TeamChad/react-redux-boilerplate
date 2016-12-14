import appSettings from './AppSettings'
import * as types from '../constants/ActionTypes'

describe('app settings reducer', () => {
  it('should handle initial state', () => {
    expect(
      appSettings(undefined, {})
    ).toEqual({
      appReady: false
    })
  })

  it('should handle APP_READY', () => {
    expect(
      appSettings([], {
        type: types.APP_READY
      })
    ).toEqual({
      appReady: true
    })
  })
})