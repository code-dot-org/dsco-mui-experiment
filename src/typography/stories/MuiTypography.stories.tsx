import type { Meta, StoryObj } from '@storybook/react';

import { MuiTypography } from '../MuiTypography';

const meta: Meta<typeof MuiTypography> = {
  component: MuiTypography,
  title: 'DesignSystem/MUI/Typography',
};
export default meta;

type Story = StoryObj<typeof MuiTypography>;

export const H1: Story = {
  args: { 
    variant: 'h1',
    children: 'Heading 1',
  },
};

export const H2: Story = {
  args: { 
    variant: 'h2',
    children: 'Heading 2',
  },
};

export const H3: Story = {
  args: { 
    variant: 'h3',
    children: 'Heading 3',
  },
};

export const Body1: Story = {
  args: { 
    variant: 'body1',
    children: 'Body 1 text. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
};

export const Body2: Story = {
  args: { 
    variant: 'body2',
    children: 'Body 2 text. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
};

export const Caption: Story = {
  args: { 
    variant: 'caption',
    children: 'Caption text',
  },
};
