import { FC } from 'react'
import { PROMO_BANNER, theme } from '@constants'
import { Promo } from '@components/molecules'
import { BackgroundImage, PromoBackground } from './atoms'

export const TipsBanner: FC = () => (
  <BackgroundImage src="https://i.postimg.cc/MGR898Wp/patrick-perkins-3wyl-Drjx-H-E-unsplash-1.jpg">
    <PromoBackground>
      <Promo
        header={PROMO_BANNER.header}
        content={PROMO_BANNER.content}
        buttonText="Explore now"
        headerFontHeight={theme.fonts.height.header.sm}
        headerFontSize={theme.fonts.size.header.sm}
        contentFontSize={theme.fonts.size.regular.md}
        contentFontHeight={theme.fonts.height.regular.md}
      />
    </PromoBackground>
  </BackgroundImage>
)
