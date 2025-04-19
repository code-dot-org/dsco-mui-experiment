import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Button, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';

import { MuiDialog, MuiDialogProps } from '../MuiDialog';

const meta: Meta<typeof MuiDialog> = {
  component: MuiDialog,
  title: 'DesignSystem/MUI/Dialog',
};
export default meta;

type Story = StoryObj<typeof MuiDialog>;

const UsesMuiDialog = (args: MuiDialogProps) => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button variant="outlined" onClick={handleOpen}>
        Open Dialog
      </Button>
      <MuiDialog
        {...args}
        open={open}
        onClose={handleClose}
      >
        <DialogTitle>Dialog Title</DialogTitle>
        <DialogContent>
          <DialogContentText>
            This is a sample dialog content. You can put any content here.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose} autoFocus>Confirm</Button>
        </DialogActions>
      </MuiDialog>
    </>
  );
};

export const Default: Story = {
  render: UsesMuiDialog,
};
