import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { TableRow } from '../components/TableRow'
import { TableCell } from '../components/TableCell'
import { Button } from '../components/Button'
import { ProgressBar } from '../components/ProgressBar'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Table/TableRow',
  component: TableRow,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof TableRow>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof TableRow> = (args) => (
  <table>
    <tbody>
      <TableRow {...args} />
    </tbody>
  </table>
)

export const Default = Template.bind({})

// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  children: [
    <TableCell key="name">a55 Debenture Series-1</TableCell>,
    <TableCell key="amount">0.22 USDC</TableCell>,
    <TableCell key="date">02.11.21</TableCell>,
    <TableCell key="progress"></TableCell>,
    <TableCell key="action"></TableCell>,
  ],
}

export const WithButton = Template.bind({})

// More on args: https://storybook.js.org/docs/react/writing-stories/args
WithButton.args = {
  children: [
    <TableCell key="name">a55 Debenture Series-1</TableCell>,
    <TableCell key="amount">0.22 USDC</TableCell>,
    <TableCell key="date">02.11.21</TableCell>,
    <TableCell key="progress"></TableCell>,
    <TableCell key="action">
      <Button label="Button" />
    </TableCell>,
  ],
}

export const WithProgressBar = Template.bind({})

// More on args: https://storybook.js.org/docs/react/writing-stories/args
WithProgressBar.args = {
  children: [
    <TableCell key="name">a55 Debenture Series-1</TableCell>,
    <TableCell key="amount">0.22 USDC</TableCell>,
    <TableCell key="date">02.11.21</TableCell>,
    <TableCell key="progress">
      <ProgressBar value={50} />
    </TableCell>,
    <TableCell key="action"></TableCell>,
  ],
}
