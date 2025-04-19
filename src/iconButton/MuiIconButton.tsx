import { IconButton, IconButtonProps } from '@mui/material';
import { ReactNode } from 'react';

export interface MuiIconButtonProps extends IconButtonProps {
  children: ReactNode;
}

export const MuiIconButton = ({ children, ...rest }: MuiIconButtonProps) => (
  <IconButton {...rest}>{children}</IconButton>
);
