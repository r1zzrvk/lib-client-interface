import { FC } from 'react'

import { Text } from '@ui-kit'

import { theme } from '@constants'

import { ReadmoreButton } from './ReadmoreButton'

type TPromoProps = {
  header: string
  content: string
  headerFontSize: number
  headerFontHeight: number
  contentFontSize: number
  contentFontHeight: number
  onButtonClick: () => void
  buttonText?: string
}

export const Promo: FC<TPromoProps> = ({
  header,
  content,
  buttonText = 'Read more',
  headerFontSize,
  contentFontSize,
  headerFontHeight,
  contentFontHeight,
  onButtonClick,
}) => (
  <section>
    <Text
      marginBottom={theme.space.md}
      fontSize={headerFontSize}
      fontHeight={headerFontHeight}
      fontWeight={theme.fonts.weight.medium}
      fontWeightMob={theme.fonts.weight.medium}
      fontSizeMob={theme.fonts.size.header.sm}
      fontHeightMob={theme.fonts.height.header.sm}
      marginBottomMob={theme.space.sm}
    >
      {header}
    </Text>
    <Text
      marginBottom={theme.space.md}
      fontSize={contentFontSize}
      fontHeight={contentFontHeight}
      fontSizeMob={theme.fonts.size.regular.md}
      fontHeightMob={theme.fonts.height.regular.md}
      marginBottomMob={theme.space.md}
    >
      {content}
    </Text>
    <ReadmoreButton buttonText={buttonText} onClick={onButtonClick} />
  </section>
)
