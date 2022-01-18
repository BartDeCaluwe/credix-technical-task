import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Icon } from '../components/Icon'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Icon',
  component: Icon,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Icon>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />

export const Bar = Template.bind({})

// More on args: https://storybook.js.org/docs/react/writing-stories/args
Bar.args = {
  name: 'bar',
  width: 10,
  height: 10,
}

export const Calendar = Template.bind({})

// More on args: https://storybook.js.org/docs/react/writing-stories/args
Calendar.args = {
  name: 'calendar',
  width: 10,
  height: 10,
}

export const Link = Template.bind({})

// More on args: https://storybook.js.org/docs/react/writing-stories/args
Link.args = {
  name: 'link',
  width: 10,
  height: 10,
}
