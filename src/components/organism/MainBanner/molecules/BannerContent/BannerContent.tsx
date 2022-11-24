import { Text, Button } from '@components'
import { theme } from '@constants'
import { FC } from 'react'
import { Styled } from './styled'

export const BannerContent: FC = () => (
  <Styled.Wrapper>
    <Text
      fontSize={theme.fonts.size.header.md}
      fontHeight={theme.fonts.height.header.md}
      marginBottom={theme.space.md}
      fontSizeMob={theme.fonts.size.header.sm}
      fontHeightMob={theme.fonts.height.header.sm}
      marginBottomMob={theme.space.xs3}
    >
      Everything that surrounds
      <br />
      us makes us stronger
    </Text>
    <Text
      marginBottom={theme.space.xl}
      fontSizeMob={theme.fonts.size.regular.sm}
      fontHeightMob={theme.fonts.height.regular.sm}
      marginBottomMob={theme.space.xl}
    >
      Exclusive designer furniture and fittings.
      <br />
      Natural materials and individual approach
      <br />
      when created, they will give an incomparably high level of quality and comfort
    </Text>
    {/* eslint-disable-next-line @typescript-eslint/no-empty-function */}
    <Button onClick={() => {}} size="md">
      Go to catalog
    </Button>
  </Styled.Wrapper>
)
