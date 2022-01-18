import React from 'react'
import renderer from 'react-test-renderer'
import { TableMenu, TableMenuItem } from '../components/TableMenu'

test('TableMenu renders menu items', () => {
  const items: TableMenuItem[] = [
    {
      label: 'Plain label',
    },
    {
      label: 'Aligned to start',
      align: 'start',
    },
    {
      label: 'Aligned to center',
      align: 'center',
    },
    {
      label: 'Aligned to end',
      align: 'end',
    },
    {
      label: 'With bar icon',
      icon: 'bar',
    },
    {
      label: 'Invisible',
      isInvisible: true,
    },
  ]
  const component = renderer.create(<TableMenu items={items} />)

  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
