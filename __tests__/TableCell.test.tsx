import React from 'react'
import renderer from 'react-test-renderer'
import { TableCell } from '../components/TableCell'

test('TableCell renders children', () => {
  const component = renderer.create(
    <TableCell>
      <div>TEST DIV</div>
    </TableCell>
  )

  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('TableCell accepts className', () => {
  const component = renderer.create(
    <TableCell className="bg-red-500">
      <div>TEST DIV</div>
    </TableCell>
  )

  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('TableCell aligns left', () => {
  const component = renderer.create(
    <TableCell align="left">
      <div>TEST DIV</div>
    </TableCell>
  )

  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('TableCell aligns center', () => {
  const component = renderer.create(
    <TableCell align="center">
      <div>TEST DIV</div>
    </TableCell>
  )

  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('TableCell aligns right', () => {
  const component = renderer.create(
    <TableCell align="right">
      <div>TEST DIV</div>
    </TableCell>
  )

  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
