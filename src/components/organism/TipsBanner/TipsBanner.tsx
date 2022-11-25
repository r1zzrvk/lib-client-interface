import { FC } from 'react'
import { PROMO_BANNER, theme } from '@constants'
import { Promo } from '@components'
import { BackgroundImage, PromoBackground } from './atoms'

export const TipsBanner: FC = () => (
  <BackgroundImage src="https://i.ibb.co/8bZr03r/patrick-perkins-3wyl-Drjx-H-E-unsplash-1.png">
    <PromoBackground>
      <Promo
        header={PROMO_BANNER.header}
        content={PROMO_BANNER.content}
        headerFontHeight={theme.fonts.height.header.sm}
        headerFontSize={theme.fonts.size.header.sm}
        contentFontSize={theme.fonts.size.regular.md}
        contentFontHeight={theme.fonts.height.regular.md}
      />
    </PromoBackground>
  </BackgroundImage>
)
