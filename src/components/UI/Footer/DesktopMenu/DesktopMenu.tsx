import { FC } from 'react'
import { FOOTERMENU_CATALOG, FOOTERMENU_INFORMATION, FOOTERMENU_SERVICE, PROMO_FOOTER, theme } from '@constants'
import { Promo } from '@components'
import { Menu } from '../Menu'
import { Styled } from './styled'

export const DesktopMenu: FC = () => (
  <Styled.DesktopMenu>
    <Menu header={FOOTERMENU_CATALOG.header} menuItems={FOOTERMENU_CATALOG.menuItems} />
    <Menu header={FOOTERMENU_INFORMATION.header} menuItems={FOOTERMENU_INFORMATION.menuItems} />
    <Menu header={FOOTERMENU_SERVICE.header} menuItems={FOOTERMENU_SERVICE.menuItems} />
    <Promo
      header={PROMO_FOOTER.header}
      content={PROMO_FOOTER.content}
      headerFontSize={theme.fonts.size.regular.md}
      headerFontHeight={theme.fonts.height.regular.md}
      contentFontSize={theme.fonts.size.regular.sm}
      contentFontHeight={theme.fonts.height.regular.sm}
    />
  </Styled.DesktopMenu>
)
