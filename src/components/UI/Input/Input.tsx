import { theme } from '@constants'
import { TIcon } from '@types'
import { IconsSelector } from 'components/molecules'
import React, { FC } from 'react'
import { Styled } from './styled'

type TInputProps = {
  type: string
  placeholder: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  fluid?: boolean
  icon?: TIcon
  isButton?: boolean
  onClick?: () => void
  name?: string
}

export const Input: FC<TInputProps> = ({
  type,
  placeholder,
  icon = 'mobile-search',
  fluid = false,
  isButton = false,
  onClick,
  name,
  onChange,
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
      <Styled.Input type={type} placeholder={placeholder} name={name} onChange={e => onChange(e)} />
      {isButton && (
        <Styled.Icon isButton={isButton} onClick={handleClick}>
          <IconsSelector icon="mobile-categories" color={theme.colors.grey} size={24} />
        </Styled.Icon>
      )}
    </Styled.Wrapper>
  )
}
