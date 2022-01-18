import React from 'react'
import renderer from 'react-test-renderer'
import { ProgressBar } from '../components/ProgressBar'

test('value is 0', () => {
  const component = renderer.create(<ProgressBar value={0} />)

  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('value is 50', () => {
  const component = renderer.create(<ProgressBar value={50} />)

  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('value is 100', () => {
  const component = renderer.create(<ProgressBar value={50} />)

  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
