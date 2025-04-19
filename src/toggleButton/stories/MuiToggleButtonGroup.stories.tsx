import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { MuiToggleButtonGroup, MuiToggleButtonGroupProps } from '../MuiToggleButtonGroup';
import { ToggleButton } from '@mui/material';

const meta: Meta<typeof MuiToggleButtonGroup> = {
  title: 'DesignSystem/MUI/Segmented Buttons',
  component: MuiToggleButtonGroup,
  subcomponents: { ToggleButton },
};
export default meta;

type Story = StoryObj<typeof MuiToggleButtonGroup>;

const UsesMuiToggleButtonGroup = (args: MuiToggleButtonGroupProps) => {
  const [value, setValue] = React.useState('label')

  return (
    <MuiToggleButtonGroup
      {...args}
      value={value}
      exclusive
      onChange={(_, val) => val && setValue(val)}
    >
      <ToggleButton aria-label="label" value="label">Label</ToggleButton>
      <ToggleButton aria-label="another-label" value="another-label">Another label</ToggleButton>
      <ToggleButton aria-label="text" value="text">Text</ToggleButton>
    </MuiToggleButtonGroup>
  )
}

export const Default: Story = {
  render: UsesMuiToggleButtonGroup,
}