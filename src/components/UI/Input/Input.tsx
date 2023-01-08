import { theme } from '@constants'
import { IconsSelector } from 'components/molecules'
import { FC } from 'react'
import { Styled } from './styled'

type TInputProps = {
  type: string
  placeholder: string
  fluid?: boolean
  icon?:
    | 'search'
    | 'shoppingCart'
    | 'user'
    | 'settings'
    | 'minus'
    | 'plus'
    | 'exit'
    | 'arrow'
    | 'heart'
    | 'trash'
    | 'mobile-search'
    | 'mobile-home'
    | 'mobile-categories'
    | 'mobile-cart'
    | 'mobile-user'
    | 'mobile-heart'
    | 'mobile-back'
    | 'mobile-plus'
    | 'mobile-minus'
  isButton?: boolean
  onClick?: () => void
}

export const Input: FC<TInputProps> = ({
  type,
  placeholder,
  icon = 'mobile-search',
  fluid = false,
  isButton = false,
  onClick,
}) => {
  const handleClick = () => {
    if (onClick) {
      onClick()
    }
  }
  return (
    <Styled.Wrapper fluid={fluid}>
      <Styled.Icon>
        <IconsSelector icon={icon} color={theme.colors.grey} />
      </Styled.Icon>
      <Styled.Input type={type} placeholder={placeholder} />
      {isButton && (
        <Styled.Icon isButton={isButton} onClick={handleClick}>
          <IconsSelector icon="mobile-categories" color={theme.colors.grey} size={24} />
        </Styled.Icon>
      )}
    </Styled.Wrapper>
  )
}
