import { Typography, TypographyProps } from '@mui/material';
import { ReactNode } from 'react';

export interface MuiTypographyProps extends TypographyProps {
  children: ReactNode;
}

export const MuiTypography = ({ children, ...rest }: MuiTypographyProps) => (
  <Typography {...rest}>{children}</Typography>
);
