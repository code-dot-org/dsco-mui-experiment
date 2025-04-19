import { Dialog, DialogProps } from '@mui/material';
import { ReactNode } from 'react';

export interface MuiDialogProps extends DialogProps {
  children: ReactNode;
}

export const MuiDialog = ({ children, ...rest }: MuiDialogProps) => (
  <Dialog {...rest}>{children}</Dialog>
);
