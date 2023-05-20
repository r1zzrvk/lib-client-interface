import { FC } from 'react'
import { Text, Spacer, Button } from '@ui-kit'
import { theme } from '@constants'
import { Styled } from './styled'

type TDesktopCardProps = {
  title: string
  description: string
  image: string
}

export const DesktopCard: FC<TDesktopCardProps> = ({ title, description, image }) => (
  <Styled.Wrapper>
    <Spacer size={theme.space.lg} />
    <Text fontWeight={theme.fonts.weight.medium} color={theme.colors.grey} align="center" marginBottom={theme.space.xl}>
      {title}
    </Text>
    <Styled.Content>
      <img src={image} alt="card_image" />
      <Text
        fontSize={theme.fonts.size.regular.sm}
        fontHeight={theme.fonts.height.regular.sm}
        color={theme.colors.grey}
        marginBottom={theme.space.xl}
      >
        {description}
      </Text>
    </Styled.Content>
    {/*  eslint-disable-next-line @typescript-eslint/no-empty-function */}
    <Button onClick={() => {}} size="sm" isGhost>
      Buy now
    </Button>
  </Styled.Wrapper>
)
