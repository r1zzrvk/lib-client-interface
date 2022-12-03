import { FC } from 'react'
import { Text, Spacer, Button } from '@components'
import { theme } from '@constants'
import { Styled } from './styled'

export const DesktopCard: FC = () => (
  <Styled.Wrapper>
    <Spacer size={theme.space.lg} />
    <Text fontWeight={theme.fonts.weight.medium} color={theme.colors.grey} align="center" marginBottom={theme.space.xl}>
      Tabouret
    </Text>
    <Styled.Content>
      <img src="https://i.ibb.co/0q1r8yC/1.png" alt="card_image" />
      <Text
        fontSize={theme.fonts.size.regular.sm}
        fontHeight={theme.fonts.height.regular.sm}
        color={theme.colors.grey}
        marginBottom={theme.space.xl}
      >
        Stylish stool with 3 legs, created from natural materials
      </Text>
    </Styled.Content>
    {/*  eslint-disable-next-line @typescript-eslint/no-empty-function */}
    <Button onClick={() => {}} size="sm" isGhost>
      Buy now
    </Button>
  </Styled.Wrapper>
)
