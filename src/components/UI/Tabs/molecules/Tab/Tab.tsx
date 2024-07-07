import { FC } from 'react'

import { Text } from '@ui-kit'

import { theme } from '@constants'

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
      fontSizeMob={theme.fonts.size.regular.md}
      fontHeightMob={theme.fonts.height.regular.md}
    >
      {title}
    </Text>
  </Styled.Wrapper>
)
