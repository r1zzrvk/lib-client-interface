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
  color?: string
}

export const Input: FC<TInputProps> = ({
  type,
  placeholder,
  icon = 'search_solid',
  fluid = false,
  isButton = false,
  onClick,
  name,
  onChange,
  color = theme.colors.beige,
}) => {
  const handleClick = () => {
    if (onClick) {
      onClick()
    }
  }
  return (
    <Styled.Wrapper fluid={fluid} color={color}>
      <IconsSelector
        icon={icon}
        color={theme.colors.grey}
        sidePadding={theme.space.sm}
        upDownPadding={theme.space.xs}
      />
      <Styled.Input
        type={type}
        color={color}
        placeholder={placeholder}
        name={name}
        fluid={fluid}
        onChange={e => onChange(e)}
      />
      {isButton && (
        <IconsSelector
          icon="sliders_solid"
          color={theme.colors.grey}
          size={theme.icon_sizes.xs}
          sidePadding={theme.space.sm}
          upDownPadding={14}
          isButton={isButton}
          onClick={handleClick}
          withBorder
        />
      )}
    </Styled.Wrapper>
  )
}
