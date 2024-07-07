import { FC } from 'react'

import { Flexbox } from '@components/atoms'

import { theme } from '@constants'

import { Styled } from './styled'
import { sizePresets } from './constants'
import { Text } from '../Text'

type TSwitchToggleProps = {
  checked: boolean
  onChange: () => void
  label?: string
  disabled?: boolean
  name?: string
  size?: 'md' | 'lg'
}

export const SwitchToggle: FC<TSwitchToggleProps> = ({ size = 'lg', name, checked, onChange, disabled, label }) => {
  const handleChange = () => {
    if (disabled) {
      return
    }

    onChange()
  }

  return (
    <Flexbox align="center" gap={theme.space.xs2}>
      {label && <Text {...sizePresets[size].label}>{label}</Text>}
      <Styled.Switch {...sizePresets[size].switch} onClick={handleChange} disabled={disabled} checked={checked}>
        <Styled.Round {...sizePresets[size].round} checked={checked} />
        <Styled.Input type="checkbox" name={name} checked={checked} onChange={handleChange} />
      </Styled.Switch>
    </Flexbox>
  )
}
