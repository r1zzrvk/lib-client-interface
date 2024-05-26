import { TBook, TList } from '@types'
import { FC, useState } from 'react'
import { Text } from '@ui-kit'
import { theme } from '@constants'
import { Styled } from './styled'
import { IconsSelector } from '../IconsSelector'

type TSelectListItemProps = {
  list: TList
  bookId: TBook['id']
  onSelectList: (id: string) => void
}

export const SelectListItem: FC<TSelectListItemProps> = ({ list, bookId, onSelectList }) => {
  const [hasOnList, setHasOnList] = useState<boolean>(!!list.listItems.find(({ id }) => id === bookId))

  const handleClick = () => {
    setHasOnList(prev => !prev)
    onSelectList(list.id)
  }

  return (
    <Styled.Wrapper onClick={handleClick}>
      <Text
        color={theme.colors.grey}
        fontSize={theme.fonts.size.regular.md}
        fontSizeMob={theme.fonts.size.regular.md}
        fontHeight={theme.fonts.height.regular.md}
        fontHeightMob={theme.fonts.height.regular.md}
      >
        {list.title}
      </Text>
      {hasOnList && <IconsSelector icon="check_solid" color={theme.colors.main} />}
    </Styled.Wrapper>
  )
}
