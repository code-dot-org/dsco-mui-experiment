import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@mui/material';

import { MuiTooltip } from '../MuiTooltip';

const meta: Meta<typeof MuiTooltip> = {
  component: MuiTooltip,
  title: 'DesignSystem/MUI/Tooltip',
};
export default meta;

type Story = StoryObj<typeof MuiTooltip>;

export const Default: Story = {
  args: { 
    title: 'Tooltip Text',
    arrow: true,
    placement: 'top',
    children: <Button variant="contained">Hover Me</Button>,
  },
};
