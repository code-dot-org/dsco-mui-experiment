import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { FormControl, FormControlLabel, FormLabel, Radio } from '@mui/material';

import { MuiRadioGroup, MuiRadioGroupProps } from '../MuiRadioGroup';

const meta: Meta<typeof MuiRadioGroup> = {
  component: MuiRadioGroup,
  title: 'DesignSystem/MUI/Radio Button',
};
export default meta;

type Story = StoryObj<typeof MuiRadioGroup>;

const UsesMuiRadioGroup = (args: MuiRadioGroupProps) => {
  const [value, setValue] = React.useState('female');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
      <MuiRadioGroup
        {...args}
        aria-labelledby="demo-radio-buttons-group-label"
        name="radio-buttons-group"
        value={value}
        onChange={handleChange}
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
      </MuiRadioGroup>
    </FormControl>
  );
};

export const Default: Story = {
  render: UsesMuiRadioGroup,
};
