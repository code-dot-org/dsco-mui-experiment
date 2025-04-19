import type { Meta, StoryObj } from '@storybook/react';

import { MuiTextField } from '../MuiTextField';

const meta: Meta<typeof MuiTextField> = {
  component: MuiTextField,
  title: 'DesignSystem/MUI/TextField',
};
export default meta;

type Story = StoryObj<typeof MuiTextField>;

export const Default: Story = {
  args: { 
    label: 'Text Field',
    variant: 'outlined',
    placeholder: 'Enter text here',
  },
};

export const Required: Story = {
  args: { 
    label: 'Required Field',
    variant: 'outlined',
    required: true,
  },
};

export const Disabled: Story = {
  args: { 
    label: 'Disabled Field',
    variant: 'outlined',
    disabled: true,
  },
};

export const Error: Story = {
  args: { 
    label: 'Error Field',
    variant: 'outlined',
    error: true,
    helperText: 'Error message',
  },
};
