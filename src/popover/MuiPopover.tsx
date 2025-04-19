import { Popover, PopoverProps } from '@mui/material';
import { ReactNode } from 'react';

export interface MuiPopoverProps extends PopoverProps {
  children: ReactNode;
}

export const MuiPopover = ({ children, ...rest }: MuiPopoverProps) => (
  <Popover {...rest}>{children}</Popover>
);
