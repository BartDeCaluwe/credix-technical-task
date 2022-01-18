import React from 'react'
import renderer from 'react-test-renderer'
import { Icon } from '../components/Icon'

test('Bar icon', () => {
  const component = renderer.create(<Icon name="bar" />)

  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('Calendar icon', () => {
  const component = renderer.create(<Icon name="calendar" />)

  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('Link icon', () => {
  const component = renderer.create(<Icon name="link" />)

  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
