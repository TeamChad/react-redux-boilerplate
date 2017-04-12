import React from 'react'
import TestUtils from 'react-addons-test-utils'
import Header from './Header'

const setup = propOverrides => {
  const props = Object.assign({
    
  }, propOverrides)

  const renderer = TestUtils.createRenderer()
  renderer.render(<Header {...props} />)
  const output = renderer.getRenderOutput()

  return {
    output: output,
    renderer: renderer
  }
}

describe('components', () => {
  describe('Header', () => {
    it('should render correctly', () => {
      const { output } = setup()

      expect(output.type).toBe('header')
      expect(output.props.className).toBe('app-header')

      const [ img, h2 ] = output.props.children

      expect(img.type).toBe('img')
      expect(img.props.className).toBe('app-logo')
      expect(img.props.alt).toBe('logo')
      expect(img.props.src).toBe('logo.svg')

      expect(h2.type).toBe('h2')
      expect(h2.props.children).toBe('Welcome to React - Redux')
    })
  })
})