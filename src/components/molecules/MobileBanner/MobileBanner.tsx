import { FC } from 'react'

import { Text } from '@ui-kit'

import { theme } from '@constants'

import { Styled } from './styled'

type TMobileBannerProps = {
  content: string
}

export const MobileBanner: FC<TMobileBannerProps> = ({ content }) => (
  <Styled.Wrapper>
    <Text fontSizeMob={theme.fonts.size.header.sm} fontHeightMob={theme.fonts.height.header.sm}>
      {content}
    </Text>
    <Styled.Image />
  </Styled.Wrapper>
)
