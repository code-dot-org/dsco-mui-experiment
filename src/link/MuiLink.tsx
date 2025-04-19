import { Link, LinkProps } from '@mui/material';
import { ReactNode } from 'react';

export interface MuiLinkProps extends LinkProps {
  children: ReactNode;
}

export const MuiLink = ({ children, ...rest }: MuiLinkProps) => (
  <Link {...rest}>{children}</Link>
);
