import { FC } from 'react'

import { Text, Spacer, Button, ResponsiveImage } from '@ui-kit'

import { theme } from '@constants'

import { Styled } from './styled'

type TSmallCardProps = {
  title: string
  description: string
  image: string
  onClick: (title: string) => void
}

export const SmallCard: FC<TSmallCardProps> = ({ title, description, image, onClick }) => (
  <Styled.Wrapper onClick={() => onClick(title)}>
    <Spacer size={theme.space.lg} samespace />
    <Text
      fontWeight={theme.fonts.weight.medium}
      color={theme.colors.grey}
      fontSizeMob={theme.fonts.size.regular.md}
      fontHeightMob={theme.fonts.height.regular.md}
      align="center"
      marginBottom={theme.space.sm}
      marginBottomMob={theme.space.sm}
    >
      {title}
    </Text>
    <Styled.Content>
      <ResponsiveImage src={image} alt="card_image" width={100} height={150} isEverywhere />
      <Styled.TextContainer>
        <Text
          fontSize={theme.fonts.size.regular.sm}
          fontHeight={theme.fonts.height.regular.sm}
          color={theme.colors.grey}
          fontSizeMob={theme.fonts.size.regular.sm}
          fontHeightMob={theme.fonts.height.regular.sm}
        >
          {description}
        </Text>
      </Styled.TextContainer>
    </Styled.Content>
    <Button onClick={() => onClick(title)} size="sm" isGhost>
      View all
    </Button>
  </Styled.Wrapper>
)
