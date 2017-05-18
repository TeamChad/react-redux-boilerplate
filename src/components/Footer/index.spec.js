import React from 'react'
import ReactShallowRenderer from 'react-test-renderer/shallow'
import Footer from './Footer'

const setup = propOverrides => {
  const props = Object.assign({
    
  }, propOverrides)

  const renderer = ReactShallowRenderer.createRenderer()
  renderer.render(<Footer {...props} />)
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