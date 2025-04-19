import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import CloseIcon from '@mui/icons-material/Close';

import { MuiIconButton } from '../MuiIconButton';

const meta: Meta<typeof MuiIconButton> = {
  component: MuiIconButton,
  title: 'DesignSystem/MUI/CloseButton',
};
export default meta;

type Story = StoryObj<typeof MuiIconButton>;

export const Default: Story = {
  args: { 
    children: <CloseIcon />,
    'aria-label': 'close',
  },
};
