import { Slider, SliderProps, Typography } from '@mui/material';

export interface MuiSliderProps extends SliderProps {
  label?: string;
}

export const MuiSlider = ({ label, ...rest }: MuiSliderProps) => (
  <>
    {label && (
      <Typography gutterBottom sx={{ fontSize: '0.875rem', marginBottom: '-0.6rem' }} fontWeight='bold'>
        {label}
      </Typography>
    )}
    <Slider {...rest} />
  </>
);
