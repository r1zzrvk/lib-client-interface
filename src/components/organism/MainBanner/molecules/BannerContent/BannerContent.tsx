import { FC } from 'react'
import { useRouter } from 'next/router'
import { Text, Button, Spacer } from '@ui-kit'
import { theme } from '@constants'
import { EPagePaths } from '@types'
import { Styled } from './styled'

export const BannerContent: FC = () => {
  const router = useRouter()

  const handleClick = () => {
    router.push(EPagePaths.CATALOG)
  }
  return (
    <Styled.Wrapper>
      <Text
        fontSize={theme.fonts.size.header.md}
        fontHeight={theme.fonts.height.header.md}
        fontWeight={theme.fonts.weight.medium}
        fontSizeMob={theme.fonts.size.header.sm}
        fontHeightMob={theme.fonts.height.header.sm}
        marginBottomMob={theme.space.xs3}
      >
        Discover new releases, bestsellers
        <br />
        and hidden gems
      </Text>
      <Spacer size={theme.space.md} sizeTablet={theme.space.sm} />
      <Text fontSizeMob={theme.fonts.size.regular.sm} fontHeightMob={theme.fonts.height.regular.sm}>
        Find your next read with ease.
        <br />
        Search for books by title, author, genre, or keyword.
        <br />
        Start your journey today and dive into a world of literature.
      </Text>
      <Spacer size={theme.space.xl} sizeTablet={theme.space.sm} />
      {/* eslint-disable-next-line @typescript-eslint/no-empty-function */}
      <Button onClick={handleClick} size="md">
        Go to catalog
      </Button>
    </Styled.Wrapper>
  )
}
