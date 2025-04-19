import type { Meta, StoryObj } from '@storybook/react';

import { MuiLink } from '../MuiLink';

const meta: Meta<typeof MuiLink> = {
  component: MuiLink,
  title: 'DesignSystem/MUI/Link',
};
export default meta;

type Story = StoryObj<typeof MuiLink>;

export const Default: Story = {
  args: { 
    children: 'Link Text',
    href: '#',
    underline: 'hover',
  },
};
