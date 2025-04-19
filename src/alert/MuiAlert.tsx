import { Alert, AlertProps } from '@mui/material';
import { ReactNode } from 'react';

export interface MuiAlertProps extends AlertProps {
  children: ReactNode;
}

export const MuiAlert = ({ children, ...rest }: MuiAlertProps) => (
  <Alert {...rest}>{children}</Alert>
);
