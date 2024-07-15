import { FC } from 'react'

import { Button, ResponsiveImage, Spacer, Text } from '@ui-kit'
import { Flexbox } from '@components/atoms'

import { theme } from '@constants'
import { useBreakpoint } from '@hooks'

import { Styled } from './styled'

type TStatusIllustrationProps = {
  imgUrl: string
  altText: string
  title: string
  isVisible: boolean
  subtitle?: string
  width?: number
  height?: number
  hasButton?: boolean
  buttonText?: string
  onButtonClick?: () => void
}

export const StatusIllustration: FC<TStatusIllustrationProps> = ({
  altText,
  imgUrl,
  title,
  subtitle,
  isVisible,
  width = 330,
  height = 228,
  hasButton = false,
  buttonText,
  onButtonClick,
}) => {
  const { isMob } = useBreakpoint()

  return (
    <>
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
      {isVisible && hasButton && (
        <Flexbox justify="center" align="center" direction="column">
          <Spacer size={theme.space.lg} sizeMob={theme.space.sm} />
          <Button isFluid={isMob} onClick={onButtonClick} size="lg">
            {buttonText}
          </Button>
        </Flexbox>
      )}
    </>
  )
}
