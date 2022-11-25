import { theme } from '@constants'
import { IconsSelector } from 'components/molecules'
import { FC } from 'react'
import { Styled } from './styled'

type TMobileInput = {
  type: string
  placeholder: string
  icon?: string
}

export const MobileInput: FC<TMobileInput> = ({ type, placeholder, icon = 'mobile-search' }) => (
  <Styled.Wrapper>
    <Styled.Icon>
      <IconsSelector icon={icon} color={theme.colors.grey} />
    </Styled.Icon>
    <Styled.Input type={type} placeholder={placeholder} />
  </Styled.Wrapper>
)
