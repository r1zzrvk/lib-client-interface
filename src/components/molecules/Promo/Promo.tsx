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
}) => (
  <section>
    <Text
      marginBottom={theme.space.md}
      fontSize={headerFontSize}
      fontHeight={headerFontHeight}
      fontWeight={theme.fonts.weight.medium}
    >
      {header}
    </Text>
    <Text marginBottom={theme.space.md} fontSize={contentFontSize} fontHeight={contentFontHeight}>
      {content}
    </Text>
    <ReadmoreButton buttonText={buttonText} />
  </section>
)
