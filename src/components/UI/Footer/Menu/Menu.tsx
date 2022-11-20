import { FC } from 'react'
import { Text } from '@components'
import { theme } from '@constants'
import { TMenuItem } from '@types'

type TMenuProps = {
  header: string
  menuItems: TMenuItem[]
}

export const Menu: FC<TMenuProps> = ({ header, menuItems }) => (
  <section>
    <Text
      marginBottom={theme.space.sm}
      fontSize={theme.fonts.size.regular.md}
      fontHeight={theme.fonts.height.regular.md}
      fontWeight={theme.fonts.weight.medium}
    >
      {header}
    </Text>
    {menuItems.map(({ text, href }) => (
      <Text
        key={text}
        marginBottom={theme.space.xs2}
        fontSize={theme.fonts.size.regular.sm}
        fontHeight={theme.fonts.height.regular.sm}
        asLink
        href={href}
      >
        {text}
      </Text>
    ))}
  </section>
)
