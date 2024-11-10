import { Dispatch, FC, SetStateAction, useMemo } from 'react'

import { Flexbox } from '@components/atoms'
import { ActionIcon, Badge, Input } from '@ui-kit'

import { listsSearchTypes, theme } from '@constants'
import { ESearchListsLabels, TBadge } from '@types'
import { getBadgesFromObject } from '@utils'

import { Styled } from './styled'

type TSearchBlockProps = {
  searchTerm: string
  selectedBadge: TBadge | null
  onAddClick: () => void
  setSelectedBadge: Dispatch<SetStateAction<TBadge | null>>
  setSearchTerm: Dispatch<SetStateAction<string>>
}
export const SearchBlock: FC<TSearchBlockProps> = ({
  onAddClick,
  setSelectedBadge,
  searchTerm,
  selectedBadge,
  setSearchTerm,
}) => {
  const badges = useMemo(() => getBadgesFromObject<typeof ESearchListsLabels>(ESearchListsLabels, listsSearchTypes), [])

  const handleClickBadge = (value: TBadge) => {
    if (value.id === selectedBadge?.id) {
      setSelectedBadge(null)

      return
    }

    setSelectedBadge(value)
  }

  return (
    <>
      <Flexbox gap={theme.space.xs}>
        <Input
          type="text"
          value={searchTerm}
          placeholder="Search for lists"
          onChange={e => setSearchTerm(e.currentTarget.value)}
          onClear={() => setSearchTerm('')}
          icon="search_solid"
          hasIcon
          isClearable
          fluid
        />
        <ActionIcon
          icon="plus_solid"
          color={theme.colors.grey}
          backgroundColor={theme.colors.beige}
          size={theme.icon_sizes.md}
          padding={theme.space.md}
          onClick={onAddClick}
        />
      </Flexbox>
      <Styled.BadgesContainer>
        {badges.map(({ id, label, ...rest }) => (
          <Badge
            name={label}
            label={label}
            key={id}
            id={id}
            {...rest}
            checked={id === selectedBadge?.id}
            onChange={handleClickBadge}
          />
        ))}
      </Styled.BadgesContainer>
    </>
  )
}
