import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { MuiAlert } from '../MuiAlert';

const meta: Meta<typeof MuiAlert> = {
  component: MuiAlert,
  title: 'DesignSystem/MUI/Alert',
};
export default meta;

type Story = StoryObj<typeof MuiAlert>;

export const Default: Story = {
  args: { 
    children: 'This is an alert message' 
  },
};
