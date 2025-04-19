import { cssVar } from './utils'

export const colors = {
  background: {
    accent: {
      orange: {
        light: cssVar('--background-accent-orange-light'),
        primary: cssVar('--background-accent-orange-primary')
      },
      strawberry: {
        light: cssVar('--background-accent-strawberry-light'),
        primary: cssVar('--background-accent-strawberry-primary')
      }
    },
    brand: {
      aqua: {
        extra_light: cssVar('--background-brand-aqua-extra-light'),
        light: cssVar('--background-brand-aqua-light'),
        primary: cssVar('--background-brand-aqua-primary'),
        strong: cssVar('--background-brand-aqua-strong')
      },
      purple: {
        extra_light: cssVar('--background-brand-purple-extra-light'),
        hover: cssVar('--background-brand-purple-hover'),
        light: cssVar('--background-brand-purple-light'),
        primary: cssVar('--background-brand-purple-primary'),
        primary_fixed: cssVar('--background-brand-purple-primary-fixed'),
        strong: cssVar('--background-brand-purple-strong')
      },
      teal: {
        extra_light: cssVar('--background-brand-teal-extra-light'),
        light: cssVar('--background-brand-teal-light'),
        primary: cssVar('--background-brand-teal-primary'),
        strong: cssVar('--background-brand-teal-strong')
      }
    },
    error: {
      extra_light: cssVar('--background-error-extra-light'),
      light: cssVar('--background-error-light'),
      primary: cssVar('--background-error-primary'),
      strong: cssVar('--background-error-strong')
    },
    info: {
      extra_light: cssVar('--background-info-extra-light'),
      light: cssVar('--background-info-light'),
      primary: cssVar('--background-info-primary'),
      strong: cssVar('--background-info-strong')
    },
    neutral: {
      black_fixed: cssVar('--background-neutral-black-fixed'),
      disabled: cssVar('--background-neutral-disabled'),
      octonary: cssVar('--background-neutral-octonary'),
      primary: cssVar('--background-neutral-primary'),
      primary_inverse: cssVar('--background-neutral-primary-inverse'),
      quaternary: cssVar('--background-neutral-quaternary'),
      quinary: cssVar('--background-neutral-quinary'),
      secondary: cssVar('--background-neutral-secondary'),
      senary: cssVar('--background-neutral-senary'),
      septenary: cssVar('--background-neutral-septenary'),
      tertiary: cssVar('--background-neutral-tertiary'),
      white_fixed: cssVar('--background-neutral-white-fixed')
    },
    success: {
      extra_light: cssVar('--background-success-extra-light'),
      light: cssVar('--background-success-light'),
      primary: cssVar('--background-success-primary'),
      strong: cssVar('--background-success-strong')
    },
    warning: {
      extra_light: cssVar('--background-warning-extra-light'),
      light: cssVar('--background-warning-light'),
      primary: cssVar('--background-warning-primary'),
      strong: cssVar('--background-warning-strong')
    }
  },
  borders: {
    brand: {
      aqua: {
        light: cssVar('--borders-brand-aqua-light'),
        primary: cssVar('--borders-brand-aqua-primary'),
        strong: cssVar('--borders-brand-aqua-strong')
      },
      purple: {
        light: cssVar('--borders-brand-purple-light'),
        primary: cssVar('--borders-brand-purple-primary'),
        strong: cssVar('--borders-brand-purple-strong')
      },
      teal: {
        light: cssVar('--borders-brand-teal-light'),
        primary: cssVar('--borders-brand-teal-primary'),
        strong: cssVar('--borders-brand-teal-strong')
      }
    },
    error: {
      light: cssVar('--borders-error-light'),
      primary: cssVar('--borders-error-primary'),
      strong: cssVar('--borders-error-strong')
    },
    info: {
      light: cssVar('--borders-info-light'),
      primary: cssVar('--borders-info-primary'),
      strong: cssVar('--borders-info-strong')
    },
    neutral: {
      disabled: cssVar('--borders-neutral-disabled'),
      light: cssVar('--borders-neutral-light'),
      primary: cssVar('--borders-neutral-primary'),
      solid: cssVar('--borders-neutral-solid'),
      strong: cssVar('--borders-neutral-strong')
    },
    success: {
      light: cssVar('--borders-success-light'),
      primary: cssVar('--borders-success-primary'),
      strong: cssVar('--borders-success-strong')
    },
    warning: {
      light: cssVar('--borders-warning-light'),
      primary: cssVar('--borders-warning-primary'),
      strong: cssVar('--borders-warning-strong')
    }
  },
  text: {
    brand: {
      aqua: {
        primary: cssVar('--text-brand-aqua-primary'),
        primary_fixed: cssVar('--text-brand-aqua-primary-fixed'),
        secondary: cssVar('--text-brand-aqua-secondary')
      },
      purple: {
        primary: cssVar('--text-brand-purple-primary'),
        primary_fixed: cssVar('--text-brand-purple-primary-fixed'),
        secondary: cssVar('--text-brand-purple-secondary')
      },
      teal: {
        primary: cssVar('--text-brand-teal-primary'),
        primary_fixed: cssVar('--text-brand-teal-primary-fixed'),
        secondary: cssVar('--text-brand-teal-secondary')
      }
    },
    error: {
      primary: cssVar('--text-error-primary'),
      primary_fixed: cssVar('--text-error-primary-fixed'),
      secondary: cssVar('--text-error-secondary')
    },
    info: {
      primary: cssVar('--text-info-primary'),
      primary_fixed: cssVar('--text-info-primary-fixed'),
      secondary: cssVar('--text-info-secondary')
    },
    neutral: {
      black_fixed: cssVar('--text-neutral-black-fixed'),
      disabled: cssVar('--text-neutral-disabled'),
      disabled_inverse: cssVar('--text-neutral-disabled-inverse'),
      inverse: cssVar('--text-neutral-inverse'),
      placeholder: cssVar('--text-neutral-placeholder'),
      primary: cssVar('--text-neutral-primary'),
      quaternary: cssVar('--text-neutral-quaternary'),
      secondary: cssVar('--text-neutral-secondary'),
      tertiary: cssVar('--text-neutral-tertiary'),
      white_fixed: cssVar('--text-neutral-white-fixed')
    },
    success: {
      primary: cssVar('--text-success-primary'),
      primary_fixed: cssVar('--text-success-primary-fixed'),
      secondary: cssVar('--text-success-secondary')
    },
    warning: {
      primary: cssVar('--text-warning-primary'),
      primary_fixed: cssVar('--text-warning-primary-fixed'),
      secondary: cssVar('--text-warning-secondary')
    }
  }
}
