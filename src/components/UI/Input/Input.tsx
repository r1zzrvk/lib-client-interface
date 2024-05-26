import { theme } from '@constants'
import { TIcon } from '@types'
import { IconsSelector } from 'components/molecules'
import React, { FC } from 'react'
import { Styled } from './styled'
import { Spacer } from '../Spacer'
import { Text } from '../Text'

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
  readonly?: boolean
  isActive?: boolean
  isClearable?: boolean
  onClear?: () => void
  value?: string | number
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void
  hasDot?: boolean
  error?: string
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
  readonly,
  isActive = false,
  value,
  isClearable = false,
  onClear,
  onKeyDown,
  hasDot = false,
  error,
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
      <Styled.Wrapper fluid={fluid} color={color}>
        {hasIcon && (
          <IconsSelector icon={icon} color={theme.colors.grey} sidePadding={theme.space.sm} upDownPadding={14} />
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
          disabled={readonly}
          isIcon={hasIcon}
          onKeyDown={e => handleKeyDown(e)}
          autoComplete="off"
          fluid
        />
        {isClearable && value !== '' && (
          <IconsSelector
            icon="cross_solid"
            color={theme.colors.grey}
            size={theme.icon_sizes.xs}
            sidePadding={hasButton ? theme.space.xs4 : theme.space.sm}
            upDownPadding={16}
            onClick={handleClear}
            isButton
          />
        )}
        {hasButton && (
          <Styled.CustomIcon isActive={isActive}>
            {hasDot && <Styled.Dot />}
            <IconsSelector
              icon={buttonIcon}
              color={theme.colors.grey}
              size={theme.icon_sizes.xs}
              sidePadding={theme.space.sm}
              upDownPadding={16}
              isButton={hasButton}
              onClick={handleClick}
            />
          </Styled.CustomIcon>
        )}
      </Styled.Wrapper>
      {error && (
        <>
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
        </>
      )}
    </>
  )
}
