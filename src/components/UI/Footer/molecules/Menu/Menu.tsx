import { FC } from 'react'

import { Link, Text } from '@ui-kit'
import { Flexbox } from '@components/atoms'

import { theme } from '@constants'
import { TMenuItem } from '@types'

type TMenuProps = {
  header: string
  menuItems: TMenuItem[]
}

export const Menu: FC<TMenuProps> = ({ header, menuItems }) => (
  <section style={{ width: '100%' }}>
    <Text
      color={theme.colors.grey}
      marginBottom={theme.space.sm}
      fontSize={theme.fonts.size.header.xs}
      fontHeight={theme.fonts.height.header.xs}
      fontWeight={theme.fonts.weight.semibold}
    >
      {header}
    </Text>
    <Flexbox direction="column" gap={theme.space.xs2}>
      {menuItems?.map(({ text, href }) => (
        <Link key={text} href={href} color={theme.colors.grey} hoverColor={theme.colors.grey_light}>
          {text}
        </Link>
      ))}
    </Flexbox>
  </section>
)
