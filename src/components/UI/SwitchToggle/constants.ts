import { theme } from '@constants'

export const sizePresets = {
  md: {
    switch: {
      width: '50px',
      height: '28px',
    },
    round: {
      height: '24px',
      width: '24px',
      margin: '2px',
      left: '22px',
    },
    label: {
      color: theme.colors.grey,
      fontHeightMob: theme.fonts.height.regular.sm,
      fontSizeMob: theme.fonts.size.regular.sm,
      fontWeightMob: theme.fonts.weight.regular,
    },
  },
  lg: {
    switch: {
      width: '60px',
      height: '34px',
    },
    round: {
      height: '28px',
      width: '28px',
      margin: '3px',
      left: '26px',
    },
    label: {
      color: theme.colors.grey,
      fontHeightMob: theme.fonts.height.regular.sm,
      fontSizeMob: theme.fonts.size.regular.sm,
      fontWeightMob: theme.fonts.weight.regular,
    },
  },
} as const
