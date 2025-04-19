import { Menu, MenuProps } from '@mui/material';
import { ReactNode } from 'react';

export interface MuiMenuProps extends MenuProps {
  children: ReactNode;
}

export const MuiMenu = ({ children, ...rest }: MuiMenuProps) => (
  <Menu {...rest}>{children}</Menu>
);
