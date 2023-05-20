import { FC } from 'react'
import { FOOTERMENU_CATALOG, FOOTERMENU_INFORMATION, FOOTERMENU_SERVICE, PROMO_FOOTER, theme } from '@constants'
import { Text, Accordion, Spacer } from '@ui-kit'
import { Promo } from '@components/molecules'
import { Styled } from './styled'

export const TabletMenu: FC = () => (
  <Styled.TabletMenu>
    <Accordion title={FOOTERMENU_CATALOG.header}>
      {FOOTERMENU_CATALOG.menuItems.map(({ text, href }) => (
        <Text
          key={text}
          href={href}
          fontSize={theme.fonts.size.regular.sm}
          fontHeight={theme.fonts.height.regular.sm}
          marginBottom={theme.space.xs2}
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
          marginBottom={theme.space.xs2}
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
          marginBottom={theme.space.xs2}
          asLink
        >
          {text}
        </Text>
      ))}
    </Accordion>
    <Spacer size={theme.space.xl} samespace />
    <Promo
      header={PROMO_FOOTER.header}
      content={PROMO_FOOTER.content}
      headerFontSize={theme.fonts.size.regular.md}
      headerFontHeight={theme.fonts.height.regular.md}
      contentFontSize={theme.fonts.size.regular.sm}
      contentFontHeight={theme.fonts.height.regular.sm}
    />
  </Styled.TabletMenu>
)
