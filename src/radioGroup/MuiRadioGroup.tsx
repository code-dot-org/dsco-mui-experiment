import { RadioGroup, RadioGroupProps } from '@mui/material';
import { ReactNode } from 'react';

export interface MuiRadioGroupProps extends RadioGroupProps {
  children: ReactNode;
}

export const MuiRadioGroup = ({ children, ...rest }: MuiRadioGroupProps) => (
  <RadioGroup {...rest}>{children}</RadioGroup>
);
