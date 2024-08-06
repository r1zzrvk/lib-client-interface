import { FC } from 'react'

import { Text } from '@ui-kit'

import { theme } from '@constants'

import { Flexbox } from '../Flexbox'

type TLabelWithTextProps = {
  label: string
  text: string
}

export const LabelWithText: FC<TLabelWithTextProps> = ({ label, text }) => (
  <Flexbox gap={theme.space.xs2}>
    <Text
      color={theme.colors.grey}
      fontSizeMob={theme.fonts.size.regular.md}
      fontHeightMob={theme.fonts.height.regular.md}
      fontWeightMob={theme.fonts.weight.regular}
      fontSize={theme.fonts.size.regular.md}
      fontHeight={theme.fonts.height.regular.md}
      fontWeight={theme.fonts.weight.regular}
    >
      {label}
    </Text>
    <Text
      color={theme.colors.main}
      fontSizeMob={theme.fonts.size.regular.md}
      fontHeightMob={theme.fonts.height.regular.md}
      fontWeightMob={theme.fonts.weight.regular}
    >
      {text}
    </Text>
  </Flexbox>
)
