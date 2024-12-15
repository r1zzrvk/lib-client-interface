import { FC } from 'react'
import { useRouter } from 'next/router'

import { Text, Button, Spacer } from '@ui-kit'

import { theme } from '@constants'
import { EPagePaths } from '@types'
import { useBreakpoint } from '@hooks'

import { Styled } from './styled'

export const BannerContent: FC = () => {
  const router = useRouter()
  const { isMob, isTablet } = useBreakpoint()

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
        fontSizeTablet={theme.fonts.size.header.sm}
        fontHeightTablet={theme.fonts.height.header.sm}
        fontWeightMob={theme.fonts.weight.medium}
        fontWeightTablet={theme.fonts.weight.medium}
      >
        Your next favorite book is just a&nbsp;search&nbsp;away
      </Text>
      <Spacer size={theme.space.md} sizeTablet={theme.space.sm} sizeMob={theme.space.xs} />
      <Text
        fontSizeTablet={theme.fonts.size.regular.sm}
        fontHeightTablet={theme.fonts.height.regular.sm}
        fontSizeMob={theme.fonts.size.regular.md}
        fontHeightMob={theme.fonts.height.regular.md}
      >
        Find books by title, author, genre, or keyword.
        <br />
        Start exploring today and build your perfect reading list.
      </Text>
      <Spacer size={theme.space.xl} sizeTablet={theme.space.sm} sizeMob={theme.space.sm} />
      {/* eslint-disable-next-line @typescript-eslint/no-empty-function */}
      <Button onClick={handleClick} isFluid={isMob || isTablet} size="md">
        Go to catalog
      </Button>
    </Styled.Wrapper>
  )
}
