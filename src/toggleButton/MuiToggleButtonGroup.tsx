import { ToggleButtonGroup, ToggleButtonGroupProps } from '@mui/material';
import { ReactNode } from 'react';

export interface MuiToggleButtonGroupProps extends ToggleButtonGroupProps {
  children: ReactNode;
}

export const MuiToggleButtonGroup = ({ children, ...rest }: MuiToggleButtonGroupProps) => (
  <ToggleButtonGroup {...rest}>{children}</ToggleButtonGroup>
);
