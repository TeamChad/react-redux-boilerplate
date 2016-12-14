import React from 'react'
import TestUtils from 'react-addons-test-utils'
import MainSection from './MainSection'

const setup = () => {

  const renderer = TestUtils.createRenderer()
  renderer.render(<MainSection />)
  const output = renderer.getRenderOutput()

  return {
    output: output,
    renderer: renderer
  }
}

describe('components', () => {
  describe('MainSection', () => {
    it('should render correctly', () => {
      const { output } = setup()

      expect(output.type).toBe('main')
      expect(output.props.className).toBe('app-body')

      const p = output.props.children

      expect(p.type).toBe('p')
      expect(p.props.className).toBe('app-intro')

      const [ start, code, end ] = p.props.children
      expect(start).toBe('To get started, edit ')
      expect(code.type).toBe('code')
      expect(code.props.children).toBe('src/containers/App.js')
      expect(end).toBe(' and save to reload.')
    })
  })
})