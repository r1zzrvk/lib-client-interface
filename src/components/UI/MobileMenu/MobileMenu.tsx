import { FC } from 'react'
import { IconsSelector } from '@components/molecules'
import { theme } from '@constants'
import { Styled } from './styled'

export const MobileMenu: FC = () => (
  <Styled.Wrapper>
    <IconsSelector icon="home_solid" color={theme.colors.grey} />
    <IconsSelector icon="catalog_solid" color={theme.colors.grey} />
    <IconsSelector icon="bookmark_solid" color={theme.colors.grey} />
    <IconsSelector icon="user_solid" color={theme.colors.grey} />
  </Styled.Wrapper>
)
