import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { ProgressBar } from '../components/ProgressBar'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'ProgressBar',
  component: ProgressBar,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof ProgressBar>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ProgressBar> = (args) => (
  <ProgressBar {...args} />
)

export const Zero = Template.bind({})

// More on args: https://storybook.js.org/docs/react/writing-stories/args
Zero.args = {
  value: 0,
}

export const Half = Template.bind({})

// More on args: https://storybook.js.org/docs/react/writing-stories/args
Half.args = {
  value: 50,
}

export const Full = Template.bind({})

// More on args: https://storybook.js.org/docs/react/writing-stories/args
Full.args = {
  value: 100,
}
