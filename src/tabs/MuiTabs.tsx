import { Tabs, TabsProps } from '@mui/material';
import { ReactNode } from 'react';

export interface MuiTabsProps extends TabsProps {
  children: ReactNode;
}

export const MuiTabs = ({ children, ...rest }: MuiTabsProps) => (
  <Tabs {...rest}>{children}</Tabs>
);
