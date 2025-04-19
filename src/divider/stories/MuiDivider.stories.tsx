import type { Meta, StoryObj } from '@storybook/react';

import { MuiDivider } from '../MuiDivider';

const meta: Meta<typeof MuiDivider> = {
  component: MuiDivider,
  title: 'DesignSystem/MUI/Divider',
};
export default meta;

type Story = StoryObj<typeof MuiDivider>;

export const Default: Story = {
  args: {
    variant: 'fullWidth',
  },
  decorators: [
    (Story) => (
      <div style={{ padding: '20px' }}>
        <div>Content above</div>
        <Story />
        <div>Content below</div>
      </div>
    ),
  ],
};
