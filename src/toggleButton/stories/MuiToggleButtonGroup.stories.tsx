import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { MuiToggleButtonGroup, MuiToggleButtonGroupProps } from '../MuiToggleButtonGroup';
import { ToggleButton } from '@mui/material';

const meta: Meta<typeof MuiToggleButtonGroup> = {
  title: 'DesignSystem/MUI/ToggleButtonGroup',
  component: MuiToggleButtonGroup,
  subcomponents: { ToggleButton },
};
export default meta;

type Story = StoryObj<typeof MuiToggleButtonGroup>;

const UsesMuiToggleButtonGroup = (args: MuiToggleButtonGroupProps) => {
  const [value, setValue] = React.useState('web')

  return (
    <MuiToggleButtonGroup
      {...args}
      value={value}
      exclusive
      onChange={(_, val) => val && setValue(val)}
    >
      <ToggleButton value="web">Web</ToggleButton>
      <ToggleButton value="android">Android</ToggleButton>
      <ToggleButton value="ios">iOS</ToggleButton>
    </MuiToggleButtonGroup>
  )
}

export const Default: Story = {
  render: UsesMuiToggleButtonGroup,
}