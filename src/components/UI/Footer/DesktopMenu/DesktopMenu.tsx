import { FC } from 'react'
import { PROMO_FOOTER, theme } from '@constants'
import { Promo } from '@components/molecules'
import { TFooterData } from '@types'
import { Menu } from '../Menu'
import { Styled } from './styled'

type TDesktopMenuProps = {
  footerData: TFooterData
}

export const DesktopMenu: FC<TDesktopMenuProps> = ({ footerData }) => {
  const { catalog, information, service } = footerData || {}

  return (
    <Styled.DesktopMenu>
      <Menu header={catalog?.header} menuItems={catalog?.menuItems} />
      <Menu header={information?.header} menuItems={information?.menuItems} />
      <Menu header={service?.header} menuItems={service?.menuItems} />
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
}
