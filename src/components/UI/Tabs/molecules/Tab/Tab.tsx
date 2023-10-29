import { FC } from 'react'
import { theme } from '@constants'
import { Text } from '@ui-kit'
import { Styled } from './styled'

type TTabProps = {
  title: string
  active: boolean
  onClick: () => void
}

export const Tab: FC<TTabProps> = ({ title, active, onClick }) => (
  <Styled.Wrapper active={active} onClick={onClick}>
    <Text
      color={active ? theme.colors.grey : theme.colors.main}
      fontSizeMob={theme.fonts.size.regular.sm}
      fontHeightMob={theme.fonts.height.regular.sm}
    >
      {title}
    </Text>
  </Styled.Wrapper>
)
