import React from 'react'
import TestUtils from 'react-addons-test-utils'
import Footer from './Footer'

const setup = () => {

  const renderer = TestUtils.createRenderer()
  renderer.render(<Footer />)
  const output = renderer.getRenderOutput()

  return {
    output: output,
    renderer: renderer
  }
}

describe('components', () => {
  describe('Footer', () => {
    it('should render correctly', () => {
      const { output } = setup()

      expect(output.type).toBe('footer')
      expect(output.props.className).toBe('app-footer')

      const p = output.props.children

      expect(p.type).toBe('p')
      expect(p.props.children).toBe('Squiz NZ React - Redux Starter Kit')
    })
  })
})