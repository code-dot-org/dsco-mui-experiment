import { TextField, TextFieldProps } from '@mui/material';

export type MuiTextFieldProps = TextFieldProps;

export const MuiTextField = ({ ...rest }: MuiTextFieldProps) => (
  <TextField {...rest} />
);
