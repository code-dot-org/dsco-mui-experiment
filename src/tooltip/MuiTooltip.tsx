import { Tooltip, TooltipProps } from '@mui/material';
import { ReactElement } from 'react';

export interface MuiTooltipProps extends Omit<TooltipProps, 'children'> {
  children: ReactElement;
}

export const MuiTooltip = ({ children, ...rest }: MuiTooltipProps) => (
  <Tooltip {...rest}>{children}</Tooltip>
);
