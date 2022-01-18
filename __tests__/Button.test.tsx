import React from 'react'
import renderer from 'react-test-renderer'
import { Button } from '../components/Button'

test('Button with label', () => {
  const onClick = jest.fn()
  const component = renderer.create(<Button label="button" onClick={onClick} />)

  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()

  tree.props.onClick()
  tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
