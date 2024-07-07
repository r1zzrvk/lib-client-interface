import { FC } from 'react'

import { Promo } from '@components/molecules'
import { Flexbox } from '@components/atoms'

import { PROMO_FOOTER, theme } from '@constants'
import { TFooterData } from '@types'

import { Menu } from '../Menu'
import { Styled } from './styled'

type TDesktopMenuProps = {
  footerData: TFooterData
  onSignClick: () => void
}

export const DesktopMenu: FC<TDesktopMenuProps> = ({ footerData, onSignClick }) => {
  const { catalog, information } = footerData || {}

  return (
    <Styled.DesktopMenu>
      <Flexbox gap={120}>
        <Menu header={catalog?.header} menuItems={catalog?.menuItems} />
        <Menu header={information?.header} menuItems={information?.menuItems} />
      </Flexbox>
      <Promo
        header={PROMO_FOOTER.header}
        content={PROMO_FOOTER.content}
        buttonText={PROMO_FOOTER.buttonText}
        headerFontSize={theme.fonts.size.regular.md}
        headerFontHeight={theme.fonts.height.regular.md}
        contentFontSize={theme.fonts.size.regular.sm}
        contentFontHeight={theme.fonts.height.regular.sm}
        onButtonClick={onSignClick}
      />
    </Styled.DesktopMenu>
  )
}
