import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Button, MenuItem } from '@mui/material';

import { MuiMenu, MuiMenuProps } from '../MuiMenu';

const meta: Meta<typeof MuiMenu> = {
  component: MuiMenu,
  title: 'DesignSystem/MUI/MuiMenu',
};
export default meta;

type Story = StoryObj<typeof MuiMenu>;

const UsesMuiMenu = (args: MuiMenuProps) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Open Menu
      </Button>
      <MuiMenu
        {...args}
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </MuiMenu>
    </div>
  );
};

export const Default: Story = {
  render: UsesMuiMenu,
};
