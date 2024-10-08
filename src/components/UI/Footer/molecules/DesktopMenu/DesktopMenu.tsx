import { FC } from 'react'

import { Promo } from '@components/molecules'
import { Flexbox } from '@components/atoms'

import { PROMO_FOOTER, theme } from '@constants'
import { TFooterData } from '@types'

import { Menu } from '../Menu'
import { Styled } from './styled'
import { Background } from '../../atoms'

type TDesktopMenuProps = {
  footerData: TFooterData
  onSignClick: () => void
}

export const DesktopMenu: FC<TDesktopMenuProps> = ({ footerData, onSignClick }) => {
  const { catalog, information } = footerData || {}

  return (
    <Styled.DesktopMenu>
      <Flexbox gap={theme.space.lg} width="100%">
        <Background>
          <Menu header={catalog?.header} menuItems={catalog?.menuItems} />
        </Background>
        <Background>
          <Menu header={information?.header} menuItems={information?.menuItems} />
        </Background>
      </Flexbox>
      <Background>
        <Promo
          textColor={theme.colors.grey}
          header={PROMO_FOOTER.header}
          content={PROMO_FOOTER.content}
          buttonText={PROMO_FOOTER.buttonText}
          headerFontSize={theme.fonts.size.header.xs}
          headerFontHeight={theme.fonts.height.header.xs}
          contentFontSize={theme.fonts.size.regular.md}
          contentFontHeight={theme.fonts.height.regular.md}
          onButtonClick={onSignClick}
        />
      </Background>
    </Styled.DesktopMenu>
  )
}
