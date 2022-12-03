import { FC } from 'react'
import { Text, DesktopCard, Carousel, Spacer } from '@components'
import { theme } from '@constants'
import { Styled } from './styled'

type TCategoriesBannerProps = {
  header: string
  subheader: string
  text: string
}

export const CategoriesBanner: FC<TCategoriesBannerProps> = ({ header, text, subheader }) => (
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
    <Carousel
      component={
        // eslint-disable-next-line react/jsx-wrap-multilines
        <>
          <DesktopCard />
          <DesktopCard />
          <DesktopCard />
        </>
      }
    />
  </Styled.Wrapper>
)
