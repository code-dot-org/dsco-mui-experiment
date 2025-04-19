import { merge } from 'lodash'

import { createTheme, Theme } from '@mui/material/styles'

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

const sizes = {
  body: {
    xs: {
      fontSize: cssVar('--font-size-body-xs'),
      lineHeight: 1.64,
    },
    sm: {
      fontSize: cssVar('--font-size-body-sm'),
      lineHeight: 1.54,
    },
    md: {
      fontSize: cssVar('--font-size-body-md'),
      lineHeight: 1.48,
    },
    lg: {
      fontSize: cssVar('--font-size-body-lg'),
      lineHeight: 1.4,
    }
  }
}

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
    MuiToggleButton: {
      styleOverrides: {
        root: ({ theme }: { theme: Theme }) => ({
          textTransform: 'none',
          fontWeight: theme.typography.fontWeightBold,
          color: theme.palette.text.primary,
          '&.Mui-selected': {
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.primary.contrastText,
            '&:hover': {
              backgroundColor: theme.palette.primary.main,
            },
          },
        }),
        sizeSmall: {
          padding: '0.3125rem 1rem',
          ...sizes.body.sm,
        },
        sizeMedium: {
          padding: '0.5rem 1rem',
          ...sizes.body.md,
        },
        sizeLarge: {
          padding: '0.625rem 1rem',
          ...sizes.body.lg,
        }
      },
    },
    MuiButton: {
      defaultProps: {
        variant: 'contained',
        color: 'secondary',
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          fontWeight: typography.fontWeightSemiBold,
          textTransform: 'none', // don't use ALL CAPS buttons
        },
        sizeSmall: {
          padding: '0.3125rem 1rem',
          ...sizes.body.sm,
        },
        sizeMedium: {
          padding: '0.5rem 1rem',
          ...sizes.body.md,
        },
        sizeLarge: {
          padding: '0.625rem 1rem',
          ...sizes.body.lg,
        }
      }
    },
    MuiSlider: {
      defaultProps: {
        size: 'small',
      }
    },
    MuiFormControlLabel: {
      styleOverrides: {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        label: ({ theme, ownerState }: { theme: Theme; ownerState: any }) => ({
          fontSize: {
            'small': sizes.body.sm.fontSize,
            'medium': sizes.body.md.fontSize,
            'large': sizes.body.lg.fontSize,
          }[(ownerState?.control?.props?.size || 'medium') as string],
          fontWeight: theme.typography.fontWeightMedium,
        })
      }
    },
    MuiAccordion: {
      defaultProps: {
        elevation: 0,
      },
      styleOverrides: {
        root: ({ theme }: { theme: Theme }) => ({
          border: `1px solid ${theme.palette.divider}`,
        }),
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: ({ theme }: { theme: Theme }) => ({
          backgroundColor: theme.palette.common.white,
          fontSize: sizes.body.md.fontSize,
          fontWeight: theme.typography.fontWeightBold,
          padding: '.75rem 1.25rem',
          '&.Mui-expanded': {
            minHeight: 0,
          },
        }),
        content: {
          margin: 0,
          '&.Mui-expanded': {
            margin: 0,
          },
        },
      },
    },
    MuiAccordionDetails: {
      styleOverrides: {
        root: ({ theme }: { theme: Theme }) => ({
          fontSize: sizes.body.md.fontSize,
          borderTop: `1px solid ${theme.palette.divider}`,
          padding: '1.25rem',
        }),
      },
    }
  }
}

export const lightTheme = createTheme(merge({}, theme, { palette: { mode: 'light' } }))
export const darkTheme = createTheme(merge({}, theme, { palette: { mode: 'dark' } }))

console.log('lightTheme', lightTheme)
