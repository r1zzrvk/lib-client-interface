import { FC } from 'react'

import { Flexbox } from '@components/atoms'
import { Promo } from '@components/molecules'
import { Accordion, Link, Spacer } from '@ui-kit'

import { PROMO_FOOTER, theme } from '@constants'
import { TFooterData } from '@types'

import { Styled } from './styled'
import { Background } from '../../atoms'

type TTabletMenuProps = {
  footerData: TFooterData
  onSignClick: () => void
}

export const TabletMenu: FC<TTabletMenuProps> = ({ footerData, onSignClick }) => {
  const { catalog, information } = footerData || {}

  return (
    <Styled.TabletMenu>
      <Accordion title={catalog?.header}>
        <Flexbox direction="column" gap={theme.space.xs2}>
          {catalog?.menuItems.map(({ text, href }) => (
            <Link key={text} href={href} color={theme.colors.grey} hoverColor={theme.colors.grey_light}>
              {text}
            </Link>
          ))}
        </Flexbox>
      </Accordion>
      <Spacer size={theme.space.sm} samespace />
      <Accordion title={information?.header}>
        <Flexbox direction="column" gap={theme.space.xs2}>
          {information?.menuItems.map(({ text, href }) => (
            <Link key={text} href={href} color={theme.colors.grey} hoverColor={theme.colors.grey_light}>
              {text}
            </Link>
          ))}
        </Flexbox>
      </Accordion>
      <Spacer size={theme.space.md} samespace />
      <Background>
        <Promo
          textColor={theme.colors.grey}
          header={PROMO_FOOTER.header}
          content={PROMO_FOOTER.content}
          buttonText={PROMO_FOOTER.buttonText}
          headerFontSize={theme.fonts.size.regular.md}
          headerFontHeight={theme.fonts.height.regular.md}
          contentFontSize={theme.fonts.size.regular.sm}
          contentFontHeight={theme.fonts.height.regular.sm}
          onButtonClick={onSignClick}
        />
      </Background>
    </Styled.TabletMenu>
  )
}
