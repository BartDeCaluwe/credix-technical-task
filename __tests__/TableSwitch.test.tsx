import React from 'react'
import renderer from 'react-test-renderer'
import { TableSwitch } from '../components/TableSwitch'

test('TableRow renders active state', () => {
  const component = renderer.create(
    <TableSwitch isActive={true} label="Table switch" />
  )

  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('TableRow renders inactive state', () => {
  const component = renderer.create(
    <TableSwitch isActive={false} label="Table switch" />
  )

  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('TableRow has a min width', () => {
  const component = renderer.create(<TableSwitch isActive={false} label="T" />)

  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
