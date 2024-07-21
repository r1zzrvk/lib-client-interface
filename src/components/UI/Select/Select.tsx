import { FC, MouseEvent, useEffect, useRef, useState } from 'react'

import { Icon } from '@components/molecules'

import { theme } from '@constants'
import { TOption } from '@types'

import { Input } from '../Input'
import { Styled } from './styled'

type TSelectProps = {
  selectedValue: string
  placeholder: string
  options: TOption[]
  onSelect: (value: string) => void
  onClear: () => void
  name?: string
  fluid?: boolean
}

export const Select: FC<TSelectProps> = ({
  placeholder,
  options,
  onSelect,
  onClear,
  selectedValue,
  fluid = false,
  name,
}) => {
  const [isOpened, setIsOpened] = useState(false)
  const rootEl = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const modal = document.getElementById('modal')

    const onClick = (e: Event) => {
      if (!rootEl?.current?.contains(e.target as Node)) {
        setIsOpened(false)
      }
    }

    document.addEventListener('click', onClick)
    modal?.addEventListener('click', onClick)

    return () => {
      document.removeEventListener('click', onClick)
      modal?.removeEventListener('click', onClick)
    }
  }, [])

  const handleSelectValue = ({ target }: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
    onSelect((target as HTMLInputElement).value)
    setIsOpened(false)
  }

  const handleClearSelectedValue = () => {
    onClear()
  }

  return (
    <Styled.SelectWrapper fluid={fluid} ref={rootEl}>
      {selectedValue === '' && <Styled.Label onClick={() => setIsOpened(prev => !prev)}>{placeholder}</Styled.Label>}
      <Input
        name={name}
        placeholder={placeholder}
        type="button"
        value={selectedValue}
        onChange={() => ''}
        fluid={fluid}
        buttonIcon="caretDown_solid"
        onClick={() => setIsOpened(prev => !prev)}
        isActive={isOpened}
        onClear={handleClearSelectedValue}
        isClearable
        hasButton
      />
      {isOpened && (
        <Styled.OptionsWrapper>
          {options?.map(({ label, value }) => (
            <Styled.Option type="button" value={value} onClick={handleSelectValue} key={value}>
              {label}
              {value === selectedValue && (
                <Icon icon="check_solid" color={theme.colors.grey} size={theme.icon_sizes.md} />
              )}
            </Styled.Option>
          ))}
        </Styled.OptionsWrapper>
      )}
    </Styled.SelectWrapper>
  )
}
