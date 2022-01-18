import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { TableSwitch } from '../components/TableSwitch'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Table/TableSwitch',
  component: TableSwitch,
} as ComponentMeta<typeof TableSwitch>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof TableSwitch> = (args) => (
  <TableSwitch {...args} />
)

export const Active = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Active.args = {
  isActive: true,
  label: 'Investments',
}

export const Inactive = Template.bind({})
Inactive.args = {
  isActive: false,
  label: 'Investments',
}
