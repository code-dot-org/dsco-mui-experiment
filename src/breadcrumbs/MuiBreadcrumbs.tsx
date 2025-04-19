import { Breadcrumbs, BreadcrumbsProps, Link } from '@mui/material';
import FontAwesomeV6Icon from '../fontAwesomeV6Icon';

import { ReactNode } from 'react';

export interface MuiBreadcrumbsProps extends BreadcrumbsProps {
  children: ReactNode;
  showHomeIcon?: boolean;
}

export const MuiBreadcrumbs = ({ children, showHomeIcon, ...rest }: MuiBreadcrumbsProps) => (
  <Breadcrumbs {...rest}>
    {showHomeIcon && (
      <Link href="/">
        <FontAwesomeV6Icon
          iconName="house"
          title="Home"
        />
      </Link>
    )}
    {children}
  </Breadcrumbs>
);
