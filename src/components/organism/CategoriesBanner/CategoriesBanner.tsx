import { useRouter } from 'next/router'
import { FC } from 'react'

import { SmallCard } from '@components/molecules'
import { Carousel, Spacer, Text } from '@ui-kit'

import { EPagePaths, TSmallCard } from '@types'
import { useBreakpoint } from '@hooks'
import { categoriesCardData, theme } from '@constants'

import { CategoriesSlider } from '../CategoriesSlider'
import { Styled } from './styled'

type TCategoriesBannerProps = {
  header: string
  subheader: string
  text: string
}

const CarouselComponent: FC<TSmallCard> = ({ title, description, image, id }) => {
  const router = useRouter()

  const handleCardClick = (title: string) => {
    router.push(`${EPagePaths.CATALOG}?category=${title}`)
  }

  return <SmallCard title={title} description={description} image={image} key={id} onClick={handleCardClick} />
}

export const CategoriesBanner: FC<TCategoriesBannerProps> = ({ header, text, subheader }) => {
  const { isSm, isTablet, isMob } = useBreakpoint()
  const contentPerPage = (isSm && 2) || ((isTablet || isMob) && 1) || 3

  return (
    <Styled.Wrapper>
      <Text
        fontSize={theme.fonts.size.header.md}
        fontHeight={theme.fonts.height.header.md}
        fontWeight={theme.fonts.weight.medium}
        fontWeightMob={theme.fonts.weight.medium}
        color={theme.colors.main}
        marginBottom={theme.space.xl}
        fontSizeMob={theme.fonts.size.header.sm}
        fontHeightMob={theme.fonts.height.header.sm}
        marginBottomMob={theme.space.sm}
      >
        {header}
      </Text>
      <Text
        fontSize={theme.fonts.size.regular.md}
        fontHeight={theme.fonts.height.regular.md}
        color={theme.colors.grey}
        marginBottom={theme.space.xs}
        fontSizeMob={theme.fonts.size.regular.md}
        fontHeightMob={theme.fonts.height.regular.md}
        marginBottomMob={theme.space.xs2}
      >
        {subheader}
      </Text>
      <Text
        fontSize={theme.fonts.size.regular.md}
        fontHeight={theme.fonts.height.regular.md}
        color={theme.colors.grey}
        fontSizeMob={theme.fonts.size.regular.md}
        fontHeightMob={theme.fonts.height.regular.md}
      >
        {text}
      </Text>
      <Spacer size={theme.space.xl2} />
      {isMob || <Carousel items={categoriesCardData} component={CarouselComponent} contentPerPage={contentPerPage} />}
      {isMob && <CategoriesSlider items={categoriesCardData} />}
    </Styled.Wrapper>
  )
}
