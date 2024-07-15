import { FC, useState } from 'react'

import { Skeleton, Text } from '@ui-kit'
import { Flexbox } from '@components/atoms'

import { theme } from '@constants'
import { TFirebaseUser, TList } from '@types'
import { useBreakpoint } from '@hooks'
import { updateDocList } from '@api'

import { Styled } from './styled'
import { ActionBlock } from './molecules'
import { Icon } from '../Icon'

type TListItemProps = {
  uid: TFirebaseUser['uid']
  onEditClick: (list: TList) => void
  onDeleteClick: (id: string) => void
  isBookmarks?: boolean
  updateLists?: () => void
} & TList

export const ListItem: FC<TListItemProps> = ({
  isBookmarks,
  updateLists,
  uid,
  onEditClick,
  onDeleteClick,
  ...rest
}) => {
  const { isPinned, description, id, listItems, title } = rest
  const { isMob } = useBreakpoint()
  const [opened, setOpened] = useState(false)
  const [isChecked, setIsChecked] = useState(isPinned)
  const skeletonHeight = isMob ? 24 : 27
  const iconSize = isMob ? theme.icon_sizes.xs : theme.icon_sizes.sm

  const handlePin = () => {
    setIsChecked(!isChecked)
    updateDocList({
      uid,
      list: {
        description,
        id,
        isPinned: !isChecked,
        lastUpdate: new Date().toISOString(),
        listItems,
        title,
      },
      isBookmarks: false,
    }).then(() => updateLists?.())
  }

  return (
    <Styled.ListItem>
      <Flexbox justify="space-between" onClick={() => setOpened(!opened)}>
        <Flexbox align="center" gap={theme.space.xs2}>
          {title ? (
            <>
              <Text
                color={theme.colors.grey}
                fontHeightMob={theme.fonts.height.regular.md}
                fontSizeMob={theme.fonts.size.regular.md}
                fontWeightMob={theme.fonts.weight.medium}
                fontSize={theme.fonts.size.regular.lg}
                fontHeight={theme.fonts.height.regular.lg}
                fontWeight={theme.fonts.weight.medium}
              >
                {title}
              </Text>
              <Text
                color={theme.colors.main}
                fontHeightMob={theme.fonts.height.regular.lg}
                fontSizeMob={theme.fonts.size.regular.lg}
                fontWeightMob={theme.fonts.weight.medium}
                fontSize={theme.fonts.size.regular.lg}
                fontHeight={theme.fonts.height.regular.lg}
                fontWeight={theme.fonts.weight.medium}
              >
                {listItems?.length}
              </Text>
            </>
          ) : (
            <Skeleton height={skeletonHeight} width={100} radius={8} />
          )}
        </Flexbox>
        <Flexbox align="center" gap={theme.space.md}>
          {isPinned && !isBookmarks && (
            <Styled.Pin>
              <Icon icon="pin_solid" color={theme.colors.main} size={iconSize} />
            </Styled.Pin>
          )}
          {isMob && (
            <Styled.Icon isActive={opened}>
              <Icon icon="caretDown_solid" color={theme.colors.grey} size={iconSize} />
            </Styled.Icon>
          )}
        </Flexbox>
      </Flexbox>
      {(opened || !isMob) && (
        <ActionBlock
          list={rest}
          checked={isChecked}
          onChecked={handlePin}
          iconSize={iconSize}
          isBookmarks={isBookmarks}
          onDelete={onDeleteClick}
          onEdit={onEditClick}
        />
      )}
    </Styled.ListItem>
  )
}
