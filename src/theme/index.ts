import { merge } from 'lodash'

import { createTheme } from '@mui/material/styles'

import '@fontsource-variable/figtree'
import '@fontsource-variable/noto-sans'
import '@fontsource/barlow-semi-condensed'
import '@fontsource/noto-sans-math'

import './component-library-styles/colors.scss'
import './component-library-styles/font-awesome.scss'
import './component-library-styles/font.scss'
import './component-library-styles/mixins.scss'
import './component-library-styles/primitiveColors.scss'
import './component-library-styles/typography.module.scss'
import './component-library-styles/variables.scss'

import { colors } from './colors'
import { cssVar } from './utils'

// can be used like cssVar('--background-brand-teal-primary') in the code to load the variable

const typography = {
  fontFamily: '"Figtree Variable", "Figtree", "Noto Sans Variable", "Noto Sans", sans-serif',
  fontSize: 16,
  fontWeightSemiBold: 700,
}

const theme = {
  typography,
  palette: {
    cdo: colors,
    primary: {
      light: colors.background.brand.teal.light,
      main: colors.background.brand.teal.primary,
      dark: colors.background.brand.teal.strong,
    },
    secondary: {
      light: colors.background.brand.purple.light,
      main: colors.background.brand.purple.primary,
      dark: colors.background.brand.purple.strong,
    },
    background: {
      default: colors.background.neutral.primary,
      paper: colors.background.neutral.secondary,
    },
    text: {
      primary: colors.text.neutral.primary,
      secondary: colors.text.neutral.secondary,
      disabled: colors.text.neutral.disabled,
    },
    error: {
      main: colors.background.error.primary,
    },
    warning: {
      main: colors.background.warning.primary,
    },
    info: {
      main: colors.background.info.primary,
    },
    success: {
      main: colors.background.success.primary,
    },
    divider: colors.borders.neutral.primary,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: typography.fontWeightSemiBold,
          textTransform: 'none', // don't use ALL CAPS buttons
          boxShadow: 'none',
          '&:hover': { boxShadow: 'none' },
          '&:active': { boxShadow: 'none' },
        }
      }
    }
  }
}

export const lightTheme = createTheme(merge({}, theme, { palette: { mode: 'light' } }))
export const darkTheme = createTheme(merge({}, theme, { palette: { mode: 'dark' } }))

console.log('lightTheme', lightTheme)