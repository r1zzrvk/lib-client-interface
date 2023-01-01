import { Text } from '@components'
import { theme } from '@constants'
import { TTab } from '@types'
import { FC } from 'react'
import { Styled } from './styled'

type TProfileTabProps = {
  isColumn?: boolean
  activeTab?: TTab | undefined
}

export const ProfileTab: FC<TProfileTabProps> = ({ activeTab, isColumn = false }) => (
  <Styled.Wrapper isColumn={isColumn}>
    {isColumn || (
      <Text
        color={theme.colors.grey}
        fontSize={theme.fonts.size.header.sm}
        fontHeight={theme.fonts.height.header.sm}
        fontWeight={theme.fonts.weight.medium}
        marginBottom={theme.space.xl2}
      >
        {activeTab?.title}
      </Text>
    )}
    <Styled.Content>
      <Text marginBottom={theme.space.xs2}>Your personal discount:</Text>
      <Text marginBottom={theme.space.xs2}>3%</Text>
      <Text marginBottom={theme.space.xs2}>Earn 6,374 more points and get 5% off any purchase</Text>
      <Text marginBottom={theme.space.xs2}>Member code: 73863428472</Text>
    </Styled.Content>
  </Styled.Wrapper>
)
