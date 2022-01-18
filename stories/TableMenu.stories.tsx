import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { TableMenu } from '../components/TableMenu'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Table/TableMenu',
  component: TableMenu,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof TableMenu>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof TableMenu> = (args) => (
  <TableMenu {...args} />
)

export const Default = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  items: [
    {
      label: 'Name',
      icon: 'bar',
    },
    {
      icon: 'link',
      label: 'Amount',
    },
    {
      icon: 'calendar',
      label: 'Date',
    },
    {
      label: 'Paid',
      isInvisible: true,
    },
    {
      label: 'Action',
      isInvisible: true,
    },
  ],
}

export const WithOtherLabel = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
WithOtherLabel.args = {
  items: [
    {
      label: 'Name',
      icon: 'bar',
    },
    {
      icon: 'link',
      label: 'Principal',
    },
    {
      icon: 'calendar',
      label: 'Date',
    },
    {
      label: 'Paid',
      isInvisible: true,
    },
    {
      label: 'Action',
      isInvisible: true,
    },
  ],
}

export const WithVisibleLabel = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
WithVisibleLabel.args = {
  items: [
    {
      label: 'Name',
      icon: 'bar',
    },
    {
      icon: 'link',
      label: 'Amount',
    },
    {
      icon: 'calendar',
      label: 'Date',
    },
    {
      label: 'Paid',
    },
    {
      label: 'Action',
      isInvisible: true,
    },
  ],
}
