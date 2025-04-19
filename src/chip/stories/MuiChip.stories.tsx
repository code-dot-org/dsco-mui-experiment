import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Stack } from '@mui/material';
import FontAwesomeV6Icon from '../../fontAwesomeV6Icon/FontAwesomeV6Icon';

import { MuiChip } from '../MuiChip';

const meta: Meta<typeof MuiChip> = {
  component: MuiChip,
  title: 'DesignSystem/MUI/Tags',
};
export default meta;

type Story = StoryObj<typeof MuiChip>;

const ChipsExample = () => (
  <Stack direction="row" spacing={1}>
    <MuiChip 
      label="Math" 
      tooltip="Math" 
    />
    <MuiChip 
      label="Icon Left" 
      icon={<FontAwesomeV6Icon iconName="check" />} 
      tooltip="Science, English" 
    />
    <MuiChip 
      label="Icon Right" 
      deleteIcon={<FontAwesomeV6Icon iconName="check" />} 
      onDelete={() => {}} 
      tooltip="English, Science" 
    />
  </Stack>
);

export const Default: Story = {
  render: () => <ChipsExample />,
};
