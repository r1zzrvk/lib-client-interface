import React, { FC } from 'react'

import { Flexbox } from '@components/atoms'
import { Icon } from '@components/molecules'

import { theme } from '@constants'
import { TIcon } from '@types'

import { ActionIcon } from '../ActionIcon'
import { Spacer } from '../Spacer'
import { Text } from '../Text'
import { Styled } from './styled'

type TInputProps = {
  type: string
  placeholder: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  fluid?: boolean
  hasIcon?: boolean
  icon?: TIcon
  hasButton?: boolean
  buttonIcon?: TIcon
  onClick?: () => void
  name?: string
  color?: string
  isActive?: boolean
  isClearable?: boolean
  onClear?: () => void
  value?: string | number
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void
  hasDot?: boolean
  error?: string
  disabled?: boolean
  autoComplete?: string
}

export const Input: FC<TInputProps> = ({
  type,
  placeholder,
  icon = 'search_solid',
  hasIcon = false,
  fluid = false,
  buttonIcon = 'sliders_solid',
  hasButton = false,
  onClick,
  name,
  onChange,
  color = theme.colors.beige,
  isActive = false,
  value,
  isClearable = false,
  onClear,
  onKeyDown,
  hasDot = false,
  error,
  disabled = false,
  autoComplete = 'new-password',
}) => {
  const handleClick = () => {
    if (onClick) {
      onClick()
    }
  }

  const handleClear = () => {
    if (onClear) {
      onClear()
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (onKeyDown) {
      onKeyDown(e)
    }
  }

  return (
    <>
      <Styled.Wrapper fluid={fluid} color={color} error={error}>
        {hasIcon && (
          <Icon icon={icon} size={theme.icon_sizes.md} color={error ? theme.colors.red : theme.colors.grey} />
        )}
        <Spacer size={theme.space.xl} samespace />
        <Styled.Input
          value={value}
          type={type}
          color={color}
          placeholder={placeholder}
          name={name}
          onChange={e => onChange(e)}
          onClick={type === 'button' ? handleClick : () => ''}
          isIcon={hasIcon}
          onKeyDown={e => handleKeyDown(e)}
          autoComplete={autoComplete}
          disabled={disabled}
          fluid
        />
        {isClearable && value !== '' && (
          <ActionIcon
            icon="cross_solid"
            color={theme.colors.grey}
            size={theme.icon_sizes.xs}
            padding={theme.space.sm}
            onClick={handleClear}
          />
        )}
        {hasButton && (
          <Styled.CustomIcon isActive={isActive}>
            {hasDot && <Styled.Dot />}
            <ActionIcon
              icon={buttonIcon}
              color={theme.colors.grey}
              size={theme.icon_sizes.xs}
              padding={theme.space.sm}
              onClick={handleClick}
            />
          </Styled.CustomIcon>
        )}
      </Styled.Wrapper>
      {error && (
        <Flexbox justify="start" direction="column">
          <Spacer size={theme.space.xs3} samespace />
          <Styled.ErrorText>
            <Text
              color={theme.colors.red}
              fontSize={theme.fonts.size.regular.sm}
              fontSizeMob={theme.fonts.size.regular.sm}
              fontHeight={theme.fonts.height.regular.sm}
              fontHeightMob={theme.fonts.height.regular.sm}
            >
              {error}
            </Text>
          </Styled.ErrorText>
        </Flexbox>
      )}
    </>
  )
}
