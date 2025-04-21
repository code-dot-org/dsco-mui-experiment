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
    <MuiRadioGroup
      {...args}
      aria-labelledby="demo-radio-buttons-group-label"
      name="radio-buttons-group"
      value={value}
      onChange={handleChange}
    >
      <FormControlLabel value="radio-1" control={<Radio />} label="RadioButton 1" />
      <FormControlLabel value="radio-2" control={<Radio />} label="RadioButton 2" />
    </MuiRadioGroup>
  );
};

export const Default: Story = {
  render: UsesMuiRadioGroup,
};
