import { FC } from 'react'

import { ResponsiveImage, Spacer, Text } from '@ui-kit'

import { theme } from '@constants'

import { Styled } from './styled'

type TStatusIllustrationProps = {
  imgUrl: string
  altText: string
  title: string
  isVisible: boolean
  subtitle?: string
  width?: number
  height?: number
}
// todo: добавить кнопку опционально, как в List
export const StatusIllustration: FC<TStatusIllustrationProps> = ({
  altText,
  imgUrl,
  title,
  subtitle,
  isVisible,
  width = 330,
  height = 228,
}) => (
  <Styled.Wrapper justify="center" align="center" direction="column" isVisible={isVisible}>
    <Spacer size={theme.space.lg} sizeMob={theme.space.sm} />
    <ResponsiveImage src={imgUrl} alt={altText} width={width} height={height} isEverywhere />
    <Spacer size={theme.space.lg} sizeMob={theme.space.sm} />
    <Text
      color={theme.colors.grey}
      fontSize={theme.fonts.size.header.md}
      fontWeight={theme.fonts.weight.bold}
      fontHeight={theme.fonts.height.header.md}
      marginBottom={theme.space.sm}
      fontSizeMob={theme.fonts.size.header.sm}
      fontHeightMob={theme.fonts.height.header.sm}
      fontWeightMob={theme.fonts.weight.semibold}
      marginBottomMob={theme.space.sm}
      align="center"
    >
      {title}
    </Text>
    {subtitle && (
      <Text
        color={theme.colors.main}
        fontSize={theme.fonts.size.regular.md}
        fontWeight={theme.fonts.weight.medium}
        fontHeight={theme.fonts.height.regular.md}
        fontSizeMob={theme.fonts.size.regular.md}
        fontHeightMob={theme.fonts.height.regular.md}
        fontWeightMob={theme.fonts.weight.medium}
        align="center"
      >
        {subtitle}
      </Text>
    )}
  </Styled.Wrapper>
)
