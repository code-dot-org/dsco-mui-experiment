import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { MuiSwitch } from '../MuiSwitch';

const meta: Meta<typeof MuiSwitch> = {
  component: MuiSwitch,
  title: 'DesignSystem/MUI/Toggle',
};
export default meta;

type Story = StoryObj<typeof MuiSwitch>;

export const Default: Story = {
  args: { 
    label: 'Switch Label',
  },
};
