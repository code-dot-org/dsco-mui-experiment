import { MuiSlider } from '../MuiSlider'

export default {
  component: MuiSlider,
  title: 'DesignSystem/MUI/Slider',
}

export const Default = {
  args: { 
    label: 'Slider Label',
    min: 0,
    max: 100,
    defaultValue: 50,
  },
}

export const WithoutLabel = {
  args: {
    min: 0,
    max: 100,
    defaultValue: 50,
  },
}
