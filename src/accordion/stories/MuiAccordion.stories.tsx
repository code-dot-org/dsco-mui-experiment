import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { MuiAccordion } from '../MuiAccordion';

const meta: Meta<typeof MuiAccordion> = {
  component: MuiAccordion,
  title: 'DesignSystem/MUI/Accordion',
};
export default meta;

type Story = StoryObj<typeof MuiAccordion>;

export const Default: Story = {
  args: {
    label: 'Introduction to Code.org',
    children: 'Code.org is a nonprofit dedicated to expanding access to computer science in schools',
  },
};
