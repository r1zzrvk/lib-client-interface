import { FC } from 'react'
import { Text, Carousel, Spacer } from '@ui-kit'
import { DesktopCard } from '@components/molecules'
import { shoppingItems, theme } from '@constants'
import { TDesktopCard } from '@types'
import { useBreakpoint } from '@hooks'
import { Styled } from './styled'

type TCategoriesBannerProps = {
  header: string
  subheader: string
  text: string
}

const CarouselComponent: FC<TDesktopCard> = ({ title, description, image, id }) => (
  <DesktopCard title={title} description={description} image={image} key={id} />
)

export const CategoriesBanner: FC<TCategoriesBannerProps> = ({ header, text, subheader }) => {
  const { isSm, isTablet } = useBreakpoint()
  const contentPerPage = (isSm && 2) || (isTablet && 1) || 3
  return (
    <Styled.Wrapper>
      <Text
        fontSize={theme.fonts.size.header.md}
        fontHeight={theme.fonts.height.header.md}
        fontWeight={theme.fonts.weight.medium}
        color={theme.colors.main}
        marginBottom={theme.space.xl}
      >
        {header}
      </Text>
      <Text
        fontSize={theme.fonts.size.regular.md}
        fontHeight={theme.fonts.height.regular.md}
        color={theme.colors.grey}
        marginBottom={theme.space.xs}
      >
        {subheader}
      </Text>
      <Text fontSize={theme.fonts.size.regular.md} fontHeight={theme.fonts.height.regular.md} color={theme.colors.grey}>
        {text}
      </Text>
      <Spacer size={theme.space.xl2} />
      <Carousel items={shoppingItems} component={CarouselComponent} contentPerPage={contentPerPage} />
    </Styled.Wrapper>
  )
}
