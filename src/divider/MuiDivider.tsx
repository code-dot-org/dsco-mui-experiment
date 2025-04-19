import { Divider, DividerProps } from '@mui/material';

export type MuiDividerProps = DividerProps;

export const MuiDivider = ({ ...rest }: DividerProps) => (
  <Divider {...rest} />
);
