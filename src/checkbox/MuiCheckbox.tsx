import { Checkbox, CheckboxProps, FormControlLabel } from '@mui/material';

export interface MuiCheckboxProps extends CheckboxProps {
  label: string;
  size?: 'small' | 'medium' | 'large';
}

export const MuiCheckbox = ({ label, size = 'medium', ...rest }: MuiCheckboxProps) => (
  <FormControlLabel
    control={<Checkbox size={size} {...rest} />}
    label={label}
  />
);
