import { Flexbox } from '@components/atoms'
import { theme } from '@constants'
import { Text } from '@ui-kit'
import { FC, ReactNode } from 'react'

type TInfoBlockProps = {
  title: string
  children: ReactNode
  gap?: number
}

export const PageInfoBlock: FC<TInfoBlockProps> = ({ children, title, gap = theme.space.xs2 }) => (
  <>
    <Text
      color={theme.colors.grey}
      fontSizeMob={theme.fonts.size.header.xs}
      fontHeightMob={theme.fonts.height.header.xs}
      fontWeightMob={theme.fonts.weight.medium}
      marginBottomMob={theme.space.xs}
      fontSize={theme.fonts.size.header.sm}
      fontHeight={theme.fonts.height.header.sm}
      fontWeight={theme.fonts.weight.medium}
      marginBottom={theme.space.xs3}
    >
      {title}
    </Text>
    <Flexbox direction="column" gap={gap}>
      {children}
    </Flexbox>
  </>
)
