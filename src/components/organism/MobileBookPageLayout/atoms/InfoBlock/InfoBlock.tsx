import { Flexbox } from '@components/atoms'
import { theme } from '@constants'
import { Text } from '@ui-kit'
import { FC, ReactNode } from 'react'

type TInfoBlockProps = {
  title: string
  children: ReactNode
}

export const InfoBlock: FC<TInfoBlockProps> = ({ children, title }) => (
  <>
    <Text
      color={theme.colors.grey}
      fontSizeMob={theme.fonts.size.header.xs}
      fontHeightMob={theme.fonts.height.header.xs}
      fontWeightMob={theme.fonts.weight.medium}
      marginBottomMob={theme.space.xs}
    >
      {title}
    </Text>
    <Flexbox direction="column" gap={theme.space.xs2}>
      {children}
    </Flexbox>
  </>
)
