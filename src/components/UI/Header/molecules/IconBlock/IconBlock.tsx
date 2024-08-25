import { Dispatch, FC, SetStateAction } from 'react'

import { ActionIcon } from '@ui-kit'

import { theme } from '@constants'

import { Styled } from './styled'

type TIconBlockProps = {
  isSearchVisible: boolean
  onSearchClick: Dispatch<SetStateAction<boolean>>
}

export const IconBlock: FC<TIconBlockProps> = ({ onSearchClick, isSearchVisible }) => {
  const icon = isSearchVisible ? 'cross_solid' : 'search_solid'

  const handleClick = () => {
    onSearchClick(!isSearchVisible)
  }

  return (
    <Styled.Wrapper>
      <ActionIcon
        icon={icon}
        color={theme.colors.white}
        onClick={handleClick}
        size={theme.icon_sizes.md}
        padding={theme.space.xs}
        backgroundColor={theme.colors.main}
      />
    </Styled.Wrapper>
  )
}
