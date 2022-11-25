import { FC } from 'react'
import { Text } from '@components'
import { theme } from '@constants'
import { ReadmoreButton } from './ReadmoreButton'

type TPromoProps = {
  header: string
  content: string
  headerFontSize: number
  headerFontHeight: number
  contentFontSize: number
  contentFontHeight: number
}

export const Promo: FC<TPromoProps> = ({
  header,
  content,
  headerFontSize,
  contentFontSize,
  headerFontHeight,
  contentFontHeight,
}) => (
  <section>
    <Text marginBottom={theme.space.md} fontSize={headerFontSize} fontHeight={headerFontHeight}>
      {header}
    </Text>
    <Text marginBottom={theme.space.md} fontSize={contentFontSize} fontHeight={contentFontHeight}>
      {content}
    </Text>
    <ReadmoreButton />
  </section>
)
