import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { MuiButton } from '../MuiButton';

const meta: Meta<typeof MuiButton> = {
  component: MuiButton,
  title: 'DesignSystem/MUI/Button',
};
export default meta;

type Story = StoryObj<typeof MuiButton>;

export const Default: Story = {
  args: { 
    children: 'Button' 
  },
};
