import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { TableRow } from '../components/TableRow'
import { TableCell } from '../components/TableCell'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Table/TableRow',
  component: TableRow,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof TableRow>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof TableRow> = (args) => (
  <TableRow {...args} />
)

export const Active = Template.bind({})

// More on args: https://storybook.js.org/docs/react/writing-stories/args
Active.args = {
  children: [
    <TableCell key="button">
      <button>Button</button>
    </TableCell>,
    <TableCell key="hello">Hello</TableCell>,
  ],
}
