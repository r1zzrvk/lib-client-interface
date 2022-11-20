import { FC } from 'react'
import { IconButton } from '@components'
import { theme } from '@constants'
import { Styled } from './styled'

export const MobileMenu: FC = () => (
  <Styled.Wrapper>
    {/* eslint-disable @typescript-eslint/no-empty-function */}
    <IconButton icon="mobile-home" color={theme.colors.grey} onClick={() => {}} size={28} />
    <IconButton icon="mobile-categories" color={theme.colors.grey} onClick={() => {}} size={28} />
    <IconButton icon="mobile-cart" color={theme.colors.grey} onClick={() => {}} size={28} />
    <IconButton icon="mobile-user" color={theme.colors.grey} onClick={() => {}} size={28} />
  </Styled.Wrapper>
)
