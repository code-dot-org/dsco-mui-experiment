import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Button, Typography } from '@mui/material';

import { MuiPopover, MuiPopoverProps } from '../MuiPopover';

const meta: Meta<typeof MuiPopover> = {
  component: MuiPopover,
  title: 'DesignSystem/MUI/Popover',
};
export default meta;

type Story = StoryObj<typeof MuiPopover>;

const UsesMuiPopover = (args: MuiPopoverProps) => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
      <Button aria-describedby={id} variant="contained" onClick={handleClick}>
        Open Popover
      </Button>
      <MuiPopover
        {...args}
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
      </MuiPopover>
    </div>
  );
};

export const Default: Story = {
  render: UsesMuiPopover,
};
