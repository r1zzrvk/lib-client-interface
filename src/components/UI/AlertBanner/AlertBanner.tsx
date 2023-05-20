import { theme } from '@constants'
import { FC, ReactNode } from 'react'
import { Text } from '@ui-kit'
import { IconsSelector } from '@components/molecules'
import { TIcon } from '@types'
import { Styled } from './styled'

type TAlertBannerProps = {
  children: ReactNode
  heading: string
  icon: TIcon
}

export const AlertBanner: FC<TAlertBannerProps> = ({ children, heading, icon }) => (
  <Styled.Wrapper>
    <Styled.Header>
      <Text color={theme.colors.grey}>{heading}</Text>
      <IconsSelector icon={icon} color={theme.colors.grey} />
    </Styled.Header>
    <Styled.Body>{children}</Styled.Body>
  </Styled.Wrapper>
)
