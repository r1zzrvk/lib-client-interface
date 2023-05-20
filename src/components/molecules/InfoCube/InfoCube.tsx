import { FC } from 'react'
import { theme } from '@constants'
import { Text } from '@ui-kit'
import { Styled } from './styled'

type TInfoCubeProps = {
  header: string
  content: string
  color: 'main' | 'secondary'
}

export const InfoCube: FC<TInfoCubeProps> = ({ header, content, color }) => {
  const textColor = color === 'secondary' ? theme.colors.grey : theme.colors.white

  return (
    <Styled.Wrapper color={theme.colors[color]}>
      <Text
        color={textColor}
        fontSize={theme.fonts.size.header.sm}
        fontHeight={theme.fonts.height.header.sm}
        fontWeight={theme.fonts.weight.semibold}
        fontSizeMob={theme.fonts.size.header.xs}
        fontWeightMob={theme.fonts.weight.medium}
        fontHeightMob={theme.fonts.height.header.xs}
      >
        {header}
      </Text>
      <Text color={textColor}>{content}</Text>
    </Styled.Wrapper>
  )
}
