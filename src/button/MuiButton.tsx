import { Button, ButtonProps} from '@mui/material';
import { ReactNode } from 'react';

export interface MuiButtonProps extends ButtonProps {
  children: ReactNode;
}

export const MuiButton = ({ children, ...rest }: MuiButtonProps) => (
  <Button {...rest}>{children}</Button>
);
