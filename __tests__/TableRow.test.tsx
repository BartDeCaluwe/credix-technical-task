import React from 'react'
import renderer from 'react-test-renderer'
import { TableRow } from '../components/TableRow'
import { TableCell } from '../components/TableCell'

test('TableRow renders TableCells', () => {
  const component = renderer.create(
    <TableRow>
      <TableCell>Cell 1</TableCell>
      <TableCell>Cell 2</TableCell>
      <TableCell>Cell 3</TableCell>
    </TableRow>
  )

  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
