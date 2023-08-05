import { FC } from 'react'
import { TBadge } from '@types'
import { Styled } from './styled'

type TBadgeProps = TBadge & {
  name: string
  checked: boolean
  onChange: (value: TBadge) => void
}

export const Badge: FC<TBadgeProps> = ({ value, label, id, checked, onChange, type, name }) => (
  <Styled.Badge>
    <Styled.Label htmlFor={value + id} checked={checked}>
      {label}
    </Styled.Label>
    <Styled.Input
      name={name}
      id={value + id}
      type="radio"
      value={value}
      checked={checked}
      onChange={() => onChange({ id, label, value, type })}
    />
  </Styled.Badge>
)
