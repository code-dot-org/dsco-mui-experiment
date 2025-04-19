import { Chip, ChipProps } from '@mui/material';
import { ReactNode } from 'react';

export interface MuiChipProps extends ChipProps {
  label: ReactNode;
}

export const MuiChip = ({ label, ...rest }: MuiChipProps) => (
  <Chip label={label} {...rest} />
);
