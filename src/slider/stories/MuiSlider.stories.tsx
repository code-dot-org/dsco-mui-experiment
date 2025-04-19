import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { MuiSlider } from '../MuiSlider';

const meta: Meta<typeof MuiSlider> = {
  component: MuiSlider,
  title: 'DesignSystem/MUI/Slider',
};
export default meta;

type Story = StoryObj<typeof MuiSlider>;

export const Default: Story = {
  args: { 
    label: 'Slider Label',
    min: 0,
    max: 100,
    defaultValue: 50,
  },
};

export const WithoutLabel: Story = {
  args: {
    min: 0,
    max: 100,
    defaultValue: 50,
  },
};
