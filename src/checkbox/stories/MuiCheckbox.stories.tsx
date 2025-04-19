import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { MuiCheckbox } from '../MuiCheckbox';

const meta: Meta<typeof MuiCheckbox> = {
  component: MuiCheckbox,
  title: 'DesignSystem/MUI/Checkbox',
};
export default meta;

type Story = StoryObj<typeof MuiCheckbox>;

export const Default: Story = {
  args: { 
    label: 'Checkbox Label',
  },
};
