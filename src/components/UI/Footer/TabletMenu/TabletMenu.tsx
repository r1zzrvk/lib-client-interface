import { FOOTERMENU_CATALOG, FOOTERMENU_INFORMATION, FOOTERMENU_SERVICE, theme } from '@constants'
import { Text, Accordion, Spacer } from '@components'
import { FC } from 'react'
import { Styled } from './styled'
import { Promo } from '../Promo'

export const TabletMenu: FC = () => (
  <Styled.TabletMenu>
    <Accordion title={FOOTERMENU_CATALOG.header}>
      {FOOTERMENU_CATALOG.menuItems.map(({ text, href }) => (
        <Text
          key={text}
          href={href}
          fontSize={theme.fonts.size.regular.sm}
          fontHeight={theme.fonts.height.regular.sm}
          asLink
        >
          {text}
        </Text>
      ))}
    </Accordion>
    <Accordion title={FOOTERMENU_INFORMATION.header}>
      {FOOTERMENU_INFORMATION.menuItems.map(({ text, href }) => (
        <Text
          key={text}
          href={href}
          fontSize={theme.fonts.size.regular.sm}
          fontHeight={theme.fonts.height.regular.sm}
          asLink
        >
          {text}
        </Text>
      ))}
    </Accordion>
    <Accordion title={FOOTERMENU_SERVICE.header}>
      {FOOTERMENU_SERVICE.menuItems.map(({ text, href }) => (
        <Text
          key={text}
          href={href}
          fontSize={theme.fonts.size.regular.sm}
          fontHeight={theme.fonts.height.regular.sm}
          asLink
        >
          {text}
        </Text>
      ))}
    </Accordion>
    <Spacer size={theme.space.xl} samespace />
    <Promo />
  </Styled.TabletMenu>
)
