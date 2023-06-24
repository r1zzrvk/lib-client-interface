import { FC } from 'react'
import { PROMO_FOOTER, theme } from '@constants'
import { Text, Accordion, Spacer } from '@ui-kit'
import { Promo } from '@components/molecules'
import { TFooterData } from '@types'
import { Styled } from './styled'

type TTabletMenuProps = {
  footerData: TFooterData
}

export const TabletMenu: FC<TTabletMenuProps> = ({ footerData }) => {
  const { catalog, information, service } = footerData || {}

  return (
    <Styled.TabletMenu>
      <Accordion title={catalog?.header}>
        {catalog?.menuItems.map(({ text, href }) => (
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
      <Accordion title={information?.header}>
        {information?.menuItems.map(({ text, href }) => (
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
      <Accordion title={service?.header}>
        {service?.menuItems.map(({ text, href }) => (
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
}
