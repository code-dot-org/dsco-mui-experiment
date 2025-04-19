import { Chip, ChipProps } from '@mui/material';
import { ReactNode } from 'react';
import { MuiTooltip } from '../tooltip/MuiTooltip';

export interface MuiChipProps extends ChipProps {
  label: ReactNode;
  tooltip?: string;
}

export const MuiChip = ({ label, tooltip, ...rest }: MuiChipProps) => {
  const chipComponent = <Chip label={label} {...rest} />;
  
  return tooltip ? (
    <MuiTooltip title={tooltip}>{chipComponent}</MuiTooltip>
  ) : (
    chipComponent
  );
};
