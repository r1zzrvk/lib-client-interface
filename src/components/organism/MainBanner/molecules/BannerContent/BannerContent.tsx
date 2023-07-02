import { FC } from 'react'
import { Text, Button } from '@ui-kit'
import { theme } from '@constants'
import { Styled } from './styled'

export const BannerContent: FC = () => (
  <Styled.Wrapper>
    <Text
      fontSize={theme.fonts.size.header.md}
      fontHeight={theme.fonts.height.header.md}
      fontWeight={theme.fonts.weight.medium}
      marginBottom={theme.space.md}
      fontSizeMob={theme.fonts.size.header.sm}
      fontHeightMob={theme.fonts.height.header.sm}
      marginBottomMob={theme.space.xs3}
    >
      Discover new releases, bestsellers
      <br />
      and hidden gems
    </Text>
    <Text
      marginBottom={theme.space.xl}
      fontSizeMob={theme.fonts.size.regular.sm}
      fontHeightMob={theme.fonts.height.regular.sm}
      marginBottomMob={theme.space.xl}
    >
      Find your next read with ease.
      <br />
      Search for books by title, author, genre, or keyword.
      <br />
      Start your journey today and dive into a world of literature.
    </Text>
    {/* eslint-disable-next-line @typescript-eslint/no-empty-function */}
    <Button onClick={() => {}} size="md">
      Go to catalog
    </Button>
  </Styled.Wrapper>
)
