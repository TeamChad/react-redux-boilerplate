import appConfig from './AppConfig'
import { initialState } from './AppConfig'
import * as constants from '../constants/'

describe('app settings reducer', () => {
  it('should handle initial state', () => {
    expect(
      appConfig(undefined, {})
    ).toEqual(initialState)
  })

  it('should handle APP_READY', () => {
    expect(
      appConfig(initialState, {
        type: constants.APP_READY
      })
    ).toEqual({
      ...initialState,
      appReady: true
    })
  })
})